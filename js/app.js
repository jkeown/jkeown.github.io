// mobile side nav
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {edge:'right'});
});

// carousel
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.slider');
  M.Slider.init(elems,{
    interval: 4000,
    indicators: true
  });
});

// scrollspy
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(elems,{});
});

// nav link highlight
{
  const elems = document.querySelectorAll('.nav-link');

  const config = {
    root: null,
    rootMargin: "-50px 0px -50px 0px",
    threshold: [1.0]
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
      else {
        entry.target.classList.remove('active');
      }
    });
  }, config);

  elems.forEach(elem => {
    observer.observe(elem);
  });

}

// set copyright current year
document.getElementById('currentYear').textContent = new Date().getFullYear();