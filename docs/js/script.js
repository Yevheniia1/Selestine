const header = document.querySelector('main-header'),
      logo = document.querySelector('.logo>p'),
      navigationLinks = document.querySelectorAll('.navigation>.list>li'),
      headerSlider = document.querySelector('.slider--header'),
      latestSection = document.querySelector('.latest'),
      latestPosts = document.querySelectorAll('.latest__list>li'),
      videoSection = document.querySelector('.video'),
      videoPosts = document.querySelectorAll('.video__wrapper>.blog-post'),
      featuredSection = document.querySelector('.featured'),
      featuredPost = document.querySelectorAll('.featured>.blog-post'),
      popularSection = document.querySelector('.popular'),
      popularPosts = document.querySelectorAll('.popular__list>li');

function scaling(elements) {
  return  gsap.from(elements, {
    scale: 0,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
  });
}

function moveLeft(elements) {
  return gsap.from(elements, {
    x: "500",
    duration: 1,
    ease: "power1.out",
    opacity: 0,
    stagger: .1
  })
}

function moveRight(elements) {
  return gsap.from(elements, {
    x: "-500",
    duration: 1,
    ease: "power1.out",
    opacity: 0,
    stagger: .1
  })
}

function moveUp(elements) {
  return gsap.from(elements, {
    y: "500",
    duration: 1,
    ease: "power1.out",
    opacity: 0,
    stagger: .1
  })
}

let controller = new ScrollMagic.Controller();

let headerAnimation = gsap.timeline()
.add(moveLeft(navigationLinks))
.add(scaling(headerSlider));

let headerScene = new ScrollMagic.Scene({
  triggerElement: header,
  triggerHook: 0,
  reverse: false,
})
  .setTween(headerAnimation)
  .addTo(controller);

let latestAnimation = gsap.timeline()
.add(moveUp(latestPosts));

let latestsScene = new ScrollMagic.Scene({
  triggerElement: latestSection,
  triggerHook: .8,
  reverse: false,
})
  .setTween(latestAnimation)
  .addTo(controller);

let videoAnimation = gsap.timeline()
.add(moveLeft(videoPosts));

let videoScene = new ScrollMagic.Scene({
  triggerElement: videoSection,
  triggerHook: .8,
  reverse: false,
})
  .setTween(videoAnimation)
  .addTo(controller);

let featuredAnimation = gsap.timeline()
  .add(scaling(featuredPost));

let featuredScene = new ScrollMagic.Scene({
  triggerElement: featuredSection,
  triggerHook: .8,
  reverse: false,
})
  .setTween(featuredAnimation)
  .addTo(controller);

let popularAnimation = gsap.timeline()
  .add(moveUp(popularPosts));

let popularScene = new ScrollMagic.Scene({
  triggerElement: popularSection,
  triggerHook: .8,
  reverse: false,
})
  .setTween(popularAnimation)
  .addTo(controller);
  