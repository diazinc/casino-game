//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('deposit-skrill-controller', function ($scope, $sce, $http, $httpParamSerializerJQLike) {


  //BONUS UI STUFF
  //I dont have a bonus button
  $scope.hideBonus = function() {
	  var iField = document.getElementById('bonusInputField');
	  iField.value="";
	  $scope.bonusSelectorField = false;
	  $scope.bonusInputField = false;
  };
 // SHOW APPLICABLE BONUS SELECTOR - CALL BELOW
  $scope.showBonus = function() {
	  var iField = document.getElementById('bonusInputField');
	  iField.value="";
	  $scope.bonusSelectorField = true;
	  $scope.bonusInputField = false;
  };
  // SHOW BONUS INPUT
  $scope.showBonusInput = function() {
	  $scope.bonusSelectorField = false;
	  $scope.bonusInputField = true;
  };
	
  $scope.paymentMethods = {};

  $scope.monthMap = {
    "Jan" : "01",
    "Feb" : "02",
    "Mar" : "03",
    "Apr" : "04",
    "May" : "05",
    "Jun" : "06",
    "Jul" : "07",
    "Aug" : "08",
    "Sep" : "09",
    "Oct" : "10",
    "Nov" : "11",
    "Dec" : "12"
  };

  $scope.uCurrency = "EUR";

  $scope.getPaymentMethods = function() {

    var parameters =
    {
        filterByCountry: "",
        currency: "EUR"
    };


    SessionMgr.call("/user/deposit#getPaymentMethods", parameters).then(
      function (result) {
        $scope.paymentMethods = result.paymentMethods;
        $scope.$apply();
      }
      , function (err) {
      }
    );

  };

  $scope.selectDepositMethod = function(code) {
    CookieHelper.set('paymentcode', code);
    window.location = "wallet_selectcards.php";
  };

  $scope.getCards = function() {
	  	  
	  // THIS IS FOR THE BONUSES THAT ARE SUPPOSED TO HAPPEN ON DEPOSIT - SO FAR ONLY CASINO RESULT ARE COMING THROUGH EM-'n-EM SHOW!
		var parameters =
		  {
		     type: "deposit",
		     gamingAccountID: CookieHelper.get('gamingAccountID')
		  }

		  // get the bonuses for this user
		  SessionMgr.call("/user#getApplicableBonuses", parameters).then(
		    function (result) {
		        $scope.bonuses=result.bonuses; 
		        $scope.enableBonusInput=result.enableBonusInput;
		        $scope.enableBonusSelector=result.enableBonusSelector;
		        $scope.$apply();  
		    }
		
		
		    , function (err) {
		        window.alert(err.desc);
		        window.location.reload();
		    }
		  );
		
    $scope.code = CookieHelper.get('paymentcode');

    var parameters =
    {
        paymentMethodCode: $scope.code
    };
   
    // get the configuration of this payment method
    SessionMgr.call("/user/deposit#getPaymentMethodCfg", parameters).then(
      function (result) {

          $scope.depositName = result.name;
          CookieHelper.set('dname', result.name);
          $scope.paymentMethodCode = result.paymentMethodCode;
          $scope.icon = result.icon;
          $scope.depositDescription = result.depositDesc;
          $scope.secureFormScriptUrl = result.secureFormScriptUrl;
          $scope.paymentOptions = result.fields.payCardID != null ? result.fields.payCardID["options"] : null; 
          $scope.gamingAccounts = result.fields.gamingAccountID["options"];
          $scope.gamingAccountID = $scope.gamingAccounts[0].id;
          
          //NETELLER SETTINGS FOR PAGE
          if ($scope.paymentMethodCode == 'Neteller') {
        	  if (result.fields.payCardID.registrationFields) {
	        	  $scope.payCardIdExp = result.fields.payCardID.registrationFields.netellerAccountID.regularExpression;
	        	  $scope.secureIdExp = result.fields.netellerSecureID.regularExpression;
	        	  $scope.showPayCard = 'false';
        	  } else {
        		  
        		  $scope.showPayCard = 'true';
        		  $scope.payCardID = result.fields.payCardID.options[0].id;
        		  $scope.payCardName = result.fields.payCardID.options[0].name;
        	  }
          }

          $scope.$apply();

      }
      , function (err) {
          window.alert(err.desc);
      }
    );

  };

  $scope.prepareDeposit = function() {
	
    $scope.iovationKey = CookieHelper.get('iovationKey');
    $scope.code = CookieHelper.get('paymentcode');
    $scope.gamingAccountID = CookieHelper.get('gamingAccountID');    
    $scope.depositName = CookieHelper.get('dname');
    
    //CHECK FOR BONUS INPUT/SELECTOR
    if ($scope.bonusCode) {
    	var bonusCode = $scope.bonusCode.code;
    }
    
    if ($scope.bonusInput) {
    	bonusCode = $scope.bonusInput;
    }
    
    //Add params based on WALLET TYPE
    switch($scope.code) {
    case "Neteller": 
    	
    	if($scope.uAccountID){
	    	if($scope.uAccountID.$invalid){
	    		window.alert('Account ID incorrect');
	    		break;
	    	}
    	}
    	
    	if($scope.uSecureID.$invalid){
    		window.alert('Secure ID incorrect');
    		break;
    	}
    	    	
    	if ($scope.payCardID == null) {    
    		var params = {
    			    paymentMethodCode: "Neteller",
    			    fields: {
    			        netellerAccountID: $scope.uAccountID
    			    }
    		}
    		
    		SessionMgr.call("/user/deposit#registerPayCard", params).then(
    			      function (result) {
    			    	var payCardID = result.id;
    	      }
    	      , function (err) {
    	          window.alert(err.desc);
    	          
    	      });
    	} 
    	
    	
    	
    	if($scope.uAccountID == null) {    		
    		var payCardID = $scope.payCardID;
    	}
    	
    	var parameters =
        	{
            paymentMethodCode: $scope.code,           
            fields: {
                gamingAccountID: $scope.gamingAccountID,
                currency: $scope.uCurrency,
                amount: $scope.depositAmount,
                payCardID: payCardID,
                netellerSecureID: $scope.uSecureID,
                bonusCode: bonusCode
            },
            iovationBlackBox: $scope.iovationKey,
        }
    break;
    case "Skrill": 
    	var parameters =
        {            
            paymentMethodCode: $scope.code,           
            fields: {
                gamingAccountID: $scope.gamingAccountID,
                currency: $scope.uCurrency,
                amount: $scope.depositAmount,
                bonusCode: bonusCode
            },
            iovationBlackBox: $scope.iovationKey,
        }
    break;
    case "Envoy_QIWI": 
    	var parameters =
        {
    		paymentMethodCode: $scope.code,
    		fields: {
    			gamingAccountID: $scope.gamingAccountID,
    			bonusCode: bonusCode
    		},
    	iovationBlackBox: $scope.iovationKey
        }
    break;
    case "Envoy_WebMoney": 
    	$scope.showWM = 'true';
    	var parameters =
	    {
			paymentMethodCode: $scope.code,
			fields: {
				gamingAccountID: $scope.gamingAccountID,
				bonusCode: bonusCode
			},
		iovationBlackBox: $scope.iovationKey
	    }
    break;	
    default:
    	var parameters =
        {
            iovationBlackBox: $scope.iovationKey,
            paymentMethodCode: $scope.code,           
            fields: {
                gamingAccountID: $scope.gamingAccountID,
                currency: $scope.uCurrency,
                amount: $scope.depositAmount,
                bonusCode: bonusCode
            }
        }
      break;
    }    

    // get the configuration of this payment method
    SessionMgr.call("/user/deposit#prepare", parameters).then(
      function (result) {
        $scope.pid = result.pid;
        CookieHelper.set('pid', result.pid);       

        //++ redirection
        if (result.status != 'redirection') {
        	CookieHelper.set('currency', result.debit.currency);
        	CookieHelper.set('amount', result.debit.amount);
        	window.location = "wallet_deposit_confirm.php";
        } else {
      	    var popup;      	    
  	    	popup = window.open("", "Popup", "toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=0,width=750,height=600,left = 490,top = 20");
  	    	popup.focus();
  	    	popup.document.write($sce.trustAsHtml(result.redirectionForm));
  	    	popup.document.depositForm.submit();
  	    	
  	    	var watchBalanceParams = {};
            watchBalanceParams.id = Number(CookieHelper.get('gamingAccountID'));
            watchBalanceParams.vendor = 'CasinoWallet';
            watchBalanceParams.type = 'Deposit';
            watchBalanceParams.amount = Number(CookieHelper.get('amount'));
            watchBalanceParams.bonusAmount = 0;
            
            SessionMgr.call("/user/account#watchBalance", parameters).then(
            		  function (result) {
            			  console.log(result);
            			// subscribe the event
            			SessionMgr.subscribe('/account/balanceChanged', function (data) {
            				console.log(data);
            			// data is a JSON object contains the updated balance information
            			})
            		  }
            		  , function (err) {
            		    // error handle            			  
            			  console.log(err.desc);

            		  }
            		);
      	    	
        	$scope.showWM = 'true';
  	    	$scope.$apply();
        }
        

      }
      , function (err) {
          window.alert(err.desc);
      }
    );

  };

  
  $scope.submitWebMoney = function() {
	  document.depositForm.setAttribute("target", "_blank");	
	  document.depositForm.submit();
  };
  
  $scope.initCardAccounts = function() {

    setTimeout(function() { //wait for session to be established before calls made
      $scope.getCards();
    }, 5000);

 };

 $scope.confirmDeposit = function() {
    var parameters =
    {
        pid: $scope.pid
    };

    SessionMgr.call("/user/deposit#confirm", parameters).then(
      function (result) {
    	  
    	//++ redirection
          if (result.status != 'redirection') {
        	  window.location = "wallet_deposit_success.php";
          	  $scope.showWM = 'false';
          } else {
          	// Yet ANOTHER Redirection POPUP HELL! These will all have to be moved to one method.
        	    var popup;      	    
    	    	popup = window.open("", "Popup", "toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=1,width=750,height=600,left = 490,top = 20");
    	    	popup.focus();
    	    	    	    	    	    	
    	    	//ONLY GOD KNOWS WHY BUT THE FORM IS "deposit-form" JS not MUCH LIKING THE "-" ?? X 2
    	    	mystring = result.redirectionForm;
    	    	mystring = mystring.replace('-', '');
    	    	mystring2 = mystring
    	    	mystring2 = mystring.replace('-', '');    	    	    	    
    	    	popup.document.write(mystring2);
    	    	popup.document.depositform.submit();

    	    	
    	    	var watchBalanceParams = {};
                watchBalanceParams.id = Number(CookieHelper.get('gamingAccountID'));
                watchBalanceParams.vendor = 'CasinoWallet';
                watchBalanceParams.type = 'Deposit';
                watchBalanceParams.amount = Number(CookieHelper.get('amount'));
                watchBalanceParams.bonusAmount = 0;

                SessionMgr.call("/user/account#watchBalance", parameters).then(
                		  function (result) {
                			  console.log(result);
                			// subscribe the event
                			SessionMgr.subscribe('/account/balanceChanged', function (data) {
                				// data is a JSON object contains the updated balance information
                			})
                		  }
                		  , function (err) {
                		    // error handle            			  
                			  console.log(err.desc);

                		  }
                		);
    	    	
    	    	
    	    	var timer = setInterval(function() {   
    	    	    if(popup.closed) {  
    	    	    	params = 
        	    		{
        	    			pid: $scope.pid
        	    		};
    	    	    	
        	    	SessionMgr.call("/user/deposit#getTransactionInfo", params).then(
          			      function (result) {      			    	
          			    	if (result.status == 'incomplete'){
          			    		window.location = "account_deposit.php";
          			    	}
    	      	      }
    	      	      , function (err) {
    	      	          window.alert(err.desc);
    	      	          
    	      	      })  
    	    	    }  
    	    	}, 5000); 	
    	    	
    	    	
    	    	
    	    	$scope.showWM = 'true';
    	    	$scope.$apply();
          }
    	  
      }
      , function (err) {
          window.alert(err.desc);
      }
    );
  };



  $scope.initPaymentMethods = function() {
    setTimeout(function() { //wait for session to be established before calls made
      $scope.getPaymentMethods();
    }, 5000);

  };

  $scope.initConfirmScreen = function() {
    $scope.pid = CookieHelper.get('pid');
    $scope.debitCurrency = CookieHelper.get('currency');
    $scope.debitAmount = CookieHelper.get('amount');
    $scope.depositName = CookieHelper.get('dname');

  };
  
  $scope.successInit = function() {
    $scope.depositName = CookieHelper.get('dname');

  };

  

});