//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('playlive-controller', function ($scope, $http, $httpParamSerializerJQLike) {
  

  $scope.init = function() {

  setTimeout(function() { //wait for session to be established before calls made
    $scope.gameURL = CookieHelper.get('livecasinogameurl');
    $scope.$apply(); //bind the livecasinogameurl to the scope.
  }, 5000);

  }

});