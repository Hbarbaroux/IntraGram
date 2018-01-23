$(function() {

	$(document).on('click', 'span', function() {
		$("#log-in").css({"display" : "none"});
		$("p").css({"display" : "none"});
		$("#sign-up").css({"display" : "block"});
		$("#back").css({"display" : "block"});
	});

	$("#back").click(function() {
		location.reload();
	});

	var email = document.getElementById("email") ,confirm_email = document.getElementById("email2");

	function validateEmail() {
		if(email.value != confirm_email.value) {
			confirm_email.setCustomValidity("Emails Don't Match");
		} else {
			confirm_email.setCustomValidity('');
		}
	}

	email.onchange = validateEmail;
	confirm_email.onkeyup = validateEmail;

	var password = document.getElementById("signPassword") ,confirm_password = document.getElementById("signPassword2");

	function validatePassword() {
		if(password.value != confirm_password.value) {
			confirm_password.setCustomValidity("Passwords Don't Match");
		} else {
			confirm_password.setCustomValidity('');
		}
	}

	password.onchange = validatePassword;
	confirm_password.onkeyup = validatePassword;
});