function to(x) {
  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.isIntersecting ? entry.target.style.animation = `to-${x} 1s ease forwards` : entry.target.style.animation = 'none';
    });
  });
  document.querySelectorAll(`.to-${x}`).forEach(background => observer.observe(background));
}
//Colores
to('black');
to('blue');
to('darkblue');
to('yellow')
to('orange');
to('gray')
to('white');
//Movimientos
to('left');
to('right');
to('top')
to('bottom');