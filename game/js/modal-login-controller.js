//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('modal-login-controller', function ($scope, $http, $httpParamSerializerJQLike, $window) {

  $scope.loginMobile = function() {

    var parameters = {
      usernameOrEmail: $scope.uEmailOrUsername,
      password: $scope.uPassword,
      iovationBlackBox: $scope.iovationKey
    };

    window.parent.jQuery.colorbox.close();

    window.parent.callbackFromModal();
     console.log('enter modal login controller 3');
  };

});