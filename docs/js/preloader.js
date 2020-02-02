const proloaderElements = document.querySelectorAll('.preloader>g>circle'),
      preloaderDuration = 1500;

gsap.to(proloaderElements, {
  duration: 1.5,
  strokeDashoffset: 392.68,
  repeat:-1,
  ease: Back.easeOut.config(2),
  stagger: 1
})

window.addEventListener('load', function() {

  setTimeout(function() {
    document.body.style.overflow = "auto";
    document.querySelector('.preloader-container').style.display = 'none';
  }, preloaderDuration)
})

export {preloaderDuration}