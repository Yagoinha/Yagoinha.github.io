// oi! esse arquivinho cuida de duas coisas:
// o botão que vira PDF, e as seções que aparecem suavinho quando você rola.
// nada muito complicado, mas feito com carinho :)

(function () {

  // o botão de baixar em PDF é só um atalho pra caixa de impressão do navegador.
  // o capricho mesmo tá no CSS, que deixa o papel bonitinho.
  var pdfBtn = document.getElementById('pdfBtn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', function () {
      window.print();
    });
  }

  // aqui eu fico de olho nas seções e vou chamando uma de cada vez pra entrar em cena.
  // tipo "agora é sua vez, pode aparecer!" — e elas obedecem.
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
    // navegador antigo? sem drama, mostra tudo de uma vez e segue a vida.
    alvos.forEach(function (el) { el.classList.add('in'); });
  }

})();

// se você tá lendo isso no devtools, manda um oi no meu github :)
