//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('deposit-card-controller', function ($scope, $sce, $http, $httpParamSerializerJQLike) {

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

  var $form = $('form');
  var $btn = $form.find('[type=submit]');
  var paymentForm = null;

  function tokenizeAndSubmit(evt) {
    evt.preventDefault();
    if (!paymentForm.fields['card-number'].valid) {
      window.alert('Please input correct credit card number');
      return false;
    }
    if (!paymentForm.fields['card-security-code'].valid) {
      window.alert('Please input correct security number');
      return false;
    }
    paymentForm.submit()
      .then(
        function(data) {
          if (data.Success === true) {
            $scope.cardToken = data.Data.CardToken;
            $form.find('[name=cardToken]').val(data.Data.CardToken);
            $form.submit();
          } else {
            window.alert('Cvv tokenization failed: ' + data.ResponseMessage);
          }
        },
        function(data) {
          window.alert(data.ResponseMessage);
        });
  };

  function tokenizeAndSubmit2(evt) {
  
    evt.preventDefault();
    if (!paymentForm.fields['card-security-code'].valid) {
      window.alert('Please input correct security number');
      return false;
    }

    var cardtoken = JSON.parse($scope.card).cardToken;

    paymentForm.submitCvv({  CardToken: cardtoken })
      .then(
        function(data) {
          if (data.Success === true) {
            $scope.cardToken = data.Data.CardToken;
            $form.find('[name=cardToken]').val(data.Data.CardToken);
            $form.submit();
          } else {
            window.alert('Cvv tokenization failed: ' + data.ResponseMessage);
          }
        },
        function(data) {
          window.alert(data.ResponseMessage);
        });
  };

  function formSubmit(evt) {
    evt.preventDefault();
    console.log("Tokenized successfully.\nCardholder: " +
      $form.find('[name=cardHolder]').val() +
      "\nCardToken: " +
      $form.find('[name=cardToken]').val() +
      "\nCard type: " +
      $form.find('[name=cardType]').val());

      $scope.registerPayCard();
  };

  function formSubmit2(evt) {
    evt.preventDefault();

      $scope.prepareDepositStep2();
  };


  function secureRegisterFormLoaded() {
    console.log('secure register form loaded callback');
    console.log('next is secure form url');
    console.log($scope.secureFormScriptUrl);

    var css = { // stylesheet for secure <input> field
    	'height': '34px',
    	'line-height': '34px',
    	'border': '#0f0f0f 1px solid',
    	'outline': '#767676 0px solid',
    	'font-size': '12px',
    	'color': '#000', 'text-align': 'left',
    	'background': '#101010',
    	'border': '1px solid #000',
    	'color': '#ffffff'
    };

 
    
    
    var $form = $('form');
    var $btn = $form.find('[type=submit]');
    // paymentForm;

    $form.slideDown();
    paymentForm = new CDE.PaymentForm({ // - initialize payment form with sensitive fields
      'card-number': { // - object of configuration for Card Number field
        selector: '#dvCardNumberContainer', // - CSS selector of DOM element where field will appear
        css: css,
        placeholder: 'XXXX XXXX XXXX XXXX' // - text that will be displayed as placeholder on Card Number <input> field
      },
      'card-security-code': { // - object of configuration for CVV field
        selector: '#dvCvvContainer', // - CSS selector of DOM element where field will appear
        css: css,
        placeholder: 'Enter CVC', // - text that will be displayed as placeholder on <input> field
        'placeholder-css': { // - placeholder styles of Secure Code field
        	'height': '34px',
        	'line-height': '34px',
        	'font-size': '12px',
        	'color': '#000', 'text-align': 'left',
        	'background': '#101010',
        	'border': '1px solid #000',
        	'color': '#ffffff'
        }
      }
    });

    paymentForm.on('load', function() {
      $btn.prop('disabled', false);
      console.log('loaded');
    });
    paymentForm.on('error', function(event, errorData) {
      console.log('cannot load');
      window.alert(errorData.ResponseMessage);
      $form.slideUp();
    });
    paymentForm.fields['card-number'].on('status', function(evt, data) {
      console.log('Card Number changed.', 'Card type:', data.type);
      $form.find('[name=cardType]').val(data.type);
    }).on('field_focus', function() {
      console.log('Card Number field is in focus');
    }).on('field_blur', function() {
      console.log('Card Number field blur');
    });
    paymentForm.fields['card-security-code'].on('status', function(evt, data) {
      console.log('CVV changed. Validity:', data.valid);
    }).on('field_focus', function() {
      console.log('CVV field is in focus');
    }).on('field_blur', function() {
      console.log('CVV field blur');
    });

    $btn.on('click', tokenizeAndSubmit);
    $form.on('submit', formSubmit);

  };

  function secureConfirmCardFormLoaded() {
    console.log('secure confirm form loaded callback');
    console.log('next is secure form url');
    console.log($scope.secureFormScriptUrl);


    var css = { // stylesheet for secure <input> field
    		'height': '34px',
        	'line-height': '34px',
        	'font-size': '12px',
        	'color': '#000', 'text-align': 'left',
        	'background': '#101010',
        	'border': '1px solid #000',
        	'color': '#ffffff'
    };

    var $form = $('form');
    var $btn = $form.find('[type=submit]');

    $form.slideDown();
    paymentForm = new CDE.PaymentForm({ // - initialize payment form with sensitive fields
      'card-security-code': { // - object of configuration for CVV field
        selector: '#dvCvvContainer', // - CSS selector of DOM element where field will appear
        css: css,
        placeholder: 'Enter CVC', // - text that will be displayed as placeholder on <input> field
        'placeholder-css': { // - placeholder styles of Secure Code field
        	'height': '34px',
        	'line-height': '34px',
        	'font-size': '12px',
        	'color': '#000', 'text-align': 'left',
        	'background': '#101010',
        	'border': '1px solid #000',
        	'color': '#ffffff'
        }
      }
    });

    paymentForm.on('load', function() {
      $btn.prop('disabled', false);
      console.log('loaded');
    });
    paymentForm.on('error', function(event, errorData) {
      console.log('cannot load');
      window.alert(errorData.ResponseMessage);
      $form.slideUp();
    });
    paymentForm.fields['card-security-code'].on('status', function(evt, data) {
      console.log('CVV changed. Validity:', data.valid);
    }).on('field_focus', function() {
      console.log('CVV field is in focus');
    }).on('field_blur', function() {
      console.log('CVV field blur');
    });

    $btn.on('click', tokenizeAndSubmit2);
    $form.on('submit', formSubmit2);

  };

  $scope.registerPayCard = function() {

    $scope.cardExpiryDate = $scope.monthMap[$scope.month] + "/" + $scope.year;
    console.log("expiry date: " + $scope.cardExpiryDate);

    var parameters =
    {
        paymentMethodCode: $scope.code,
        fields: {
            cardToken: $scope.cardToken,
            cardHolderName: $scope.cardHolderName,
            cardExpiryDate: $scope.cardExpiryDate,
            displayCardNumber: $scope.displayCardNumber || ""
        }
    };

    console.log('RPC call "/user/deposit#registerPayCard".  parameters = ' + JSON.stringify(parameters, null, 4));

    // get the configuration of this payment method
    SessionMgr.call("/user/deposit#registerPayCard", parameters).then(
      function (result) {
          console.log('RPC call "/user/deposit#registerPayCard" succeed, response = ' + JSON.stringify(result, null, 4));
          $scope.secureFormScriptUrl = result.secureFormScriptUrl;
          window.location = "moneymatrix_deposit_selectcards.php";
      }
      , function (err) {
          console.log('RPC call "/user/deposit#registerPayCard" failed, error = ' + err.desc);
          window.alert(err.desc);
          window.reload();
      }
    );

  }

  $scope.fetchSecureForm = function() {
	  
    $scope.code = CookieHelper.get('paymentcode');

    var parameters =
    {
        paymentMethodCode: $scope.code
    };

    console.log('RPC call "/user/deposit#getPaymentMethodCfg".  parameters = ' + JSON.stringify(parameters, null, 4));


    // get the configuration of this payment method
    SessionMgr.call("/user/deposit#getPaymentMethodCfg", parameters).then(
      function (result) {

          console.log('RPC call "/user/deposit#getPaymentMethodCfg" succeed, response = ' + JSON.stringify(result, null, 4));
          $scope.secureFormScriptUrl = result.secureFormScriptUrl;
          $scope.paymentOptions = result.fields.payCardID["options"];
          $scope.gamingAccounts = result.fields.gamingAccountID["options"];
          $scope.gamingAccountID = $scope.gamingAccounts[0].id;

          $scope.$apply();

          if($scope.secureFormScriptUrl) {
            jQuery.get($scope.secureFormScriptUrl, undefined, secureRegisterFormLoaded, "script" ).fail(function() {
              window.alert('Cannot load provided secureURL');
            });
          } else console.log('ignored');

      }
      , function (err) {
          console.log('RPC call "/user/deposit#getPaymentMethodCfg" failed, error = ' + err.desc);
          window.alert(err.desc);
      }
    );
  };

  $scope.setPaymentCard = function(id) {

    console.log('payment card id' + id);
    $scope.payCardID = id;
  };

  
  $scope.addLoadingProgress = function()  {
	    $("#ccSubmit").addClass('form_loading');
  };

  $scope.removeLoadingProgress = function() {
 	  $("#ccSubmit").removeClass('form_loading');
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
          		window.location = "moneymatrix_deposit_success.php";
          } else {
          	// redirection to 3rd party
        	    var popup;      	    
    	    	popup = window.open("", "Popup", "toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=0,width=750,height=600,left = 0,top = 20");
    	    	popup.focus();
    	    	
    	    	//FUCK KNOWS WHY BUT THE FORM IS "deposit-form" not MUCH LIKING THE "-" ?? X 2
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

               
                SessionMgr.call("/user/account#watchBalance", watchBalanceParams).then(
                    function (result) {
                      // start monitor the balance
                      console.log(result);
                      SessionMgr.subscribe('/account/balanceChanged', function (data) {
                        console.log(data);
                      },
                      function (err) {
                        console.log(err.desc);
                      })		                
                    }).then(
                      // after the event is subscribed, set the group id
                      function (subscription) {
                        console.log(subscription);
                      },
                      function (err) {
                        console.log(err.desc);
                      }
                      );
    	    	$scope.$apply();
          }
                              
      }
      , function (err) {
          console.log('RPC call "/user/deposit#confirm" failed, error = ' + err.desc);
          window.alert(err.desc);
      }
    );
  };

  $scope.prepareDepositStep2 = function() {

    var payCardID = JSON.parse($scope.card).id;
    $scope.iovationKey = CookieHelper.get('iovationKey');

    //CHECK FOR BONUS INPUT/SELECTOR
    if ($scope.bonusCode) {
    	var bonusCode = $scope.bonusCode.code;
    }
    
    if ($scope.bonusInput) {
    	bonusCode = $scope.bonusInput;
    }
    
    
    var parameters =
    {
        iovationBlackBox: $scope.iovationKey,
        paymentMethodCode: $scope.code,
        fields: {
            gamingAccountID: $scope.gamingAccountID,
            currency: $scope.uCurrency,
            amount: $scope.depositAmount,
            payCardID: payCardID,
            bonusCode: bonusCode
        }
    };

    console.log('RPC call "/user/deposit#prepare".  parameters = ' + JSON.stringify(parameters, null, 4));


    // get the configuration of this payment method
    SessionMgr.call("/user/deposit#prepare", parameters).then(
      function (result) {

        $scope.pid = result.pid;
        CookieHelper.set('pid', result.pid);
        CookieHelper.set('currency', result.debit.currency);
        CookieHelper.set('amount', result.debit.amount);

        console.log('RPC call "/user/deposit#prepare" succeed, response = ' + JSON.stringify(result, null, 4));
        
        window.location = "moneymatrix_deposit_confirm.php";

      }
      , function (err) {
          console.log('RPC call "/user/deposit#prepare" failed, error = ' + err.desc);
          window.alert(err.desc);
      }
    );
  };

  $scope.prepareDeposit = function() {
	  console.log('preparing deposit');

  var cardtoken = JSON.parse($scope.card).cardToken;

  //var paymentForm = new CDE.PaymentForm();

  paymentForm.submitCvv({  CardToken: cardtoken }).then(
      function (data) {
          if (data.Success == true) {
              // submit the deposit form
              window.alert("successfullly confirmed CVV");
              $scope.prepareDepositStep2();
          } else {
              window.alert("error in confirmation of CVV");
          }
      },
      function (data) {
          var message = data.detail ? data.detail : data.ResponseMessage;

          alert(message);
          return;
      }
  );

  };
  
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
		        console.log('RPC call "/user#getApplicableBonuses" succeed, response = ' + JSON.stringify(result, null, 4));         
		        $scope.bonuses=result.bonuses; 
		        $scope.enableBonusInput=result.enableBonusInput;
		        $scope.enableBonusSelector=result.enableBonusSelector;
		        $scope.$apply();  
		    }
		
		
		    , function (err) {
		        console.log('RPC call "/user#getApplicableBonuses" failed, error = ' + err.desc);
		        window.alert(err.desc);
		        window.location.reload();
		    }
		  );

    $scope.code = CookieHelper.get('paymentcode');

    var parameters =
    {
        paymentMethodCode: $scope.code
    };

    console.log('RPC call "/user/deposit#getPaymentMethodCfg".  parameters = ' + JSON.stringify(parameters, null, 4));


    // get the configuration of this payment method
    SessionMgr.call("/user/deposit#getPaymentMethodCfg", parameters).then(
      function (result) {

          console.log('RPC call "/user/deposit#getPaymentMethodCfg" succeed, response = ' + JSON.stringify(result, null, 4));
          console.log(result);
          $scope.depositName = result.name;
          $scope.depositDescription = result.depositDesc;
          $scope.secureFormScriptUrl = result.secureFormScriptUrl;
          $scope.paymentOptions = result.fields.payCardID != null ? result.fields.payCardID["options"] : null; 
          $scope.gamingAccounts = result.fields.gamingAccountID["options"];
          $scope.gamingAccountID = $scope.gamingAccounts[0].id;             
          $scope.$apply();
          
          if ($scope.paymentOptions.length == 0){
          	  window.location = "moneymatrix_deposit_registercard.php";
          }       

          if($scope.secureFormScriptUrl) {
            jQuery.get($scope.secureFormScriptUrl, undefined, secureConfirmCardFormLoaded, "script" ).fail(function() {
              window.alert('Cannot load provided secureURL');
            });
          } else window.alert('ignored');

      }
      , function (err) {
          console.log('RPC call "/user/deposit#getPaymentMethodCfg" failed, error = ' + err.desc);
          window.alert(err.desc);
      }
    );
  };

  $scope.initCardAccounts = function() {
	  
    console.log('initialize cards reached'); 

    setTimeout(function() { //wait for session to be established before calls made
      $scope.getCards();
    }, 5000);

 }; 

 $scope.initialize = function() {
	 
    console.log('initialize reached');

    setTimeout(function() { //wait for session to be established before calls made
      $scope.fetchSecureForm();
    }, 5000);

  };

  $scope.initConfirmScreen = function() {
	  
    console.log('init confirm screen');

    $scope.pid = CookieHelper.get('pid');
    $scope.debitCurrency = CookieHelper.get('currency');
    $scope.debitAmount = CookieHelper.get('amount');
  };

  

});
