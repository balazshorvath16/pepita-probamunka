jQuery(function($){
	
	$(document).ready(function(){

    //tickets toggle bar 

		$('.menu_left').click(function() {
		
			var menuid = $(this).data("menuid");
			
			$('.menu_date').each(function() {
				if(menuid != $(this).attr('id')){
				$(this).removeClass('show');}
			});
			
			var mymenu = document.getElementById(menuid);
			mymenu.classList.add("show");
			
			$('.menu_left').each(function() {
				$(this).removeClass('active');
				$(this).children('div').removeClass('active');
			});
		
			$(this).toggleClass('active');
			$(this).children('div').toggleClass('active');
			
		});

    // Sidebar
    (function() {
      var $body = document.body
      , $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];
    
      if ( typeof $menu_trigger !== 'undefined' ) {
        $menu_trigger.addEventListener('click', function() {
          $body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';

        });
      } 
    
    }).call(this);

	});		
});

// tickets price calculating
var totalAmount = document.getElementById("total_amount");
var adultPrice = 8;
var seniorPrice = 4;
var studentPrice = 6;

function increaseAdult() {
    var value = parseInt(document.getElementById('price_adult').value);
    if (isNaN(value) || value < 1) {
        value = 0;  
    }
    value++;
    document.getElementById('price_adult').value = value;
	productpagetotal()
  }
  
  function decreaseAdult() {
    var value = parseInt(document.getElementById('price_adult').value);
    if (isNaN(value) || value < 1) {
        value = 1;  
    }
    value--;
    document.getElementById('price_adult').value = value;
    productpagetotal()
  }

  function increaseSenior() {
    var value = parseInt(document.getElementById('price_senior').value);
    if (isNaN(value) || value < 1) {
        value = 0;  
    }
    value++;
    document.getElementById('price_senior').value = value;
	productpagetotal()
  }
  
  function decreaseSenior() {
    var value = parseInt(document.getElementById('price_senior').value);
    if (isNaN(value) || value < 1) {
        value = 1;  
    }
    value--;
    document.getElementById('price_senior').value = value;
    productpagetotal()
  }

  
  function increaseStudent() {
    var value = parseInt(document.getElementById('price_student').value);
    if (isNaN(value) || value < 1) {
        value = 0;  
    }
    value++;
    document.getElementById('price_student').value = value;
	productpagetotal()
  }
  
  function decreaseStudent() {
    var value = parseInt(document.getElementById('price_student').value);
    if (isNaN(value) || value < 1) {
        value = 1;  
    }
    value--;
    document.getElementById('price_student').value = value;
    productpagetotal()
  }


function productpagetotal(){
    var producttotal = document.getElementById('product-total');
    var quantityAdult = document.getElementById('price_adult').value;
    var quantitySenior = document.getElementById('price_senior').value;
    var quantityStudent = document.getElementById('price_student').value;
    var sumAdult = (adultPrice * quantityAdult);
    var sumSenior = (seniorPrice * quantitySenior);
    var sumPrice = (studentPrice * quantityStudent);
    //  sum = Math.round(sum * 100) / 100;
    producttotal.textContent = sumAdult + sumSenior + sumPrice;
}

// Collection Filter

function toggleFilter(item){
	jQuery(function($){		
		if($(item).hasClass('opened')){
			$(item).siblings('.box_content').slideUp();
			$(item).removeClass("opened");
			document.getElementById("mutass_tobbet_btn_text").innerHTML = "Advanced Search"
		}else{
			$(item).siblings('.box_content').slideDown();
			$(item).addClass("opened");
			document.getElementById("mutass_tobbet_btn_text").innerHTML = "Close"
		}		
	});
}