//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('livecasino-controller', function ($scope, $http, $httpParamSerializerJQLike) {
  $scope.username = "USERNAME";
  $scope.password = "PASSWORD";

  $scope.testPlatform = function() {
    var isPC = true;
    if( /Android/i.test(navigator.userAgent) ) {
      isPC = false;
      $scope.platform = "Android";
    };
    if( /iPhone/i.test(navigator.userAgent) ) {
      isPC = false;
      $scope.platform = "iPhone";
    };
    if( /iPad/i.test(navigator.userAgent) ) {
      isPC = false;
      $scope.platform = "iPad";
    };
    if( /Windows Phone 7.0|Windows Phone OS 7.5/i.test(navigator.userAgent) ) {
      isPC = false;
      $scope.platform = "WM7";
    };
    if( /Windows Phone 8.0/i.test(navigator.userAgent) ) {
      isPC = false; 
      $scope.platform = "WP8";
    };
    if(isPC) {
      $scope.platform = "PC";
    };

  };


  $scope.featured = true;
  $scope.notFeatured = !$scope.featured;

  
  $scope.displayGame = function(gameUrl, backImage) {
    var wrapper = document.getElementById('game_wrapper');
    var win = window.open();
    var openURL = "<IFRAME src=\"" + gameUrl +"\" frameborder=\"no\" style=\"width:100%;height:90%;background-image:url(" +  backImage + ")\"> </IFRAME>";
    win.document.write(openURL);

  };

  $scope.gameClicked = function(game) {
    $scope.getLaunchURL(game.tableID);
  };


  function directBasedOnStatus(data) {
    switch(data.status) {
      case 0: 
        window.location.href=data.url;
        break;
      case 1: 
        window.alert("User is only allowed to withdraw money");
        break;
      case 2: 
        window.alert("User profile is incomplete, please update on the profile page");
        break;
      case 3: 
        window.alert("The country (either IP or profile country) is blocked for this game");
        break;
      case 4: 
        window.alert("The game is not available for the current user");
        break;
      case 5: 
        window.alert("The email address is not verified");
        break;
      default: 
        break;
    };  
  };

  $scope.getLaunchURL = function(tableID) {    

    var params = {};

    if(tableID) {
       params["tableID"] = parseInt(tableID);
    };

    params["realMoney"] = true; //is RealMoney always supposed to be true on these games?
    
    var JSONParams = JSON.stringify(params);

    if (!SessionMgr.isLoggedIn()) {
      alert('Please login to play Live Casino games');
      return;
    }

    SessionMgr.call("/casino#getLaunchUrl", params).then(
      function (result) {
          directBasedOnStatus(result);
      }
      , function (err) {
      }
    );

  };


  $scope.init = function() { 

    setTimeout(function() { //wait for session to be established before calls made
     $scope.testPlatform();
    }, 3000);

  };

});