//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('change-password-controller', function ($scope, $http, $httpParamSerializerJQLike) {
	
  $scope.changePassword = function() {

    var parameters = {
      oldPassword: $scope.oPassword,
      newPassword: $scope.nPassword1
    };
    SessionMgr.call("/user/pwd#change", parameters).then(
      function (result) {
          window.alert('Your password has been changed successfully.');    
          window.location.reload();                              
      }
      , function (err) {
          window.alert(err.desc);
      }
    );
  };

});