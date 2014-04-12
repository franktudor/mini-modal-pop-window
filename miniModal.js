$(document).ready(function () {

	function minMod_subscriber(){
		var minMod_subscriber = '';
		minMod_subscriber +='<div id="minMod_achi" class="minMod_newHidden">';
		minMod_subscriber +='<h2>Be notified!</h2>';
		minMod_subscriber +='<form id="" action="" name="hiddenForm" method="post">';
		minMod_subscriber +='<label>Name</label>';
		minMod_subscriber +='<br />';
		minMod_subscriber +='<input type="text" value="" name="name" data-required="true">';
		minMod_subscriber +='<br />';
		minMod_subscriber +='<label>Email Address</label>';
		minMod_subscriber +='<br>';
		minMod_subscriber +='<input type="text" value="" name="emailAddress" data-required="true">';
		minMod_subscriber +='<b class="minMod_clear">';
		minMod_subscriber +='<div style="width:485px;margin:0 auto;margin-bottom:60px;">';
		minMod_subscriber +='<button type="button" id="minMod_noThanks" name="noThanks">No Thanks</button>';
		minMod_subscriber +='<button type="submit" id="minMod_thanks" name="submit">Submit</button>';
		minMod_subscriber +='</div>';
		minMod_subscriber +='</b>';
		minMod_subscriber +='</form>';
		minMod_subscriber +='</div>';
		return minMod_subscriber;
	}

	$('body').append(minMod_subscriber());
	
	function minMod_stripper(){
		$("p a img").each(function (i) {
			var imgUrla = $(this).closest("a").attr('href');
			$("p a img").attr('data-link', imgUrla).attr('id', 'minMod_target');
			$(this).closest("a").contents().unwrap();
		});
	}
	
	minMod_stripper();
	
    function xyz() {
        var imgUrl = $(this).attr('data-link');
        window.open(imgUrl, '_blank');
        $('#minMod_achi').unwrap('<div id="minMod_lightbox">').addClass('minMod_newHidden');
        $('#minMod_overlay').remove();
        $('#minMod_lightbox_close').remove();
    }

    function abc() {
        var checkinputs = true;
        $("input").each(function () {
            var val = $(this).val();
            if ($(this).attr('data-required') && val === "") {
                $(this).css("background-color", "pink");
                event.preventDefault(); // Stop the submit here!
                checkinputs = false;
            }
        });
        return checkinputs;
    }
    
    $('#minMod_noThanks').on('click', function () {
        xyz();
    });
    
    $('#minMod_thanks').on('click', function () {
        if (abc()) {
            xyz();
        }
    });

    $('img#minMod_target').click(function (e) {
        var posTop = 200;
        $('body').append('<div id="minMod_overlay"></div>');
        $('#minMod_achi').wrap('<div id="minMod_lightbox">').removeClass('minMod_newHidden');
        $('#minMod_lightbox').css('top', posTop + 'px');
        $('#minMod_overlay').fadeTo(500, 0.75, function () {
            $('#minMod_lightbox').fadeTo(250, 1);
        });
    });
});