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

 	var active = document.querySelector('.active');
 	var snacks = document.querySelector('#snacks');
  	var sweets = document.querySelector('#sweets');
  	var coffee = document.querySelector('#coffee');
 	var coffeeTab = document.querySelector('#coffeeTab');
 	var sweetsTab = document.querySelector('#sweetsTab');
 	var snacksTab = document.querySelector('#snacksTab');
 	
	coffeeTab.addEventListener('click', function(){
	 		coffeeTab.classList.add('active');
	 		sweetsTab.classList.remove('active');
	 		snacksTab.classList.remove('active');
	 		coffee.classList.add('active');
	 		sweets.classList.remove('active');
	 		snacks.classList.remove('active');
	 	});


 	sweetsTab.addEventListener('click', function(){
 		sweetsTab.classList.add('active');
 		coffeeTab.classList.remove('active');
 		snacksTab.classList.remove('active');
 		sweets.classList.add('active');
 		coffee.classList.remove('active');
 		snacks.classList.remove('active');

 	});

 	

 	snacksTab.addEventListener('click', function(){
 		snacksTab.classList.add('active');
 		sweetsTab.classList.remove('active');
 		coffeeTab.classList.remove('active');
 		snacks.classList.add('active');
 		sweets.classList.remove('active');
 		coffee.classList.remove('active');
 	});





});