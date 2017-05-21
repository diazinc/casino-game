//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('change-email-controller', function ($scope, $http, $httpParamSerializerJQLike) {
	
  $scope.quietlyFetchOriginalEmail = function() {
  SessionMgr.call("/user/account#getProfile").then(
      function (result) {
        $scope.originalEmail = result.fields.email;
      }
      , function (err) {
      }
    );
  };

  $scope.changeEmail = function() {

    var params = {};
    //uPasswordConfirm

    params["email"] = $scope.nEmail;
    params["password"] = $scope.nPassword;
    var encodedURL = "http://82.221.98.14/activateNewEmail.php?email=" + $scope.originalEmail + "&key=";
    params["emailVerificationURL"] = encodedURL;
    SessionMgr.call("/user/email#sendVerificationEmailToNewMailbox", params).then(
      function (result) {
          window.alert('A verification email has been sent to your new mailbox, please click the link within the email to verify your new mailbox.');
          window.location.reload();
          
      }
      , function (err) {
          window.alert(err.desc);
              grecaptcha.reset();
        }
    );

  };

    setTimeout(function() { //wait for session to be established before calls made
    $scope.quietlyFetchOriginalEmail();
  }, 5000);

});