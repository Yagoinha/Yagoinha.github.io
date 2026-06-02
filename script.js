(function () {
  var pdfBtn = document.getElementById('pdfBtn');
  var sheet = document.getElementById('sheet');

  if (pdfBtn && sheet && typeof html2pdf !== 'undefined') {
    pdfBtn.addEventListener('click', function () {
      pdfBtn.disabled = true;
      document.body.classList.add('exporting');

      var opt = {
        margin: 8,
        filename: 'yago-barbosa-dini.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#FBFAF6' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      html2pdf().set(opt).from(sheet).save().then(function () {
        document.body.classList.remove('exporting');
        pdfBtn.disabled = false;
      }).catch(function () {
        document.body.classList.remove('exporting');
        pdfBtn.disabled = false;
      });
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
