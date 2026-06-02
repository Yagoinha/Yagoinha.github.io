(function () {
  var pdfBtn = document.getElementById('pdfBtn');
  var hint = document.getElementById('pdfHint');
  var okBtn = document.getElementById('pdfOk');
  var cancelBtn = document.getElementById('pdfCancel');

  function abrirHint() { if (hint) hint.hidden = false; }
  function fecharHint() { if (hint) hint.hidden = true; }

  if (pdfBtn) {
    pdfBtn.addEventListener('click', abrirHint);
  }
  if (cancelBtn) {
    cancelBtn.addEventListener('click', fecharHint);
  }
  if (okBtn) {
    okBtn.addEventListener('click', function () {
      fecharHint();
      setTimeout(function () { window.print(); }, 120);
    });
  }
  if (hint) {
    hint.addEventListener('click', function (e) {
      if (e.target === hint) fecharHint();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fecharHint();
    });
  }

  var alvos = document.querySelectorAll('header, section');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    alvos.forEach(function (el) { io.observe(el); });
  } else {
    alvos.forEach(function (el) { el.classList.add('in'); });
  }
})();
