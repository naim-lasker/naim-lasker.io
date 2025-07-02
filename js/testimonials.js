/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Slider


******************************/

$j(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $j('.header');
	var menu = $j('.menu');
	var burger = $j('.hamburger');
	var menuActive = false;

	setHeader();

	$j(window).on('resize', function()
	{
		setHeader();

		if(window.innerWidth > 1280)
		{
			if(menuActive)
			{
				closeMenu();
			}
		}
		setTimeout(function()
		{
			$j(".main_content_scroll").mCustomScrollbar("update");
		}, 375);
	});

	$j(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initSlider();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($j(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($j('.hamburger').length && $j('.menu').length)
		{
			var hamb = $j('.hamburger');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Slider

	*/

	function initSlider()
	{
		if($('.test_slider').length)
		{
			var slider = $('.test_slider');
			slider.owlCarousel(
			{
				items: 3,
				autoplay:false,
				loop:true,
				nav:false,
				dots:true,
				smartSpeed:600,
				margin:30,
				responsive:
				{
					0:{items:1},
					900:{items:2},
					1199:{items:1},
					1440:{items:2},
					1680:{items:3}
				}
			});
		}
	}

});