//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('deposit-controller', function ($scope, $http, $httpParamSerializerJQLike) {

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
    window.alert("Tokenized successfully.\nCardholder: " +
      $form.find('[name=cardHolder]').val() +
      "\nCardToken: " +
      $form.find('[name=cardToken]').val() +
      "\nCard type: " +
      $form.find('[name=cardType]').val());

      $scope.registerPayCard();
  };

  function formSubmit2(evt) {
    evt.preventDefault();
    window.alert("Tokenized successfully.\nCardToken: " +
      $form.find('[name=cardToken]').val());

      $scope.prepareDepositStep2();
  };


  function secureRegisterFormLoaded() {
    window.alert('secure register form loaded callback');
    console.log('next is secure form url');
    console.log($scope.secureFormScriptUrl);


    var css = { // stylesheet for secure <input> field
      'font-size': '18px',
      'height': '34px',
      'line-height': '32px',
      'font-family': 'Arial'
    };

    var $form = $('form');
    var $btn = $form.find('[type=submit]');

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
        placeholder: 'enter CVV', // - text that will be displayed as placeholder on <input> field
        'placeholder-css': { // - placeholder styles of Secure Code field
          'font-size': '14px',
          'text-align': 'center'
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
    window.alert('secure confirm form loaded callback');
    console.log('next is secure form url');
    console.log($scope.secureFormScriptUrl);


    var css = { // stylesheet for secure <input> field
      'font-size': '18px',
      'height': '34px',
      'line-height': '32px',
      'font-family': 'Arial'
    };

    var $form = $('form');
    var $btn = $form.find('[type=submit]');
    // paymentForm;

    $form.slideDown();
    paymentForm = new CDE.PaymentForm({ // - initialize payment form with sensitive fields
      'card-security-code': { // - object of configuration for CVV field
        selector: '#dvCvvContainer', // - CSS selector of DOM element where field will appear
        css: css,
        placeholder: 'enter CVV', // - text that will be displayed as placeholder on <input> field
        'placeholder-css': { // - placeholder styles of Secure Code field
          'font-size': '14px',
          'text-align': 'center'
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
          window.location = "account_selectcards.php";
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
          } else window.alert('ignored');

      }
      , function (err) {
          console.log('RPC call "/user/deposit#getPaymentMethodCfg" failed, error = ' + err.desc);
          window.alert(err.desc);
      }
    );

  };

  $scope.setPaymentCard = function(id) {

    window.alert(id);
    $scope.payCardID = id;
  };

  $scope.confirmDeposit = function() {

    var parameters =
    {
        pid: $scope.pid
    };

    console.log('RPC call "/user/deposit#confirm".  parameters = ' + JSON.stringify(parameters, null, 4));

    SessionMgr.call("/user/deposit#confirm", parameters).then(
      function (result) {
          console.log('RPC call "/user/deposit#confirm" succeed, response = ' + JSON.stringify(result, null, 4));
          window.location = "account_depositsuccess.php";
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

    var parameters =
    {
        iovationBlackBox: $scope.iovationKey,
        paymentMethodCode: $scope.code,
        fields: {
            gamingAccountID: $scope.gamingAccountID,
            currency: $scope.uCurrency,
            amount: $scope.depositAmount,
            payCardID: payCardID
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
        
        window.location = "account_confirmdepositamount.php";
      }
      , function (err) {
          console.log('RPC call "/user/deposit#prepare" failed, error = ' + err.desc);
          window.alert(err.desc);
      }
    );
  };

  $scope.prepareDeposit = function() {

  var cardtoken = JSON.parse($scope.card).cardToken;


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

  $scope.getPaymentMethods = function() {
	  
    var parameters =
    {
        filterByCountry: "ZA",
        currency: "ZAR"
    };

    console.log('RPC call "/user/deposit#getPaymentMethods".  parameters = ' + JSON.stringify(parameters, null, 4));

    SessionMgr.call("/user/deposit#getPaymentMethods", parameters).then(
      function (result) {
        console.log('RPC call "/user/deposit#getPaymentMethods" succeed, response = ' + JSON.stringify(result, null, 4));
        $scope.paymentMethods = result.paymentMethods;
        $scope.$apply();
      }
      , function (err) {
        console.log('RPC call "/user/deposit#getPaymentMethods" failed, error = ' + err.desc);
      }
    );

  };

  $scope.selectDepositMethod = function(code) {
    console.log('the code is: ' + code);
    CookieHelper.set('paymentcode', code);
    window.location = "account_selectcards.php";
  };

  $scope.getCards = function() {

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

  $scope.initPaymentMethods = function() {

    console.log('initialize payment methods reached');    

    setTimeout(function() { //wait for session to be established before calls made
      $scope.getPaymentMethods();
    }, 5000);

  };

  $scope.initConfirmScreen = function() {

    console.log('init confirm screen');

    $scope.pid = CookieHelper.get('pid');
      $scope.debitCurrency = CookieHelper.get('currency');
      $scope.debitAmount = CookieHelper.get('amount');
      $scope.$apply();
  };

});