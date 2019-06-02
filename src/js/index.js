 $(function(){

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

 		/* Jquery */

 	 var btnModals = $('.btn_modal');
 	

 		btnModals.on('click', function(event){
 			event.preventDefault();
 			var target = $(event.target);
 			var link = target.attr('href');

 			var content = $(link);
 			content.addClass('active');

 			var container = content.parents('.modal-container');
 			container.removeClass('d-n');
 		});
 		var infoBtnModals = $('.info__btn');
 		infoBtnModals.on('click', function(event){
 			event.preventDefault();
 			var target = $(event.target);
 			var link = target.attr('href');

 			var content = $(link);
 			content.addClass('active');

 			var container = content.parents('.modal-container');
 			container.removeClass('d-n');

 		});




 		/* кнопка клоузер */

 		var closer = $('.closer');

 		closer.on('click', function(event){
 			var target = $(event.target);
 			var container = target.parents('.modal-container');
 			container.addClass('d-n');
 			var active = $('.modal-container .active');
 			active.removeClass('active');
 		});

 		$('.slider').slick({
 			prevArrow: $('.slider-container__btn_back'),
 			nextArrow: $('.slider-container__btn_next')

 		});


 		/* Tabs */


 		var tabHeads = $('.product-tab__link');
 		 tabHeads.on('click', function(event){
 		 	event.preventDefault();
 		 	 var target = $(event.target);
 		 	 var link = target.attr('href');

 		 	 var content = $(link);
 		 	 var active = $('.product-tab .active, .product-content .active');
 		 	 active.removeClass('active');
 		 	 target.parent().addClass('active');
 		 	 content.addClass('active');
 		 })


 		/* Easy scroll */

 		var navLinks = $('.navigation__a');

 		navLinks.on('click', function(event){
 			event.preventDefault();
 			var target = $(event.target);
 			var href = target.attr('href');

 			var elemToScroll = $(href);
 			$('html, body').animate({
 				scrollTop: elemToScroll.offset().top
 			}, 500)
 		});




 		/* кнопка возврата на верх страницы. сделал ее появление*/

 		$(window).on('scroll', function(event){
 			var target = $(event.target);
 			var scrollTop = target.scrollTop();
 			var btn = $('.btn-menu');
 			if(scrollTop > 800){
 				btn.addClass('scroll')
 			} else{
 				btn.removeClass('scroll')
 			} 			

 		}); 

 		/* Кнопка возврата на верх страницы, сделал чтобы она работала */
 		var btnMenu = $('.btn-menu');
 		btnMenu.on('click', function(event){
 			event.preventDefault();
 			var target = $(event.target);
 			var href = target.attr('href');
 			var menuBtn = $(href);
 			$('html, body').animate({
 				scrollTop: menuBtn.offset().top -50
 			}, 500)
 		})


})