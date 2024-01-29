document.addEventListener('DOMContentLoaded', function () {
    const circularButton = document.getElementById('circularButton');
    const analyzeText = document.getElementById('analyzeText');
    const loadingDots = document.getElementById('loadingDots');
    const scanningText = document.getElementById('scanningText');

    function startLoading() {
       const innerCircle = document.getElementById('innerCircle');
       const loadingAnimation = document.getElementById('loadingAnimation');

       innerCircle.style.backgroundColor = innerCircle.style.backgroundColor === 'transparent' ? '#9680F4' : '#9680F4';
       loadingAnimation.style.opacity = loadingAnimation.style.opacity === '0' ? '1' : '1';

       analyzeText.textContent = 'Analyzing';

       animateLoadingDots();

       setTimeout(() => {
          scanningText.textContent = 'Scanning for Dark Patterns!';
       }, 1000);
    }

    function animateLoadingDots() {
       let dots = 0;

       function displayDots() {
          loadingDots.textContent = '.'.repeat(dots);
          dots = (dots + 1) % 4;

          setTimeout(displayDots, 500);
       }

       displayDots();
    }

    circularButton.addEventListener('click', startLoading);
 });
