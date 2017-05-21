//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('transactionhistory-controller', function ($scope, $http, $httpParamSerializerJQLike) {

  $scope.queryTransactionHistory = function() {

     var startDateTime = $scope.fromDate + "T00:00:00.000Z";
     var endDateTime = $scope.toDate + "T15:59:00.000Z";

    $scope.transactionhistory = '';
    var parameters =
    {
        type: $scope.type,
        startTime: $scope.fromDate,
        endTime: $scope.toDate,
        pageIndex: 1,
        pageSize: 20
    };

    // get the configuration of this payment method
    SessionMgr.call("/user#getTransactionHistory", parameters).then(
      function (result) {
          $scope.transactionhistory = result.transactions;
          if ($scope.transactionhistory.length) {
    		  $scope.showTH = 2; // result shown
    	  } else {
    		  $scope.showTH = 1; // no result shown
    	  }
          $scope.$apply();

      }
      , function (err) {
          window.alert(err.desc);
          window.reload();
      }
    );

  };

  $scope.initConfirmScreen = function() {

    $scope.pid = CookieHelper.get('pid');
      $scope.debitCurrency = CookieHelper.get('currency');
      $scope.debitAmount = CookieHelper.get('amount');
      $scope.$apply();
  };
  
$scope.init = function() {
	  
	  //Set Initial trans search vars
	  $scope.showTH = 0;
	  var today = new Date();
	  $scope.fromDate = new Date(today.getTime() - (168*60*60*1000));
	  
	  $scope.toDate = new Date();
	  $scope.type = "Deposit";
	  
    setTimeout(function() { //wait for session to be established before calls made
    }, 5000);

  };
  

});