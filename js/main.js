var states = {};

var content = [
  { 
  	title: 'Mercury',
  	color: 1,
  	seats: '5',
  	id: 'mercury',
  },
  { 
  	title: 'Venus',
  	color: 1,
  	seats: '5',
  	id: 'venus',
  },
  { 
  	title: 'Earth',
  	color: 1,
  	seats: '5',
  	id: 'earth',
  },
  { 
  	title: 'Mars',
  	color: 1,
  	seats: '5',
  	id: 'mars',
  },
  { 
  	title: 'Jupiter',
  	color: 1,
  	seats: '12',
    tv: 1,
  	id: 'winterfell',
  },
  { 
  	title: 'Saturn',
  	color: 1,
  	seats: '12',
    tv: 1,
  	id: 'hardhome',
  },
  { 
  	title: 'Sun',
  	color: 1,
  	seats: '22',
    tv: 1,
  	id: 'sun',
  },




  { 
  	title: 'Krypton',
  	color: 2,
  	seats: '4',
  	id: 'krypton',
  },
  { 
  	title: 'Asgard',
  	color: 2,
  	seats: '4',
  	id: 'asgard',
  },
  { 
  	title: 'Vulcan',
  	color: 2,
  	seats: '3',
  	id: 'vulcan',
  },
  { 
  	title: 'Cybertron',
  	color: 2,
  	seats: '4',
  	id: 'cybertron',
  },

  { 
  	title: 'Neptune',
  	color: 1,
  	seats: '4',
  	id: 'neptune',
  },
  { 
  	title: 'Uranus',
  	color: 1,
  	seats: '4',
  	id: 'uranus',
  },
  { 
  	title: 'Pluto',
  	color: 1,
  	seats: '4',
  	id: 'pluto',
  },

  { 
    title: 'Planet X',
    color: 2,
    seats: '4',
    id: 'planetx',
  },
  { 
    title: 'Miller\'s Planet',
    color: 2,
    seats: '4',
    id: 'millers',
  },
  
  { 
  	title: 'Andromeda',
  	color: 2,
  	seats: '25',
    tv: 1,
  	id: 'matrix',
  },

  { 
    title: 'Tatooine',
    color: 2,
    seats: '5',
    id: 'tatooine',
  },
  { 
    title: 'Naboo',
    color: 2,
    seats: '5',
    id: 'naboo',
  },
  { 
  	title: 'Jakku',
  	color: 2,
  	seats: '5',
  	id: 'jakku',
  },

  { 
  	title: 'GST Road',
  	color: 6,
  	seats: '5',
  	id: 'gstroad',
  },
  { 
  	title: 'OMR',
  	color: 6,
  	seats: '5',
  	id: 'omr',
  },
  { 
  	title: 'ECR',
  	color: 6,
  	seats: '5',
  	id: 'ecr',
  },
  { 
  	title: 'Mount Road',
  	color: 6,
  	seats: '4',
  	id: 'mountroad',
  },
  { 
  	title: 'Greame\'s Road',
  	color: 6,
  	seats: '4',
  	id: 'greamesroad',
  },
  { 
  	title: 'TTK Road',
  	color: 6,
  	seats: '4',
  	id: 'ttkroad',
  },
  { 
    title: 'Cathedral Road',
    color: 6,
    seats: '4',
    id: 'cathedralroad',
  },

  { 
  	title: 'Light House',
  	color: 7,
  	seats: '4',
  	id: 'lighthouse',
  },
  { 
  	title: 'Napier Bridge',
  	color: 7,
  	seats: '4',
  	id: 'napierbridge',
  },
  { 
  	title: 'Valluvar Kottam',
  	color: 7,
  	seats: '5',
  	id: 'valluvarkottam',
  },
  { 
  	title: 'Theosophical Society',
  	color: 7,
  	seats: '6',
  	id: 'theosophicalsociety',
  },
  { 
  	title: 'Kapaleeshwar Temple',
  	color: 7,
  	seats: '10',
    tv: 1,
  	id: 'kapaleeshwartemple',
  },
  { 
    title: 'Rippon Building',
    color: 7,
    seats: '4',
    id: 'ripponbuilding',
  },
  { 
  	title: 'Fort St. George',
  	color: 7,
  	seats: '4',
  	id: 'fortstgeorge',
  },
  { 
  	title: 'Chennai Central',
  	color: 7,
  	seats: '5',
  	id: 'chennaicentral',
  },
  { 
  	title: 'Boat Club',
  	color: 7,
  	seats: '3',
  	id: 'boatclub',
  },
  { 
  	title: 'Spencer Plaza',
  	color: 7,
  	seats: '6',
  	id: 'spencerplaza',
  },

  { 
  	title: 'Foreshore Estate',
  	color: 7,
  	seats: '3',
  	id: 'foreshore',
  },
  { 
  	title: 'Broken Bridge',
  	color: 7,
  	seats: '3',
  	id: 'brokenbridge',
  },
  { 
  	title: 'Marina Beach',
  	color: 7,
  	seats: '16',
    tv: 1,
  	id: 'gameofthrones',
  },
  { 
  	title: 'Elliot\'s Beach',
  	color: 7,
  	seats: '16',
    tv: 1,
  	id: 'houseofcards',
  },
  { 
  	title: 'Kovalam Beach',
  	color: 7,
  	seats: '4',
  	id: 'kovalam',
  },
  { 
  	title: 'Mahabalipuram',
  	color: 7,
  	seats: '3',
  	id: 'mahabalipuram',
  },
  { 
    title: 'Amphitheater',
    color: 6,
    seats: '40',
    id: 'amphitheater',
  },
];

$(document).ready(function(){

	$('#selected-room').hide();
	
	$('.ui.dropdown').dropdown();

	var showRoom = function(id){
		var result = $.grep(content, function(e){ return e.id == id; })[0];

		$('.room-name').text(result['title']);

    var amenities = " - seats "+result['seats'];
    if(result['tv'] == 1)
      amenities += " - has TV";

		$('.room-seats').text(amenities);

		$('#selected-room')
			.removeClass()
			.addClass('color'+result['color'])
			.show();

		$('.room, .big-room').addClass('faded');
		$("#"+result['id']).removeClass('faded');

		// console.log($("body").scrollLeft());
		// console.log($("#"+result['id']).offset().left);

		// Scrolling logic
		var targetRoom = $("#"+result['id']);
		var moveLeft = $("body").scrollLeft(), moveTop = $("body").scrollTop();

		var minX = $("body").scrollLeft();
    var halfWidth = $(window).width() / 2;
    var halfHeight = $(window).height() / 2;

		if( targetRoom.offset().left < minX+halfWidth) {
	        moveLeft  = targetRoom.offset().left - halfWidth;
		}
		var maxX = $("body").scrollLeft() + $(window).width();
		if( targetRoom.offset().left > maxX-halfWidth) {
	        moveLeft = targetRoom.offset().left - $(window).width() + halfWidth;
		}
		var minY = $("body").scrollTop();
		if( targetRoom.offset().top < minY+halfHeight) {
	        moveTop = targetRoom.offset().top - halfHeight;
		}
		var maxY = $("body").scrollTop() + $(window).height();
		if( targetRoom.offset().top > maxY-halfHeight) {
		    moveTop = targetRoom.offset().top - $(window).height() + halfHeight;
		}

	    $('html, body').animate({
	        scrollTop: moveTop,
	        scrollLeft: moveLeft
	    }, 300);
	};

	$(function(){
		var curDown = false,
			curYPos = 0,
			curXPos = 0;
			$(window).mousemove(function(m){
				if(curDown === true){
					$(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY)); 
					$(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
          $('#mapcontainer').addClass('noclick');
				}
			});

		$(window).mousedown(function(m){
			curDown = true;
			curYPos = m.pageY;
			curXPos = m.pageX;
		});

		$(window).mouseup(function(){
			curDown = false;
		});
	});

	// $(window).scroll(function() {
	// 	console.log(
	// 		"Bodyleft: " + $("body").scrollLeft() +
	// 		", Roomleft: " + $("#harrypotter").offset().left
	// 		);
	// });	

	$('.room, .big-room').click(function(){
		var id = $(this).attr('id');
		showRoom(id);
    return false;
	});

	$('.meeting-room').click(function(){
		var id = $(this).attr('name');
		showRoom(id);
    return false;
	});

	$('.ui.search').search({
		source: content,
    selectFirstResult: true,
		onSelect: function(result, response) {
			showRoom(result['id']);
		}
	});

	$('#close-room, #mapcontainer').click(function(){
    if ($('#mapcontainer').hasClass('noclick')) {
      $('#mapcontainer').removeClass('noclick');
    }
    else {
      $('.room, .big-room').removeClass('faded');
      $('#selected-room')
        .removeClass()
        .hide();
      $('.ui.search').search('set value', '');
      $('#searchbox').show();
    }
	});

  var scale = 0.8;
  $('#mapcontainer').css('transform', 'scale('+scale+')');

  $('#zoom-in').click(function(){
      scale = scale + 0.04  ;
    $('#mapcontainer').css('transform', 'scale('+scale+')');
  });
  $('#zoom-out').click(function(){
      scale = scale - 0.04  ;
    $('#mapcontainer').css('transform', 'scale('+scale+')');
  });
});

$(document).keydown(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
		$('.room, .big-room').removeClass('faded');
		$('#selected-room')
			.removeClass()
			.hide();
		$('.ui.search').search('set value', '');
		$('#searchbox').show();
    }
});