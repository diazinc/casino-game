//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('forgot-password-controller', function ($scope, $http, $httpParamSerializerJQLike) {
	
  $scope.forgotPassword = function() {	
	  
		// this is the public key of Google reCAPTCHA registered by EveryMatrix, and it does not limit client domain
		// You can register public key for your production site on https://www.google.com/recaptcha
		// and send us your public/private key pair to be configured in our production environment
		var publicKey = "6LcM7SgTAAAAAFTbRFOuEsFc1nNu-jyaJ4QQ1QxG";
		var responseFromKey = CookieHelper.get('verificationResponse');

		var parameters = {
			email: $scope.nEmail,
			changePwdURL: "http://82.221.98.14/account_6_2.php?key=",
			captchaPublicKey: publicKey,
			captchaResponse: responseFromKey
		};

		SessionMgr.call("/user/pwd#sendResetPwdEmail", parameters).then(
		  function (result) {
			  // succeed
			  window.alert('An email has been sent to your mailbox, please click the link in the email to change your password.');
			  window.location.href="umbrella.php";
		  }
		  , function (err) {
			  //err.desc contains the error message
			  alert(err.desc);
		  }
		);
		
		// call Recaptcha.reload() after you submit a reCAPTCHA, as challenges cannot be attempted multiple times.
		Recaptcha.reload();
	
  };


});
