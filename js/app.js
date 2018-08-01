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

// set copyright current year
document.getElementById('currentYear').textContent = new Date().getFullYear();