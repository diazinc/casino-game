
app.controller('account-controller', function ($scope, $http, $httpParamSerializerJQLike) {

  $scope.countriesDictionary = {};

  $scope.init = function() {
    SessionMgr.call("/user/account#getCountries").then(
      function (result) {

          $scope.countries = result.countries;

          var country = "";
          for(var i = 0; i < result.countries.length; i++) {
            country = result.countries[i];
            $scope.countriesDictionary[country.code] = country.name;
          };

          $scope.$apply();

          $scope.getProfile();
      }
      , function (err) {
          window.alert('RPC call "/user/account#getCountries" failed, error = ' + err.desc);
      }
    );

    
    SessionMgr.call("/user/account#getLanguages").then(
      function (result) {
        $scope.uLanguages=result;        
        
        console.log(JSON.stringify(result));
        
        $scope.$apply();
      }
      , function (err) {
          console.log('RPC call "/user/account#getLanguages" failed, error = ' + err.desc);
      }
    ); 

    SessionMgr.call("/user/account#getPhonePrefixes").then(
      function (result) {
        $scope.phonePrefixes = result;
        $scope.$apply();
      }
      , function (err) {
        alert('RPC call "/user/account#getPhonePrefixes" failed, error = ' + err.desc);
      }
    );

    SessionMgr.call("/user/account#getCurrencies").then(
      function (result) {
        $scope.currencies = result;
        $scope.$apply();
      }
      , function (err) {
          alert('RPC call "/user/account#getCurrencies" failed, error = ' + err.desc);
      }
    );

    SessionMgr.call("/user/pwd#getPolicy").then(
      function (result) {
          $scope.pwdPolicy = result;
          console.log("password policy");
          console.log($scope.pwdPolicy);
      }
      , function (err) {

      }
    );

  };

  $scope.update = function() {
    var params = {};
    console.log("**** alias: " + $scope.uAlias);

    params["username"] = $scope.uUsername;
    params["alias"] = $scope.uAlias;
    params["gender"] = 'M';
    params["password"] = $scope.uPassword;
    params["title"] = $scope.uTitle;
    params["firstname"] = $scope.uFirstName;
    params["lastname"] = $scope.uLastname;
    params["email"] = $scope.uEmail;
    params["currency"] = $scope.uCurrency;
    
    params["language"] = $scope.uLanguage;
    CookieHelper.set('language', $scope.uLanguage);
    
    
    params["country"] = $scope.uCountry;
    params["address1"] = $scope.uAddress1;
    params["address2"] = $scope.uAddress2;
    params["city"] = $scope.uCity;
    params["postalcode"] = $scope.uPostalCode;
    params["mobile"] = $scope.uMobileNumber;
    params["mobilePrefix"] = $scope.uMobileCode;
    params["phonePrefix"] = $scope.uMobileCode;
    params["phone"] = $scope.uMobileNumber;
    params["postalCode"] = $scope.uPostalCode;
    params["securityQuestion"] = $scope.uSecQuestion;
    params["securityAnswer"] = $scope.uSecAnswer;
    params["currency"] = $scope.uCurrency;
    params["region"] = $scope.uRegion;
    params["acceptNewsEmail"] = $scope.uAccept;
    params["acceptSMSOffer"] = $scope.uAccept;


    SessionMgr.call("/user/account#updateProfile", params).then(
      function (result) {
          window.alert('Profile is updated successfully');
      }
      , function (err) {
          console.log('RPC call "/user/account#updateProfile" failed, error = ' + err.desc);
      }
    );


    setTimeout(function() { window.location.reload( true ); }, 2000);

  };

  $scope.getProfile = function() {

    SessionMgr.call("/user/account#getProfile").then(
      function (result) {
        console.log('RPC call "/user/account#getProfile" succeed, response = ' + JSON.stringify(result, null, 4));

      $scope.isBirthDateUpdatable = result.isBirthDateUpdatable;
      $scope.isCountryUpdatable = result.isCountryUpdatable;
      $scope.isCurrencyUpdatable = result.isCurrencyUpdatable;
      $scope.isEmailUpdatable = result.isEmailUpdatable;
      $scope.isFirstnameUpdatable = result.isFirstnameUpdatable;
      $scope.isSurnameUpdatable = result.isSurnameUpdatable;

      console.log($scope.profile);

      $scope.uCountry = result.fields.country;
      $scope.uFirstName = result.fields.firstname;
      $scope.uLastName = result.fields.surname;
      //date of birth
      $scope.uAddress1 = result.fields.address1;
      $scope.uAddress2 = result.fields.address2;
      $scope.uCity = result.fields.city;
      $scope.uPostalCode = result.fields.postalCode;
      $scope.uMobileCode = result.fields.mobilePrefix;
      $scope.uMobileNumber = result.fields.mobile;
      $scope.uEmail = result.fields.email;
      $scope.uUsername = result.fields.username;
      $scope.uAlias = result.fields.alias;
      $scope.uSecQuestion = result.fields.securityQuestion;
      $scope.uSecAnswer = result.fields.securityAnswer;
      
      $scope.uLanguage = result.fields.language;
      
      $scope.uTitle = result.fields.title;
      $scope.uDD = result.fields.birthDay;
      $scope.uMM = result.fields.birthMonth;
      $scope.uYY = result.fields.birthYear;
      $scope.uCurrency = result.fields.currency;
      $scope.uRegion = result.fields.region;
      $scope.uAccept = result.fields.acceptSMSOffer;

      $scope.fullCountryName = $scope.countriesDictionary[$scope.uCountry];

      $scope.$apply();


      }
      , function (err) {
          console.log('RPC call "/user/account#getProfile" failed, error = ' + err.desc);
      }
    );
  };
  
  $scope.initAccount = function() {

    setTimeout(function() { //wait for session to be established before calls made
      $scope.init();
    }, 5000);

  };
});