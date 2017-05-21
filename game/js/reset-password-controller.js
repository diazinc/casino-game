//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('reset-password-controller', function ($scope, $http, $httpParamSerializerJQLike) {
	
  $scope.hashcode = location.search.split('key=')[1];

  $('#account_content_06_2').hide();

  $scope.checkIfPasswordResetAvailable = function() {

    var parameters =
    {
      key: $scope.hashcode
    };

    console.log('RPC call "/user/pwd#isResetPwdKeyAvailable".  parameters = ' + JSON.stringify(parameters, null, 4));

    SessionMgr.call("/user/pwd#isResetPwdKeyAvailable", parameters).then(
        function (result) {
          if(result.isAvailable) { 
            $('#account_content_06_2').show();
          } else {
            window.alert('The password reset link has expired.');
            window.location.href="umbrella.php";
          }
        }
        , function (err) {
            window.alert(err.desc);
        }
      );
  };

  $scope.resetPassword = function() {

    var parameters =
    {
      key: $scope.hashcode,
      password: $scope.nPassword
    };

    SessionMgr.call("/user/pwd#reset", parameters).then(
        function (result) {
            window.alert("Successfully changed password.");
            window.location.href="umbrella.php";
        }
        , function (err) {
             window.location.reload();
        }
      );
  };

  setTimeout(function() { //wait for session to be established before calls made
    $scope.checkIfPasswordResetAvailable();
  }, 3000);

});