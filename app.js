var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};

$(document).ready(function(){
	$('.menu li').hover(function(){
		$(this).css('background-color', 'red');
	},
	 function(){
		$(this).css('background-color', 'black');
	}
);

$(document).ready(function(){
	$('.icon-close').hover(function(){
		$(this).css('background-color','red');
	},
	function(){
		$(this).css('background-color', 'black');
	});
});


$(document).ready(function(){
	$('#2').click(function(){
		
		$('.form').fadeIn(500); 
	});
});

$(document).ready(function(){
	$('#StartButton').click(function(){
	$('.Step1').removeClass("Step1");
	$('#class1').addClass("instructions");
	$('#class1').removeClass('body');
	$('#class1').removeClass('icon-menu');
});
});

$(document).ready(function(){
	$('#Step1Button').click(function(){
	$('.Step2').removeClass("Step2");
});
});

$(document).ready(function(){
	$('#Step2Button').click(function(){
	$('.Step3').removeClass("Step3");
	
});
});





$(document).ready(function(){

   
		//$("input[name='congress-type']").change(function() {
			
	if($('input[name="congress-type"]:checked','#usrform').val()== 'Scheck' ){
	
    $.ajax({
        type: "GET",
        url: "senators_cfm.xml",
        dataType: "xml",
        success: function(xml) {
			
			$('#StateSelect').change(function(){
				$('#SenatorSelect').empty();
				$('#HouseSelect').empty();
				var state = $(this).val();
				var select1 = $('#SenatorSelect');
				var SAD = $('#SenatorAddress');
				select1.append('<option value="Select a senator">Select a Senator</option>');
			$(xml).find('member').each(function(){
				if(state == $(this).find('state').text()){
				var fname = $(this).find('first_name').text();
				var lname = $(this).find('last_name').text();
				select1.append("<option>"+fname+"&nbsp"+lname+"</option>");
				var saddress = $(this).find('address').text();
				 SAD.val(saddress);
				
				
			}
			
			
			
			
					});
			
			});
        }
		
    });
	}
	
	else if($('input[name="congress-type"]:checked','#usrform').val()== 'Hcheck') {
		
	alert('ITSFINALLYWORKING?');
    $.ajax({
        type: "GET",
        url: "MemberData.xml",
        dataType: "xml",
        success: function(xml) {
			
			$('#StateSelect').change(function(){
				$('#SenatorSelect').empty();
				$('#HouseSelect').empty();
				select1.empty();
				var state = $(this).val();
				var select1 = $('#SenatorSelect');
				var HAD = $('#HouseSelect');
				
				HAD.append('<option value="Select a House Representative">Select a House Representative</option>');
			$(xml).find('member-info').each(function(){
				if(state == $(this).find('state postal-code').text()){
				var name = $(this).find('official-name').text();
				HAD.append(name);
				var saddress = $(this).find('address').text();
				HAD.val(saddress);
				 
				
			}
			
			
					
			
					});
			
			});
        }
		});
   }
}); 

$("input[name='congress-type']").change(function(e){
if($(this).val() == 'Scheck') {
   $.ajax({
        type: "GET",
        url: "senators_cfm.xml",
        dataType: "xml",
        success: function(xml) {
			
			$('#StateSelect').change(function(){
				$('#SenatorSelect').empty();
				$('#HouseSelect').empty();
				var state = $(this).val();
				var select1 = $('#SenatorSelect');
				var SAD = $('#SenatorAddress');
				select1.append('<option value="Select a senator">Select a Senator</option>');
			$(xml).find('member').each(function(){
				if(state == $(this).find('state').text()){
				var fname = $(this).find('first_name').text();
				var lname = $(this).find('last_name').text();
				select1.append("<option>"+fname+"&nbsp"+lname+"</option>");
				var saddress = $(this).find('address').text();
				 SAD.val(saddress);
				
				
			}
			
			
			
			
					});
			
			});
        }
		
    });
} else {
   
    $.ajax({
        type: "GET",
        url: "MemberData.xml",
        dataType: "xml",
        success: function(xml) {
			
			$('#StateSelect').change(function(){
				 
				$('#SenatorSelect').empty();
				$('#HouseSelect').empty();
				var select1 = $('#SenatorSelect');
				select1.empty();
				var state = $(this).val();	
			
				var HS = $('#HouseSelect');
				HS.append('<option value="Select a House Representative">Select a House Representative</option>');	
				
			$(xml).find('member').each(function(){
				
				if(state == $(this).find('state').attr('postal-code')){
					
				var officialName = $(this).find('official-name').text();
				HS.append(officialName);
				
				
			
				 
				
			}
			
			
					
			
					});
			
			});
        }
		});
   }
});



});




//});





$(document).ready(main);