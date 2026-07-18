"""
Google Indexing API submission - all combo/location/service pages.
Split into two days to stay under the 200 requests/day quota.

Usage:
    python submit-all-pages-indexing-api.py --day 1
    python submit-all-pages-indexing-api.py --day 2   (run tomorrow)

Requires:
    pip install google-auth
    Service account key at C:/Users/Johno/.claude/google-indexing-key.json
    Service account added as Search Console Owner.
"""

import sys
import json
import time
import urllib.request
import urllib.error
from pathlib import Path

from google.oauth2 import service_account
import google.auth.transport.requests

KEY_FILE     = r"C:\Users\Johno\.claude\google-indexing-key.json"
SITE_ROOT    = Path(r"C:\Users\Johno\OneDrive - hengtek\Desktop\PETER NJOKU MORTGAGE OFFICER")
BASE_URL     = "https://bondmortgagesolutions.com"
DELAY_SEC    = 0.5

TOP_LEVEL = [
    "index.html",
    "fha-loans.html",
    "va-loans.html",
    "usda-loans.html",
    "conventional-loans.html",
    "refinance.html",
    "down-payment-assistance.html",
    "pre-approval.html",
    "first-time-homebuyer-guide.html",
    "about.html",
    "contact.html",
    "apply.html",
    "mortgage-calculators.html",
    "blog.html",
    "faq.html",
    "realtor-partners.html",
    "reviews.html",
]

COMBO_DIRS = [
    "fha-loans",
    "va-loans",
    "usda-loans",
    "conventional-loans",
    "refinance",
    "down-payment-assistance",
]

LOCATION_DIR = "locations"


def collect_urls():
    urls = []

    for page in TOP_LEVEL:
        if (SITE_ROOT / page).exists():
            urls.append(f"{BASE_URL}/{page}")
        else:
            print(f"  SKIP (not found): {page}")

    loc_dir = SITE_ROOT / LOCATION_DIR
    if loc_dir.is_dir():
        for f in sorted(loc_dir.glob("*.html")):
            urls.append(f"{BASE_URL}/{LOCATION_DIR}/{f.name}")

    for subdir in COMBO_DIRS:
        combo_dir = SITE_ROOT / subdir
        if combo_dir.is_dir():
            for f in sorted(combo_dir.glob("*.html")):
                urls.append(f"{BASE_URL}/{subdir}/{f.name}")
        else:
            print(f"  SKIP (dir not found): {subdir}/")

    return urls


def get_token():
    creds = service_account.Credentials.from_service_account_file(
        KEY_FILE,
        scopes=["https://www.googleapis.com/auth/indexing"]
    )
    req = google.auth.transport.requests.Request()
    creds.refresh(req)
    return creds.token


def submit_url(url, token):
    body = json.dumps({"url": url, "type": "URL_UPDATED"}).encode()
    req = urllib.request.Request(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        data=body,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        }
    )
    try:
        urllib.request.urlopen(req)
        return "OK"
    except urllib.error.HTTPError as e:
        detail = e.read().decode()[:150]
        return f"ERR {e.code}: {detail}"


def main():
    day = 1
    if "--day" in sys.argv:
        idx = sys.argv.index("--day")
        day = int(sys.argv[idx + 1])

    print(f"=== Bond Peter Njoku -- Indexing API Submission (Day {day}/2) ===\n")

    print("Collecting URLs from file system...")
    all_urls = collect_urls()
    total = len(all_urls)
    print(f"Total pages found: {total}")

    mid = total // 2
    if day == 1:
        urls = all_urls[:mid]
        print(f"Day 1 batch: {len(urls)} pages (1-{mid})\n")
    else:
        urls = all_urls[mid:]
        print(f"Day 2 batch: {len(urls)} pages ({mid+1}-{total})\n")

    print("Authenticating with service account...")
    token = get_token()
    print("Token obtained.\n")

    ok_count  = 0
    err_count = 0
    errors    = []

    for i, url in enumerate(urls, 1):
        result = submit_url(url, token)
        status = "OK " if result == "OK" else "ERR"
        print(f"[{i:3d}/{len(urls)}] {status}  {url}")
        if result == "OK":
            ok_count += 1
        else:
            err_count += 1
            errors.append((url, result))
        time.sleep(DELAY_SEC)

    print(f"\n=== DONE ===")
    print(f"Submitted OK : {ok_count}")
    print(f"Errors       : {err_count}")

    if errors:
        print("\nFailed URLs:")
        for url, reason in errors:
            print(f"  {url}")
            print(f"    -> {reason}")

    if day == 1:
        print(f"\nRun Day 2 tomorrow:")
        print(f"  python submit-all-pages-indexing-api.py --day 2")
    else:
        print(f"\nAll done. Google crawls submitted URLs within 24-72 hours.")
        print(f"Check: Search Console -> Pages -> Submitted & Indexed.")


if __name__ == "__main__":
    main()
