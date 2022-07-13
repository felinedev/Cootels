const sliderTrack = document.querySelector('.slider-track'),
	indicators = document.querySelectorAll('.indicator');
let position = 0,
	indicatorIndex = 0;

function nextSlide(){
	if(position < (indicators.length - 1) * 750){
		position+= 750;
		indicatorIndex++;
	} else{
		position = 0;
		indicatorIndex = 0;
	}
	sliderTrack.style.left = -position + "px";
	thisSlide(indicatorIndex)
}
function thisSlide(index){
	for(let indicator of indicators){
		indicator.classList.remove('active')
	}
	indicators[index].classList.add('active')
}
indicators.forEach((indicator, index) =>{
	indicator.addEventListener('click', () => {
		position = 750 * index;
		sliderTrack.style.left = -position + "px";
		indicatorIndex = index;
		thisSlide(indicatorIndex)
	})
})
//add interal
setInterval(() => {nextSlide()}, 3000)