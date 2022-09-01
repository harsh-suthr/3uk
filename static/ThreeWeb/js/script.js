$(document).ready(function() {
	// $('.form-container').each(function(){
		$('.form-container').hide()
		$('.form-container:eq(0)').show()
		$('.next-button').on('click',function(e){
			e.preventDefault();
			if ($(this).parents('.form-container').find('input').val() != '') {
				$(this).parents('.form-container').hide();
				$(this).parents('.form-container').next().show()
				$('#login-block .hiden').hide()
			}
			else {
				$('#login-block .hiden').show()
			}
		})
	// })
})