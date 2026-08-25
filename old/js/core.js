/* ==========================================================================
   PROJECT HEXAGONE — SHARED CORE SCRIPT
   ========================================================================== */

(function () {
  'use strict';

  var burger = document.querySelector('.nav-burger');
  var mainNav = document.querySelector('.main-nav');
  if (burger && mainNav) {
    burger.addEventListener('click', function () {
      var open = mainNav.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  var LANG_KEY = 'hexagone-lang';
  var supported = ['zh', 'fr', 'en'];

  function getLang() {
    return localStorage.getItem(LANG_KEY) || 'zh';
  }

  function setLang(lang) {
    if (supported.indexOf(lang) === -1) return;
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    /* 旧版短文本 attribute 映射（仍兼容） */
    document.querySelectorAll('[data-zh]').forEach(function (el) {
      var val = el.dataset[lang];
      if (val !== undefined) el.textContent = val;
    });
    /* 新版内容块切换：data-lang-block="zh|fr|en" 整块显隐 */
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.style.display = (el.dataset.langBlock === lang) ? '' : 'none';
    });
  }

  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.dataset.lang);
    });
  });

  applyLang(getLang());

  var revealEls = document.querySelectorAll('.reveal, .bar-row');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      header.style.borderBottomColor = y > 40
        ? 'var(--border-hairline-strong)'
        : 'var(--border-hairline)';
    }, { passive: true });
  }

  window.Hexagone = window.Hexagone || {};
  window.Hexagone.getLang = getLang;
  window.Hexagone.setLang = setLang;
  window.Hexagone.applyLang = applyLang;
})();
