//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('modal-controller', function ($scope, $http, $httpParamSerializerJQLike, $window) {

  window.alert('enter modal controller');

  $scope.modalLogin = function() {

    window.alert('entered');
  }

});