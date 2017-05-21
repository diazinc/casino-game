//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('deposit-entry-controller', function ($scope, $http, $httpParamSerializerJQLike) {

  $scope.getPaymentMethods = function() {
	  	   
    var parameters =
    {
        filterByCountry: "",
        currency: "EUR"
    };

    console.log('RPC call "/user/deposit#getCategorizedPagmentMethods".  parameters = ' + JSON.stringify(parameters, null, 4));

    SessionMgr.call("/user/deposit#getCategorizedPagmentMethods", parameters).then(
      function (result) {
        $scope.categories = result;
        
        $scope.paymentMethodsCC = result.categories[0].paymentMethods;
        $scope.paymentMethodsDC = result.categories[1].paymentMethods;
        $scope.paymentMethodsEW = result.categories[2].paymentMethods;
        $scope.paymentMethodsPC = result.categories[3].paymentMethods;
        $scope.paymentMethodsIB = result.categories[4].paymentMethods;
        $scope.paymentMethodsBT = result.categories[5].paymentMethods;
        
        console.log('RPC call "Credit Cards -------' + JSON.stringify($scope.paymentMethodsCC, null, 4));
        
        console.log('RPC call "Debit Cards -------' + JSON.stringify($scope.paymentMethodsDC, null, 4));
        
        console.log('RPC call "E-wallets -------' + JSON.stringify($scope.paymentMethodsEW, null, 4));
        
        console.log('RPC call "Prepaid Cards -------' + JSON.stringify($scope.paymentMethodsPC, null, 4));
        
        console.log('RPC call "Instant Banking -------' + JSON.stringify($scope.paymentMethodsIB, null, 4));
        
        console.log('RPC call "Bank Transfer -------' + JSON.stringify($scope.paymentMethodsBT, null, 4));
        
        $scope.$apply(); 
      }
      , function (err) {
        console.log('RPC call "/user/deposit#getCategorizedPagmentMethods" failed, error = ' + err.desc);
      }
    );
    
    
    // Get RECENT PAYMENTS RPC
    var parameters =
    {
        filterByCountry: "",
        currency: "EUR"
    };


    SessionMgr.call("/user/deposit#getRecentUsedPaymentMethods", parameters).then(
      function (result) {
        $scope.recentMethods=result;
        console.log('RPC call "/user/deposit#getRecentUsedPaymentMethods" succeed, response = ' + JSON.stringify(result, null, 4));
        $scope.$apply();
      }
      , function (err) {
        console.log('RPC call "/user/deposit#getCategorizedPagmentMethods" failed, error = ' + err.desc);
      }
    );

  };

  $scope.selectDepositMethod = function(code) {
    console.log('the code is: ' + code);
    //
    CookieHelper.set('paymentcode', code);

    switch(code) {
      case "MoneyMatrix_CreditCard": 
        window.location = "moneymatrix_deposit_selectcards.php";
        break;
      case "Skrill":
        window.location = "wallet_deposit_selectcards.php";
        break;
      case "Neteller":
          window.location = "wallet_deposit_selectcards.php";
          break;
      case "Envoy_QIWI":
          window.location = "wallet_deposit_selectcards.php";
          break;
      case "Envoy_WebMoney":
          window.location = "wallet_deposit_selectcards.php";
          break;
      default:
      	window.location = "moneymatrix_deposit_selectcards.php";
      	break;
    }

  };

  $scope.initPaymentMethods = function() { 
	  
    console.log('initialize payment methods reached');

    setTimeout(function() { //wait for session to be established before calls made
      $scope.getPaymentMethods();
    }, 5000);

  };


  

});