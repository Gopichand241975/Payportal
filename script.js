/* =========================================================
   script.js — Payment Dashboard
   Handles: copy-to-clipboard, footer year, scroll animations
========================================================= */

/* ── 1. Footer year ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── 2. Scroll entrance animations ──────────────────── */
  var animatedEls = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity    = '1';
          entry.target.style.transform  = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    animatedEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback: just show everything if IntersectionObserver is unsupported */
    animatedEls.forEach(function (el) {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    });
  }

});


/* ── 3. Copy phone number to clipboard ──────────────────── */
function copyPhoneNumber() {
  var phoneEl  = document.getElementById('phone-number-text');
  var btn      = document.getElementById('copy-btn');
  var btnText  = document.getElementById('copy-btn-text');
  var copyIcon = document.getElementById('copy-icon');
  var feedback = document.getElementById('copy-feedback');

  if (!phoneEl) return;
  var phoneNumber = phoneEl.textContent.trim();

  function onCopied() {
    btn.classList.add('copied');
    btnText.textContent = 'Copied!';
    copyIcon.innerHTML  =
      '<polyline points="20 6 9 17 4 12" stroke="currentColor" ' +
      'stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    feedback.classList.add('visible');

    setTimeout(function () {
      btn.classList.remove('copied');
      btnText.textContent = 'Copy Number';
      copyIcon.innerHTML  =
        '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>' +
        '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>';
      feedback.classList.remove('visible');
    }, 2500);
  }

  function onError() {
    if (btnText) btnText.textContent = 'Could not copy';
    setTimeout(function () {
      if (btnText) btnText.textContent = 'Copy Number';
    }, 2000);
  }

  /* Modern Clipboard API */
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNumber).then(onCopied).catch(onError);
    return;
  }

  /* Fallback for older browsers */
  var ta = document.createElement('textarea');
  ta.value = phoneNumber;
  ta.style.cssText = 'position:fixed;opacity:0;left:-9999px;top:-9999px;';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    var success = document.execCommand('copy');
    if (success) { onCopied(); } else { onError(); }
  } catch (e) {
    onError();
  }
  document.body.removeChild(ta);
}
