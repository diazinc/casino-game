//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('casinobonus-controller', function ($scope, $http, $httpParamSerializerJQLike) {
	
  $scope.queryBonuses = function() {

    // get the bonuses for this user
    SessionMgr.call("/user/bonus#getGrantedBonuses").then(
      function (result) {
          $scope.bonuses=result.bonuses;   
          $scope.$apply();   
      }

      , function (err) {
          window.alert(err.desc);
          window.reload();
      }
   
   );
    
  }
 
   $scope.getFrequentPlay = function() {

	    // get the FPP bonuses for this user
	    SessionMgr.call("/casino#getFrequentPlayerPoints").then(
	      function (result) {
	          $scope.frequentPP=result;  
	          $scope.$apply();
		      }

	      , function (err) {
	          window.alert(err.desc);
	      }
	    
	   );
	    
	  } 
   
   // claim FPP for this user
   $scope.claimFPP = function(points) {
		    // User Claim Bonus
		    SessionMgr.call("/casino#claimFrequentPlayerPoints").then(
		      function (result) {
	
		          $scope.$apply();
		          window.location.reload();
		      }

		      , function (err) {
		          window.alert(err.desc);
		          window.location.reload();
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
	          $scope.$apply();
	          window.reload();
	      }


	      , function (err) {
	          window.alert(err.desc);
	          window.reload();
	      }
	   );
	  }
  
  $scope.forfeitBonus = function(id) {

	  var parameters =
	    {
	        bonusID: id  
	    }

	    // get the bonuses for this user
	    SessionMgr.call("/user/bonus#forfeit", parameters).then(
	      function (result) {
	          $scope.$apply();
	          window.location.reload();
	      }


	      , function (err) {
	          window.alert(err.desc);
	          window.reload();
	      }

	    
	   );
	    
	  };
    

      $scope.init = function() {

    	    setTimeout(function() { //wait for session to be established before calls made
    	      $scope.getFrequentPlay();
    	      $scope.queryBonuses();
    	    }, 5000);
    	    
      };

});