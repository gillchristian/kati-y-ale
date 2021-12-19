/* --- State ---------------------------------------------------------------- */

var confettiTimer
var isHighlighting = false
var CONFETTI_READY = 'confetti_ready'

/* --- Actions -------------------------------------------------------------- */

function loadImage(onLoad) {
  var URL = "/assets/kati-y-ale.png";

  var img = new Image();

  img.onload = function () {
    var bg = document.querySelector("#main-bg");

    if (bg) {
      bg.classList.add("bg-img");

      bg.style.backgroundImage = "url(" + URL + ")";
    }

    onLoad();
  };

  img.src = URL;
}

function runConffetti() {
  clearTimeout(confettiTimer);

  if (window.confetti.isPaused) {
    window.confetti.start();
  }

  confettiTimer = setTimeout(function clearConfetti() {
    window.confetti.stop() 
  } , 5000);
}

function doHighlight(elem) {
  if (!isHighlighting) {
    isHighlighting = true
    elem.classList.add('animate-highlight');

    setTimeout(function removeHighlight() {
      isHighlighting = false
      elem.classList.remove('animate-highlight');
    }, 500);
  }
}

function confettiSetup() {
  const confettiBtn = document.querySelector('#do-confetti');

  confettiBtn.addEventListener('click', function onMainClick() {
    runConffetti();
    doHighlight(confettiBtn);
  });

  setTimeout(function firstConfetti() {
    runConffetti();
    doHighlight(confettiBtn);
  }, 1000);
}

/* --- Main ----------------------------------------------------------------- */

document.addEventListener(CONFETTI_READY, function onConfettiReady() {
  loadImage(confettiSetup);
});
