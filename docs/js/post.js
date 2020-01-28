import {moveUp, scaling} from './script.js';

let controller = new ScrollMagic.Controller();


let postAnimation = gsap.timeline()
  .add(moveUp('.content-img>img'));

let postScene = new ScrollMagic.Scene({
  triggerElement: ".content-img",
  triggerHook: 0.8,
  reverse: false,
})
  .setTween(postAnimation)
  .addTo(controller);