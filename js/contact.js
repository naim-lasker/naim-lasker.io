/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Google Map


******************************/

$(document).ready(function() {
  "use strict";

  /* 

	1. Lets and Inits

	*/

  let header = $(".header");
  let menu = $(".menu");
  let burger = $(".hamburger");
  let menuActive = false;
  let map;

  setHeader();

  $(window).on("resize", function() {
    setHeader();

    if (window.innerWidth > 1280) {
      if (menuActive) {
        closeMenu();
      }
    }
    setTimeout(function() {
      jQuery(".main_content_scroll").mCustomScrollbar("update");
    }, 375);
  });

  $(document).on("scroll", function() {
    setHeader();
  });

  initMenu();
  initGoogleMap();

  /* 

	2. Set Header

	*/

  function setHeader() {
    if ($(window).scrollTop() > 91) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  }

  /* 

	3. Init Menu

	*/

  function initMenu() {
    if ($(".hamburger").length && $(".menu").length) {
      var hamb = $(".hamburger");

      hamb.on("click", function() {
        if (!menuActive) {
          openMenu();
        } else {
          closeMenu();
        }
      });
    }
  }

  function openMenu() {
    menu.addClass("active");
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass("active");
    menuActive = false;
  }

  /* 

	4. Init Google Map

	*/

  function initGoogleMap() {
    const myLatlng = new google.maps.LatLng(23.78, 90.42);
    const mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: true,
      scrollwheel: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      styles: [
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffeba1"
            }
          ]
        }
      ]
    };

    // Initialize a map with options
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Re-center map after window resize
    google.maps.event.addDomListener(window, "resize", function() {
      setTimeout(function() {
        google.maps.event.trigger(map, "resize");
        map.setCenter(myLatlng);
      }, 1400);
    });
  }
});
