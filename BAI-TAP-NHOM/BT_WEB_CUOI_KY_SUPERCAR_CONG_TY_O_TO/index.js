//code của phần header //
var slides = document.getElementsByClassName('tc-slides');
window.onload = function()
{
    var userClickNone = document.getElementById('divSignin');
    userClickNone.style.display = 'none';

    slides[0].style.display = 'block';
};

function clickToSignin(){
	var userClick = document.getElementById('divSignin');
	if(userClick.style.display === 'none'){
		userClick.style.display = 'block';
	}
	else userClick.style.display = 'none';
}
// hết code phần header //



// code phần main //
// phần carousel //
var slidesIndex;
function carouselPre(number){
	for(var i=0; i<slides.length; i++){
		slides[i].style.display = 'none';
	}
	slidesIndex = number-1;
	slides[slidesIndex].style.display = 'block';
}

// function setTimeoutSlides(){
// 	var slides = document.getElementsByClassName('tc-slides');
// 	if(slidesIndex <= (slides.length-1) && slidesIndex !== -1){
// 		slides[slidesIndex].style.display = 'block';
// 		setTimeout(function() {
// 			slides[slidesIndex].style.display = 'none';
// 			slidesIndex++;
// 			if(slidesIndex <= (slides.length-1)){
// 				setTimeoutSlides();
// 			}
// 			else if(slidesIndex > (slides.length-1)){
// 				slidesIndex = 0;
// 				setTimeoutSlides();
// 			}
// 		}, 5000);
// 	}
// }

// bắt đầu phần dòng xe

function displayProductImg(code){
	let imgPath = document.getElementById(code).getAttribute('class');
	var imgSrc = document.getElementById('dxUrus-img');
	imgSrc.setAttribute('src', imgPath); 
}
var num=1;
function displayProduct(number){
	var code = "dxUrusImg"+number;
	let imgPath = document.getElementById(code).getAttribute('src');
	var imgSrc = document.getElementById('dxUrusImg0');
	imgSrc.setAttribute('src', imgPath); 
	num=number;
}
function Previous(){
	if(num>1) num--;
	displayProduct(num);
}
function Next(){
	if(num<8) num++;
	displayProduct(num);
}

// kết thúc phần dòng xe


// hết code phần main //
	
