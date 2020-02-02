import {moveUp, scaling, animationDelay} from './script.js';

const   header = document.querySelector('main-header'),
        headerSlider = document.querySelector('.slider--header'), 
        headerSliderElements = [],  
        latestSection = document.querySelector('.latest'),
        latestPosts = document.querySelectorAll('.latest__list>li>.blog-post'),
        videoSection = document.querySelector('.video'),
        videoPosts = document.querySelectorAll('.video__wrapper>.blog-post'),
        featuredSection = document.querySelector('.featured'),
        featuredPost = document.querySelectorAll('.featured>.blog-post'),
        popularSection = document.querySelector('.popular'),
        popularPosts = document.querySelectorAll('.popular__list>li>.blog-post');

function setHeaderSliderElements() {
    headerSliderElements.push(headerSlider.querySelector('article').children);
    headerSliderElements.push(headerSlider.querySelectorAll('button'));
    headerSliderElements.push(headerSlider.querySelectorAll('ol'));
    return headerSliderElements;
}  

window.addEventListener('load', function() {
    setTimeout(function() {
        let headerSliderAniamtion = gsap.timeline()
        .add(scaling(setHeaderSliderElements()))
    }, animationDelay)
})

let controller = new ScrollMagic.Controller();

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
    .add(moveUp(videoPosts));

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
