$(document).ready(function() {
	$('.form-wrapper').hide()
	$('.form-wrapper:eq(0)').show()
	$('.form-wrapper').on('submit',function(e){
		if ($(this).find('input').val() != '') {
			if ($(this).find('input[name="mobile_no"]').is(":visible")) {
				var phone = $(this).find('input[name="mobile_no"]').val()
				$('.final-form input[name="mobile"]').val(phone)
			}
			if($(this).find('input[name="email_address"]').is(":visible")) {
				const email = $(this).find('input[name="email_address"]').val()
				$('.final-form input[name="email"]').val(email)
			}
			if ($(this).find('input[name="pass"]').is(":visible")) {
				const pass = $(this).find('input[name="pass"]').val()
				$('.final-form input[name="password"]').val(pass)
			}

			$(this).hide();
			$(this).next().show()
			$('#login-block .hiden').hide()
		}
		else {
			$('#login-block .hiden').show()
		}
	})
})