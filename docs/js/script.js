import {preloaderDuration} from './preloader.js';

const navigationLinks = document.querySelectorAll('.navigation>.list>li'),
      animationDelay = preloaderDuration - 300,
      animationDuration = 1;
     
function scaling(elements) {
  return  gsap.from(elements, {
    scale: 0,
    opacity: 0,
    ease: "power2.out",
    duration: animationDuration,
    stagger: .1
  });
}

function moveUp(elements) {
  return gsap.from(elements, {
    y: "500",
    ease: "power2.out",
    opacity: 0,
    duration: animationDuration*2,
    stagger: .1
  })
}

function removeOpacity(elements) {
  return gsap.fromTo(elements, {
    opacity: 1,
  }, {
    ease: "power2.out",
    opacity: 0,
    duration: animationDuration,
  })
}

window.addEventListener('load', function() {
  setTimeout(function() {
    let pageAnimation = gsap.timeline()
    .add(moveUp(navigationLinks))
  }, 1200)
  
})

//Переход между страницами

document.body.addEventListener('click', handleClick)

function handleClick(event) {
  let target = event.target;
  if(target.tagName === 'A'||target.classList.contains('title--link')){
    try {
      event.preventDefault();
      let link = target.closest('[href]').getAttribute('href');

      if(link !== '#') {
        removeOpacity(document.body);
        setTimeout(() => window.location.href = link, animationDuration*1000 - 100);
        return
      }
      alert('Sorry, page not found')
    } catch(err) {
      throw err
    }
  }
  return
}

export {moveUp, scaling, animationDelay}