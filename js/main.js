var states = {};

var content = [
  { 
  	title: 'MySQL',
  	color: 1,
  	seats: '5',
  	id: 'mysql',
  },
  { 
  	title: 'Scala',
  	color: 1,
  	seats: '5',
  	id: 'scala',
  },
  { 
  	title: 'Erlang',
  	color: 1,
  	seats: '4',
  	id: 'erlang',
  },
  { 
  	title: 'Node.JS',
  	color: 1,
  	seats: '5',
  	id: 'nodejs',
  },
  { 
  	title: 'Python',
  	color: 1,
  	seats: '5',
  	id: 'winterfell',
  },
  { 
  	title: 'Java',
  	color: 1,
  	seats: '5',
  	id: 'hardhome',
  },
  { 
  	title: 'Ruby',
  	color: 1,
  	seats: '22',
  	id: 'pandora',
  },

  { 
  	title: 'Yin',
  	color: 2,
  	seats: '3',
  	id: 'yin',
  },
  { 
  	title: 'Yang',
  	color: 2,
  	seats: '3',
  	id: 'yang',
  },

  { 
  	title: 'Verdana',
  	color: 3,
  	seats: '4',
  	id: 'verdana',
  },
  { 
  	title: 'Comic Sans',
  	color: 3,
  	seats: '5',
  	id: 'comicsans',
  },
  { 
  	title: 'Calibri',
  	color: 3,
  	seats: '3',
  	id: 'calibri',
  },
  { 
  	title: 'Helvetica',
  	color: 3,
  	seats: '4',
  	id: 'helvetica',
  },

  { 
  	title: 'Rock',
  	color: 4,
  	seats: '4',
  	id: 'rock',
  },
  { 
  	title: 'Pop',
  	color: 4,
  	seats: '4',
  	id: 'pop',
  },
  { 
  	title: 'Jazz',
  	color: 4,
  	seats: '5',
  	id: 'jazz',
  },

  { 
  	title: 'Matrix',
  	color: 5,
  	seats: '5',
  	id: 'hogwarts',
  },
  { 
  	title: 'Harry Potter',
  	color: 5,
  	seats: '4',
  	id: 'harrypotter',
  },
  { 
  	title: 'Lord of the Rings',
  	color: 5,
  	seats: '4',
  	id: 'lordoftherings',
  },
  { 
  	title: 'The Dark Knight',
  	color: 5,
  	seats: '5',
  	id: 'thedarkknight',
  },

  { 
  	title: 'Alan Turing',
  	color: 6,
  	seats: '5',
  	id: 'alanturing',
  },
  { 
  	title: 'Larry Page',
  	color: 6,
  	seats: '5',
  	id: 'larrypage',
  },
  { 
  	title: 'Charles Babbage',
  	color: 6,
  	seats: '6',
  	id: 'charlesbabbage',
  },
  { 
  	title: 'Steve Jobs',
  	color: 6,
  	seats: '5',
  	id: 'stevejobs',
  },
  { 
  	title: 'Bill Gates',
  	color: 6,
  	seats: '5',
  	id: 'billgates',
  },
  { 
  	title: 'CV Raman',
  	color: 6,
  	seats: '4',
  	id: 'cvraman',
  },
  { 
  	title: 'Ramanujam',
  	color: 6,
  	seats: '4',
  	id: 'ramanujam',
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
  	title: 'Rippon Building',
  	color: 7,
  	seats: '4',
  	id: 'ripponbuilding',
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
  	id: 'kapaleeshwartemple',
  },
  { 
  	title: 'Elliot\'s Beach',
  	color: 7,
  	seats: '5',
  	id: 'elliotsbeach',
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
  	title: 'Marina Beach',
  	color: 7,
  	seats: '3',
  	id: 'marinabeach',
  },
  { 
  	title: 'Spencer Plaza',
  	color: 7,
  	seats: '6',
  	id: 'spencerplaza',
  },

  { 
  	title: 'Keezhkattalai',
  	color: 8,
  	seats: '3',
  	id: 'keezhkattalai',
  },
  { 
  	title: 'Big Bang Theory',
  	color: 8,
  	seats: '3',
  	id: 'bigbangtheory',
  },
  { 
  	title: 'Game of Thrones',
  	color: 8,
  	seats: '16',
  	id: 'gameofthrones',
  },
  { 
  	title: 'House of Cards',
  	color: 8,
  	seats: '16',
  	id: 'houseofcards',
  },
  { 
  	title: 'South Park',
  	color: 8,
  	seats: '4',
  	id: 'southpark',
  },
  { 
  	title: 'Breaking Bad',
  	color: 8,
  	seats: '3',
  	id: 'breakingbad',
  },
];

$(document).ready(function(){

	$('#selected-room').hide();
	
	$('.ui.dropdown').dropdown();

	var showRoom = function(id){
		var result = $.grep(content, function(e){ return e.id == id; })[0];

		$('.room-name').text(result['title']);
		$('.room-seats').text(" - seats "+result['seats']);

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
		if( targetRoom.offset().left < minX+100) {
	        moveLeft  = targetRoom.offset().left - 100;
		}
		var maxX = $("body").scrollLeft() + $(window).width();
		if( targetRoom.offset().left > maxX-150) {
	        moveLeft = targetRoom.offset().left - $(window).width() + 150;
		}
		var minY = $("body").scrollTop();
		if( targetRoom.offset().top < minY+100) {
	        moveTop = targetRoom.offset().top - 100;
		}
		var maxY = $("body").scrollTop() + $(window).height();
		if( targetRoom.offset().top > maxY-150) {
		    moveTop = targetRoom.offset().top - $(window).height() + 150;
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

	$(window).scroll(function() {
		console.log(
			"Bodyleft: " + $("body").scrollLeft() +
			", Roomleft: " + $("#harrypotter").offset().left
			);
	});	

	$('.room, .big-room').click(function(){
		var id = $(this).attr('id');
		showRoom(id);
	});

	$('.meeting-room').click(function(){
		var id = $(this).attr('name');
		showRoom(id);
	});

	$('.ui.search').search({
		source: content,
		onSelect: function(result, response) {
			showRoom(result['id']);
		}
	});

	$('#close-room').click(function(){
		$('.room, .big-room').removeClass('faded');
		$('#selected-room')
			.removeClass()
			.hide();
		$('.ui.search').search('set value', '');
		$('#searchbox').show();
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