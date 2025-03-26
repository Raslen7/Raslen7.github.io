
// i get this function from the internet
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed(".multiple-text", {
      strings: ["Computer Science Student", "Web Developer", "Gamer", "Programmer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
  });

  const audio = document.getElementById('background-audio');
  audio.muted = false; 
  
  // Expanded list of interaction events
  const interactions = [
      'click',              // Mouse clicks
      'touchstart',         // Touch screens
      'touchend',           // Touch screens
      'touchmove',          // Touch screens
      'keydown',            // Keyboard
      'keyup',              // Keyboard
      'mousedown',         // Mouse
      'mouseup',           // Mouse
      'mousemove',         // Mouse
      'scroll',            // Scrolling
      'wheel',             // Mouse wheel
      'pointerdown',       // Pointer devices
      'pointerup',         // Pointer devices
      'gesturestart',      // Mobile gestures
      'gesturechange',     // Mobile gestures
      'deviceorientation', // Mobile tilt
      'devicemotion'       // Mobile motion
  ];

  // Function of  audio play
  const playAudio = () => {
      audio.play()
          .then(() => {
              console.log("Audio playback started successfully");
              // Remove all interaction listeners after successful play
              interactions.forEach(event => {
                  document.body.removeEventListener(event, playAudio);
              });
          })
          .catch(error => {
              console.log("Audio play attempt failed:", error.message);
          });
  };

  setTimeout(() => {
      playAudio();
  }, 1000);

  interactions.forEach(event => {
      try {
          document.body.addEventListener(event, playAudio, { 
              once: true,
              passive: true 
          });
      } catch (e) {
          console.log(`Could not add ${event} listener`, e);
      }
  });

  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      document.body.style.cursor = 'pointer';
      const iosPlay = () => {
          audio.play().then(() => {
              document.body.removeEventListener('touchend', iosPlay);
          });
      };
      document.body.addEventListener('touchend', iosPlay, { once: true });
  }
});