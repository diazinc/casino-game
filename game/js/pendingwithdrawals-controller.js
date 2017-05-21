//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('pendingwithdrawals-controller', function ($scope, $http, $httpParamSerializerJQLike) {

  $scope.showPW = 0;
	
  $scope.getPendingWithdrawals = function() {
 
    SessionMgr.call("/user/withdraw#getPendingWithdrawals").then(
      function (result) {
          $scope.pendingwithdrawals=result;
          if ($scope.pendingwithdrawals) {
    		  $scope.showPW = 2; // result shown
    	  } else {
    		  $scope.showPW = 1; // no result shown
    	  }
          $scope.$apply();

      }
      , function (err) {
          window.alert(err.desc);
          window.reload();
      }
    );
  }
  
  
  $scope.cancelPendingWithdrawals = function(id) {

	  var parameters =
	    {
	        id: id
	    }
	  
	    SessionMgr.call("/user/withdraw#rollback", parameters).then(
	      function (result) {
	          window.alert('Pending withdrawal successfully cancelled')
	          $scope.$apply();
	          window.location.reload();

	      }
	      , function (err) {
	          window.alert(err.desc);
	          window.location.reload();
	      }
	    );

	  }
 
  $scope.initPendingWithdrawals = function() {

	    setTimeout(function() { //wait for session to be established before calls made
	      $scope.getPendingWithdrawals();
	    }, 5000);
	    
};
});