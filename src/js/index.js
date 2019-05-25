 window.addEventListener('load' , function(){

 	var mobileBtn = document.querySelector('.mobile-menu');
 	var menu = document.querySelector('.menu');

 	mobileBtn.addEventListener('click', function(){
 		menu.classList.toggle('isOpened');
 		mobileBtn.classList.toggle('closer');
 	});


 	menu.addEventListener('click', function(){
 		menu.classList.remove('isOpened');
 		mobileBtn.classList.remove('closer');

 	});






});