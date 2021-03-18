/* SLIDER 1*/

const slider1 = document.getElementById('before-after-slider-1');
const before1 = document.getElementById('before-image-1');
const beforeImage1 = before1.getElementsByTagName('img')[0];
const resizer1 = document.getElementById('resizer-1');

let active1 = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
let width1 = slider1.offsetWidth;
beforeImage1.style.width = width1 + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
let width1 = slider1.offsetWidth;
beforeImage1.style.width = width1 + 'px';
})

resizer1.addEventListener('mousedown',function(){
active1 = true;
resizer1.classList.add('resize');

});

document.body.addEventListener('mouseup',function(){
active1 = false;
resizer1.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
active1 = false;
resizer1.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
if (!active1) return;
let x1 = e.pageX;
x1 -= slider1.getBoundingClientRect().left;
slideIt1(x1);
pauseEvent1(e);
});

resizer1.addEventListener('touchstart',function(){
active1 = true;
resizer1.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
active1 = false;
resizer1.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
active1 = false;
resizer1.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
if (!active1) return;
let x1;

let i1;
for (i1=0; i1 < e.changedTouches.length; i1++) {
x1 = e.changedTouches[i1].pageX; 
}

x1 -= slider1.getBoundingClientRect().left;
slideIt1(x1);
pauseEvent1(e);
});

function slideIt1(x){
    let transform = Math.max(0,(Math.min(x,slider1.offsetWidth)));
    before1.style.width = transform+"px";
    resizer1.style.left = transform-0+"px";
}

//stop divs being selected.
function pauseEvent1(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}

/* SLIDER 2*/

const slider2 = document.getElementById('before-after-slider-2');
const before2 = document.getElementById('before-image-2');
const beforeImage2 = before2.getElementsByTagName('img')[0];
const resizer2 = document.getElementById('resizer-2');

let active2 = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
let width2 = slider2.offsetWidth;
beforeImage2.style.width = width2 + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
let width2 = slider2.offsetWidth;
beforeImage2.style.width = width2 + 'px';
})

resizer2.addEventListener('mousedown',function(){
active2 = true;
resizer2.classList.add('resize');

});

document.body.addEventListener('mouseup',function(){
active2 = false;
resizer2.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
active2 = false;
resizer2.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
if (!active2) return;
let x2 = e.pageX;
x2 -= slider2.getBoundingClientRect().left;
slideIt2(x2);
pauseEvent2(e);
});

resizer2.addEventListener('touchstart',function(){
active2 = true;
resizer2.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
active2 = false;
resizer2.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
active2 = false;
resizer2.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
if (!active2) return;
let x2;

let i2;
for (i2=0; i2 < e.changedTouches.length; i2++) {
x2 = e.changedTouches[i2].pageX; 
}

x2 -= slider2.getBoundingClientRect().left;
slideIt2(x2);
pauseEvent2(e);
});

function slideIt2(x){
    let transform = Math.max(0,(Math.min(x,slider2.offsetWidth)));
    before2.style.width = transform+"px";
    resizer2.style.left = transform-0+"px";
}

//stop divs being selected.
function pauseEvent2(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}

/* SLIDER 3*/

const slider3 = document.getElementById('before-after-slider-3');
const before3 = document.getElementById('before-image-3');
const beforeImage3 = before3.getElementsByTagName('img')[0];
const resizer3 = document.getElementById('resizer-3');

let active3 = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
let width3 = slider3.offsetWidth;
beforeImage3.style.width = width3 + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
let width3 = slider3.offsetWidth;
beforeImage3.style.width = width3 + 'px';
})

resizer3.addEventListener('mousedown',function(){
active3 = true;
resizer3.classList.add('resize');

});

document.body.addEventListener('mouseup',function(){
active3 = false;
resizer3.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
active3 = false;
resizer3.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
if (!active3) return;
let x3 = e.pageX;
x3 -= slider3.getBoundingClientRect().left;
slideIt3(x3);
pauseEvent3(e);
});

resizer3.addEventListener('touchstart',function(){
active3 = true;
resizer3.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
active3 = false;
resizer3.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
active3 = false;
resizer3.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
if (!active3) return;
let x3;

let i3;
for (i3=0; i3 < e.changedTouches.length; i3++) {
x3 = e.changedTouches[i3].pageX; 
}

x3 -= slider3.getBoundingClientRect().left;
slideIt3(x3);
pauseEvent3(e);
});

function slideIt3(x){
    let transform = Math.max(0,(Math.min(x,slider3.offsetWidth)));
    before3.style.width = transform+"px";
    resizer3.style.left = transform-0+"px";
}

//stop divs being selected.
function pauseEvent3(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}