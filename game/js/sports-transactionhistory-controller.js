//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('sports-transactionhistory-controller', function ($scope, $http, $httpParamSerializerJQLike) {


 $scope.fromDate = "2016-06-30T16:00:00.000Z";
 $scope.toDate = "2020-12-31T15:59:00.000Z";

 $scope.queryTransactionHistory = function() {
	 var parameters = {};
	 parameters["betIds"] = [];
	 parameters["betStatus"] = $scope.type;
	 parameters["startDate"] = '2016-10-01';
	 parameters["endDate"] = '2016-12-01';
	 parameters["offset"] = 0;
	 parameters["nrOfRecords"] = 10;
	 parameters["transactionType"] = "BET";
    
    console.log('RPC call "/sports#betHistory".  parameters = ' + JSON.stringify(parameters, null, 4));
    
    SessionMgr.call("/sports#betHistory", parameters).then(
        function (result) {

            $scope.transactionhistory = result.results.bet;
        	console.log($scope.transactionhistory);
            $scope.$apply();
        },
        function (err) {
            console.log('RPC call "/sports#betHistory" failed, error = ' + err.desc);
            window.alert(err.desc);
        }
    );
  };

$scope.init = function() {
	  
	  //Set Initial trans search vars
	  $scope.showTH = 0;
	  var today = new Date();
	  $scope.fromDate = new Date(today.getTime() - (168*60*60*1000));
	  
	  $scope.toDate = new Date();
	  $scope.type = "WIN";

    setTimeout(function() { //wait for session to be established before calls made
      $scope.queryTransactionHistory();
    }, 5000);

  };
  

});