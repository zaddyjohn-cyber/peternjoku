/* Bond Peter Home Loans — site script */

(function () {
  'use strict';

  // -------- Sticky header shadow on scroll --------
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // -------- Mobile menu toggle --------
  const menuBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      menuBtn.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // close on link tap (except submenu parents)
    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 1080 && !a.closest('.has-sub > a')) {
          navList.classList.remove('open');
          menuBtn.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // -------- Scroll reveal --------
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // -------- Year stamp --------
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // -------- Mortgage payment calculator --------
  function fmtMoney(n) {
    if (!isFinite(n)) return '$0';
    return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  }

  function calcMonthlyPI(principal, annualRate, years) {
    const r = (annualRate / 100) / 12;
    const n = years * 12;
    if (r === 0) return principal / n;
    return (principal * r) / (1 - Math.pow(1 + r, -n));
  }

  function bindRangeMirror(rangeEl, numberEl) {
    if (!rangeEl || !numberEl) return;
    rangeEl.addEventListener('input', () => { numberEl.value = rangeEl.value; refreshCalc(); });
    numberEl.addEventListener('input', () => { rangeEl.value = numberEl.value; refreshCalc(); });
  }

  function refreshCalc() {
    const calc = document.querySelector('[data-calc="mortgage"]');
    if (!calc) return;
    const price   = +calc.querySelector('[name=price]')?.value || 0;
    const downPct = +calc.querySelector('[name=downPct]')?.value || 0;
    const rate    = +calc.querySelector('[name=rate]')?.value || 0;
    const term    = +calc.querySelector('[name=term]')?.value || 30;
    const taxPct  = +calc.querySelector('[name=taxPct]')?.value || 0;
    const insYr   = +calc.querySelector('[name=insurance]')?.value || 0;
    const hoaMo   = +calc.querySelector('[name=hoa]')?.value || 0;
    const pmiPct  = +calc.querySelector('[name=pmi]')?.value || 0;

    const down = price * (downPct / 100);
    const loan = Math.max(price - down, 0);
    const pi   = calcMonthlyPI(loan, rate, term);
    const tax  = (price * (taxPct / 100)) / 12;
    const ins  = insYr / 12;
    const pmi  = downPct < 20 ? (loan * (pmiPct / 100)) / 12 : 0;
    const total = pi + tax + ins + hoaMo + pmi;

    const set = (sel, val) => { const el = calc.querySelector(sel); if (el) el.textContent = fmtMoney(val); };
    set('[data-out=total]', total);
    set('[data-out=pi]', pi);
    set('[data-out=tax]', tax);
    set('[data-out=ins]', ins);
    set('[data-out=pmi]', pmi);
    set('[data-out=hoa]', hoaMo);
    set('[data-out=loan]', loan);

    const downOut = calc.querySelector('[data-out=down]');
    if (downOut) downOut.textContent = fmtMoney(down) + ' (' + downPct + '%)';
  }

  document.querySelectorAll('[data-calc="mortgage"]').forEach(calc => {
    bindRangeMirror(calc.querySelector('[name=downPct]'), calc.querySelector('[name=downPctText]'));
    bindRangeMirror(calc.querySelector('[name=rate]'), calc.querySelector('[name=rateText]'));
    calc.querySelectorAll('input, select').forEach(i => i.addEventListener('input', refreshCalc));
    refreshCalc();
  });

  // -------- Affordability calculator --------
  function refreshAfford() {
    const calc = document.querySelector('[data-calc="afford"]');
    if (!calc) return;
    const income = +calc.querySelector('[name=income]')?.value || 0;     // monthly gross
    const debts  = +calc.querySelector('[name=debts]')?.value || 0;
    const rate   = +calc.querySelector('[name=rate]')?.value || 0;
    const term   = +calc.querySelector('[name=term]')?.value || 30;
    const dti    = +calc.querySelector('[name=dti]')?.value || 43;
    const taxPct = 2.0;
    const insYr  = 1500;

    const maxHousing = income * (dti / 100) - debts;
    const monthlyForPI = Math.max(maxHousing - (insYr / 12), 0); // tax depends on price; iterate
    const r = (rate / 100) / 12;
    const n = term * 12;
    // Solve for loan amount + factor in taxes proportional to price
    // Simplified: assume 20% down, taxes 2%/yr of price
    let low = 0, high = 2000000, est = 0;
    for (let i = 0; i < 40; i++) {
      const mid = (low + high) / 2;
      const loan = mid * 0.8;
      const pi = r === 0 ? loan / n : (loan * r) / (1 - Math.pow(1 + r, -n));
      const tax = (mid * (taxPct / 100)) / 12;
      const total = pi + tax + (insYr / 12);
      if (total > maxHousing) high = mid; else low = mid;
      est = mid;
    }

    const set = (sel, val) => { const el = calc.querySelector(sel); if (el) el.textContent = fmtMoney(val); };
    set('[data-out=maxPrice]', est);
    set('[data-out=maxPayment]', maxHousing);
    const dlo = calc.querySelector('[data-out=loan]');
    if (dlo) dlo.textContent = fmtMoney(est * 0.8);
  }
  document.querySelectorAll('[data-calc="afford"]').forEach(calc => {
    calc.querySelectorAll('input, select').forEach(i => i.addEventListener('input', refreshAfford));
    refreshAfford();
  });

  // -------- Refinance calculator --------
  function refreshRefi() {
    const calc = document.querySelector('[data-calc="refi"]');
    if (!calc) return;
    const balance  = +calc.querySelector('[name=balance]')?.value || 0;
    const currRate = +calc.querySelector('[name=currRate]')?.value || 0;
    const remYrs   = +calc.querySelector('[name=remYrs]')?.value || 0;
    const newRate  = +calc.querySelector('[name=newRate]')?.value || 0;
    const newTerm  = +calc.querySelector('[name=newTerm]')?.value || 30;
    const costs    = +calc.querySelector('[name=costs]')?.value || 0;

    const oldPI = calcMonthlyPI(balance, currRate, remYrs);
    const newPI = calcMonthlyPI(balance, newRate, newTerm);
    const monthlySaving = oldPI - newPI;
    const breakeven = monthlySaving > 0 ? Math.ceil(costs / monthlySaving) : 0;

    const set = (sel, val, opts) => {
      const el = calc.querySelector(sel); if (!el) return;
      el.textContent = opts && opts.text ? val : fmtMoney(val);
    };
    set('[data-out=oldPI]', oldPI);
    set('[data-out=newPI]', newPI);
    set('[data-out=saving]', monthlySaving);
    const be = calc.querySelector('[data-out=breakeven]');
    if (be) be.textContent = monthlySaving > 0 ? breakeven + ' months' : 'N/A';
  }
  document.querySelectorAll('[data-calc="refi"]').forEach(calc => {
    calc.querySelectorAll('input, select').forEach(i => i.addEventListener('input', refreshRefi));
    refreshRefi();
  });

  // -------- Amortization mini-table --------
  function buildAmort() {
    const calc = document.querySelector('[data-calc="amort"]');
    if (!calc) return;
    const loan = +calc.querySelector('[name=loan]')?.value || 0;
    const rate = +calc.querySelector('[name=rate]')?.value || 0;
    const term = +calc.querySelector('[name=term]')?.value || 30;
    const pi = calcMonthlyPI(loan, rate, term);
    const r = (rate / 100) / 12;
    let balance = loan;
    const out = calc.querySelector('[data-out=tbody]');
    if (!out) return;
    out.innerHTML = '';
    const totalMonths = term * 12;
    // Show year-by-year summary
    for (let year = 1; year <= term; year++) {
      let yearInterest = 0, yearPrincipal = 0;
      for (let m = 0; m < 12; m++) {
        const interest = balance * r;
        const principal = pi - interest;
        yearInterest += interest;
        yearPrincipal += principal;
        balance -= principal;
      }
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${year}</td><td>${fmtMoney(yearPrincipal)}</td><td>${fmtMoney(yearInterest)}</td><td>${fmtMoney(Math.max(balance,0))}</td>`;
      out.appendChild(tr);
      if (balance <= 0) break;
    }
  }
  document.querySelectorAll('[data-calc="amort"]').forEach(calc => {
    calc.querySelectorAll('input, select').forEach(i => i.addEventListener('input', buildAmort));
    buildAmort();
  });

  // -------- Glossary search --------
  const glossInput = document.getElementById('glossary-search');
  if (glossInput) {
    glossInput.addEventListener('input', () => {
      const q = glossInput.value.toLowerCase().trim();
      document.querySelectorAll('.glossary-card').forEach(card => {
        const t = (card.dataset.term + ' ' + card.textContent).toLowerCase();
        card.style.display = !q || t.includes(q) ? '' : 'none';
      });
    });
  }

  // -------- FAQ search --------
  const faqInput = document.getElementById('faq-search');
  if (faqInput) {
    faqInput.addEventListener('input', () => {
      const q = faqInput.value.toLowerCase().trim();
      document.querySelectorAll('.faq-item').forEach(item => {
        const t = item.textContent.toLowerCase();
        item.style.display = !q || t.includes(q) ? '' : 'none';
      });
    });
  }

  // -------- Generic form (no backend) — show success note --------
  document.querySelectorAll('form[data-demo]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const note = form.querySelector('.success-note');
      if (note) {
        note.hidden = false;
        note.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });

  // -------- Service worker registration --------
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

})();
