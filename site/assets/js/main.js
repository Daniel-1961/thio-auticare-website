document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navBar = document.querySelector('.nav-bar');
  if (toggle && navBar) {
    toggle.addEventListener('click', function () {
      var isOpen = navBar.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var hero = document.querySelector('.hero');
  if (hero) {
    // Trigger the single hero entrance animation once, on load.
    requestAnimationFrame(function () {
      hero.classList.add('is-ready');
    });
  }
});
