const header = document.querySelector('main-header'),
      navigationLinks = document.querySelectorAll('.navigation>.list>li'),
      headerSlider = document.querySelector('.slider--header'),
      page = document.querySelector('body');
     
function scaling(elements) {
  return  gsap.from(elements, {
    scale: 0,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
  });
}

function moveUp(elements) {
  return gsap.from(elements, {
    y: "500",
    ease: "power1.out",
    opacity: 0,
    stagger: .1
  })
}


// Анимации появления на странице блоков
let controller = new ScrollMagic.Controller();


let headerAnimation = gsap.timeline()
  // .add(emergence, -1)
  .add(moveUp(navigationLinks))
  .add(moveUp(headerSlider));


window.addEventListener('load', function() {

  setTimeout(function() {
    let headerScene = new ScrollMagic.Scene({
      triggerElement: header,
      triggerHook: 0,
      reverse: false,
    })
      .setTween(headerAnimation)
      .addTo(controller);  
    
  }, 1200)
  
})

//Переход между страницами

page.addEventListener('click', handleClick)

function handleClick(event) {
  let target = event.target;
  if(target.tagName !== 'BUTTON'){
    try {
      event.preventDefault();
      document.body.classList.add('out');
      let link = target.closest('[href]').getAttribute('href');
      setTimeout(() => window.location.href = link, 900)
    } catch(err) {
      throw err
    }
  }
}

export {moveUp, scaling}