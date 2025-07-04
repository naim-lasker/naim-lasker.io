/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Loaders


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
	var ctrl = new ScrollMagic.Controller();

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
	initLoaders();

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

	4. Init Loaders

	*/

	function initLoaders()
	{
		if($j('.loader').length)
		{
			var loaders = $j('.loader');

			loaders.each(function()
			{
				var loader = this;
				var endValue = $j(loader).data('perc');

				var loaderScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var bar = new ProgressBar.Circle(loader,
					{
						color: '#8583e1',
						// This has to be the same size as the maximum width to
						// prevent clipping
						strokeWidth: 1,
						trailWidth: 20,
						trailColor: '#e5e6e8',
						easing: 'easeInOut',
						duration: 1400,
						text:
						{
							autoStyleContainer: false
						},
						from:{ color: '#8583e1', width: 1 },
						to: { color: '#8583e1', width: 1 },
						// Set default step function for all animate calls
						step: function(state, circle)
						{
							circle.path.setAttribute('stroke', state.color);
							circle.path.setAttribute('stroke-width', state.width);

							var value = Math.round(circle.value() * 100);
							if (value === 0)
							{
								circle.setText('0%');
							}
							else
							{
								circle.setText(value + "%");
							}
						}
					});
					bar.text.style.fontFamily = '"Montserrat", sans-serif';
					bar.text.style.fontSize = '44px';
					bar.text.style.fontWeight = '700';
					bar.text.style.color = "#100f3a";


					bar.animate(endValue);  // Number from 0.0 to 1.0
		    	})
			    .addTo(ctrl);
			});
		}
	}

});