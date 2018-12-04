//(function($){
//
//        console.log('in jquery');
////        $("#loginForm").on( 'submit', function ( e ) {
//
//        $('#loginForm').submit(function(e) {
//            e.preventDefault();
//            console.log('in form submit')
//
//            $.ajax({
//                url: '/login',
//                dataType: 'text',
//                type: 'post',
//                contentType: 'application/x-www-form-urlencoded',
//                data: $(this).serialize(),
//                success: function( data, textStatus, jQxhr ){
////                    $('#response pre').html( data );
//                    console.log('success');
//                },
//                error: function( jqXhr, textStatus, errorThrown ){
//                    console.log( errorThrown );
//                }
//            });
//        });
//
//    })(jQuery);

$(function () {

    $('#loginForm').submit(function(e) {
		e.preventDefault();
		var formData = new FormData($('#loginForm')[0]);

		$.ajax({
			type: 'POST',
			url: '/login',
			data: formData,
			contentType: false,
			processData: false
		}).done(function(data, textStatus, jqXHR) {
			var d = JSON.parse(data);
			if(d.status == 'true'){
				swal(
                    'Sucess'
                )
            }
			else{
				swal({
                    title: '<strong>Login Unsuccessful</strong>',
                    type: 'info',
                    showCloseButton: true,

                })
			}
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('fail');
		});
	});
});