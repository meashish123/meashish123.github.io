$(function() {

	
/* ----- Main Menu ----- */
	
	if($().mobileMenu) {
		$('#header nav').mobileMenu();
	}



/* ----- Carousels & Sliders ----- */
	
	// default flex parameters
	if($().flexslider) {
		$('.flexslider').flexslider({
			controlNav: true,
			directionalNav: true,
			slideshow: false
		});
	}



/* ----- Twitter Feed ----- */
	
	if($().tweet) {
		$(".widget-twitter .widget-content > div").tweet({
			username: "envato",
			join_text: "auto",
			avatar_size: 0,
			count: 2,
			auto_join_text_default: "",
			auto_join_text_ed: "",
			auto_join_text_ing: "",
			auto_join_text_reply: "",
			auto_join_text_url: "",
			loading_text: "loading tweets..."
	    });
	}



/* ----- Navigation Scroll ----- */

	$('#header nav, .page-title, #copyright').localScroll({
		offset: {left: 0, top: -99}
	});
	
	//Detecting user's scroll
	$(window).scroll(function() {

		offsetTolerance = 50;
		
		headerWrapper = parseInt($('#header').outerHeight());
	
		//Check scroll position
		scrollPosition	= parseInt($(this).scrollTop());
		
		//Move trough each menu and check its position with scroll position then add current class
		$('#header nav a').each(function() {

			thisHref = $(this).attr('href');
			thisTruePosition = parseInt($(thisHref).offset().top);
			thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
			
			if(scrollPosition >= thisPosition) {

				$('.current-menu-item').removeClass('current-menu-item');
				$('#header nav a[href='+ thisHref +']').parent('li').addClass('current-menu-item');

			}
		});
		
		//If we're at the bottom of the page, move pointer to the last section
		bottomPage	= parseInt($(document).height()) - parseInt($(window).height());
		
		if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
		
			$('.current-menu-item').removeClass('current-menu-item');
			$('#header nav a:last').parent('li').addClass('current-menu-item');
		}
	});



/* ----- Forms ----- */	

	if (!Modernizr.input.placeholder){
		$("input, textarea").each(function(){
			if($(this).val()=="" && $(this).attr("placeholder")!=""){
				$(this).val($(this).attr("placeholder"));
				$(this).focus(function(){
					if($(this).val()==$(this).attr("placeholder")) $(this).val("");
				});
				$(this).blur(function(){
					if($(this).val()=="") $(this).val($(this).attr("placeholder"));
				});
			}
		});
	}
	
	
	
/* ----- Modal Window ----- */	
	
	$("a[data-toggle=modal]").click(function(event){
		event.preventDefault();
		$(this).next().modal({
			maxWidth: 940,
			opacity: 65,
			closeClass: "close",
			overlayCss: { background: "#000" },
			autoResize: true
		});
	});




/* ----- Google Map ----- */	
	
	/* set your coordinates here */
	var myLatlng = new google.maps.LatLng(34.092809,-118.328661);
	
	var mapOptions = {
		zoom: 8,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);	
	
	var image = new google.maps.MarkerImage('img/marker.png',
		// This marker is 20 pixels wide by 32 pixels tall.
		new google.maps.Size(61,60),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at 0,32.
		new google.maps.Point(30, 30));
	
	var contentString = '<div id="map-info">'+
	    '<div id="siteNotice">'+
	    '</div>'+
	    '<h2 id="firstHeading" class="firstHeading">Hello!</h2>'+
	    '<div id="bodyContent">'+
	    '<p><b>Rythm</b> is here!'+
	    '</div>'+
	    '</div>';
	
	var infowindow = new google.maps.InfoWindow({
	    content: contentString
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		icon: image,
		title: "Hello from Rythm!"
	});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
	
	// To add the marker to the map, call setMap();
	marker.setMap(map);
	
});
