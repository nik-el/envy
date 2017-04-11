document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    var scrollEl = document.querySelector('.scroll__progress');
    var scrolled  = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLength = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollNow = parseFloat((scrolled * 100) / scrollLength);
    var scrollPercent = ( +scrollNow.toFixed(1) );
    scrollEl.style.width = scrollPercent+'%';
  };
});
