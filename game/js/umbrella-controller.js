//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('umbrella-controller', function ($scope, $http) {
  $scope.username = "USERNAME";
  $scope.password = "PASSWORD";
  
  $scope.ping = function() {
       consdole.log('<p>Calling #ping Sports WEBAPI rpc...</p>');
      SessionMgr.call("/sports#ping").then(
          function(result) {
              console.log('<p>RPC call succeed, response = ' + JSON.stringify(result, null, 4) + '</p>');
          },
          function(err) {
              console.log('<p>RPC call failed, error = ' + err.desc + '</p>');
      });
  }

});