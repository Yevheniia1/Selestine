
let animation_items = new Map();

animation_items.set('opacity', Array.from(document.querySelectorAll('.move-opacity')))
               .set('scale', Array.from(document.querySelectorAll('.move-scale')))
               .set('top', Array.from(document.querySelectorAll('.move-top')))
               .set('right', Array.from(document.querySelectorAll('.move-right')))
               .set('left', Array.from(document.querySelectorAll('.move-left')))
               .set('bottom', Array.from(document.querySelectorAll('.move-bottom')));

let animation_arr = [];

(function() {
  for(let item of animation_items.values()) {
    animation_arr = animation_arr.concat(item);
  }
})()



function isVisible(elem) {
  if(elem.className.includes('animation')) {
    return
  }
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  return topVisible;
}

function showVisible() {

  for (let item of animation_arr) {

  	if (isVisible(item)){
         animatioin(item);
  	  }
  }
}

function animatioin(item) {
  for(let [key, value] of animation_items.entries()) {
      if(value.includes(item)) {
        item.classList.add(`animation-${key}`)
        let index = value.indexOf(item);
        value.splice(index, 1);
        return
      }  
    }
}

showVisible();
window.onscroll = showVisible;