//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.
//NOT SURE ABOUT THIS. DONT SEE ANY SPECIFIC CALLS FOR SPORTS BONUSES - 
//MUST INCORPORATE THIS WITH CASINO BONUS CONTROLLER
app.controller('sports-bonus-controller', function ($scope, $http, $httpParamSerializerJQLike) {
	
  $scope.queryBonuses = function() {

    // get the bonuses for this user
    SessionMgr.call("/user/bonus#getGrantedBonuses").then(
      function (result) {
          console.log('RPC call "/user/bonus#getGrantedBonuses" succeed, response = ' + JSON.stringify(result, null, 4));         
          console.log(result);
          $scope.bonuses=result;          
          $scope.$apply();   
      }
      , function (err) {
          console.log('RPC call "/user/bonus#getGrantedBonuses" failed, error = ' + err.desc);
          window.alert(err.desc);
          window.reload();
      }  
   );
    
  }   
  
  $scope.submitBonusCode = function(bonusCode) {

	  var parameters =
	    {
	        bonusCode: $scope.bonusCode,
	        iovationBlackBox: CookieHelper.get('iovationKey')
	    }

	    // User Claim Bonus
	    SessionMgr.call("/user/bonus#apply", parameters).then(
	      function (result) {
	          console.log('RPC call "/user/bonus#apply" succeed, response = ' + JSON.stringify(result, null, 4));
	          console.log(result);
	          $scope.$apply();
	          window.alert('Bonus Applied');
	          window.reload();
	      }


	      , function (err) {
	          console.log('RPC call "/user/bonus#apply" failed, error = ' + err.desc);
	          window.alert(err.desc);
	          window.reload();
	      }

	    
	   );
	    
	  }
 
  
  
  $scope.forfeitBonus = function(bonusID) {

	  var parameters =
	    {
	        bonusID: $scope.bonusID
	    }

	    // get the bonuses for this user
	    SessionMgr.call("/user/bonus#forfeit", parameters).then(
	      function (result) {
	          console.log('RPC call "/user/bonus#getGrantedBonuses" succeed, response = ' + JSON.stringify(result, null, 4));
	          console.log(result);
	          window.alert('Bonus forfeited')
	          $scope.$apply();
	          window.reload();
	      }


	      , function (err) {
	          console.log('RPC call "/user/bonus#forfeit" failed, error = ' + err.desc);
	          window.alert(err.desc);
	          window.reload();
	      }

	    
	   );
	    
	  };
    

      $scope.init = function() {

    	    setTimeout(function() { //wait for session to be established before calls made
    	      $scope.queryBonuses();
    	      
    	    }, 5000);
    	    
      };

});