
$/**Main method that holds the execution of js code until html page is loaded 
*/
$(function(){

/** locates tooltip plugins in the website and calls the funtion from the library.
**  takes options of to modify tooltip display. 
*/

    $('[data-toggle="tooltip"]').tooltip({delay: { "show": 300}}) ;

/**Method to generate hyperlink for email.
*  locates span element with email class. 
*  exceutes each() method: iterative methods that loops through object until conditions are met
*  String name: email name
*  String domain: domain of email
*  Adds a hyperlink to span element in html file.  
*/	
	
    $("span.email").each(function() {
        var name = $(this).attr('name');
        var domain = $(this).attr('domain');
        var email = name+"@"+domain;
      	$(this).html("<a href='mailto:"+email+"'>"+email+"</a>");

    });

/**
*/

    $('form#mailing-list').submit(function(e){ //select the form with id mailing list in index.html file

        var $f = $(this);	// sets variable $f that hold the form object
        var data = {};		// initialize variable for object data 
        $("input,select,textarea", $f).each(function(){	// selects input element in html
        	data[$(this).attr('name')] = $(this).val();	//sets a property of data object data[mlist]=company-news,product-news,marketing
		var $button = $(this).button('Thankyou'); // unused variable

    
        });
        console.log("data", data);   // display the object and its property
        $.ajax({		//method to send request to server to record the email

            url: $f.attr('action'),		// url of the server=action attribute of console
            data: data				// data sent to server =  data object that contains the mailing list and email entered in the form
        }).then(function(r) {			// gets the reply from server after request
            console.log(r);			// display the reply from server on console
            notify();				// calls notify function to display alert
        });       

        e.preventDefault();
    });

/**Notify method: implements the alert message after email submission.
*/
    function notify(){
        
	$("#tk").addClass("alert alert-success ").html( '<strong>Thank you!</strong> We will contact you shortly.' );        
	$('#tk').fadeOut(5000);
	    };

   });
