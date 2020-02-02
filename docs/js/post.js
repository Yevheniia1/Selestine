import {moveUp, scaling, animationDelay} from './script.js';

const bannerContainer = document.querySelector('.banner'),
      bannerElements = bannerContainer.children;

let controller = new ScrollMagic.Controller();

window.addEventListener('load', function() {
  setTimeout(function() {
    let bannerAnimation = gsap.timeline()
    .add(scaling(bannerElements));
  }, animationDelay)
})

let postAnimation = gsap.timeline()
  .add(moveUp('.content-img>img'));

let postScene = new ScrollMagic.Scene({
  triggerElement: ".content-img",
  triggerHook: 0.8,
  reverse: false,
})
  .setTween(postAnimation)
  .addTo(controller);