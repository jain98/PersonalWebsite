var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/jain98@purdue.edu',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading" style="font-size:50px; text-align:center;">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success" id="msg_success" style="font-size:50px; text-align:center;">Message sent!</div>');

      window.setTimeout("$('#msg_success').remove(); $('#contact-form').trigger('reset'); $('#myModal').modal('hide');",4000);
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error" id="msg_error" style="font-size:50px; text-align:center;">Oops, there was an error.</div>');

      window.setTimeout("$('#msg_success').remove(); $('#contact-form').trigger('reset'); $('#myModal').modal('hide');",4000);
		}
	});
});
