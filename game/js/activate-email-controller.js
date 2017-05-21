//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('activate-email-controller', function ($scope, $http, $httpParamSerializerJQLike) {

  function getQueryVariable(variable)
  {
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable){return pair[1];}
     }
     return(false);
  }

  $scope.email = getQueryVariable('email');
  $scope.key = getQueryVariable('key');

  $scope.logout = function() {

    SessionMgr.call("/user#logout").then(
      function (result) {
        CookieHelper.set('username', '');
        window.location.href="umbrella.php";
      }
      , function (err) {
      }
    );

  };

  $scope.activateEmail = function() {


    var params = {};

    params["email"] = $scope.email;
    params["key"] = $scope.key;
   
    SessionMgr.call("/user/email#verifyNewEmail", params).then(
      function (result) {
          window.alert('Email changed successfully.');
          $scope.logout();
          
      }
      , function (err) {
          window.alert(err.desc);
        }
    );
  };

  SessionMgr.init();

    setTimeout(function() { //wait for session to be established before calls made
     $scope.activateEmail();   
  }, 5000);

});