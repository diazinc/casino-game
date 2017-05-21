//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('login-controller', function ($scope, $http, $translate, $rootScope, $compile, $httpParamSerializerJQLike, $window) {
	
  $translate.use($scope.language);

  $scope.mobileResponsiveWidth = false;

 if($(window).width() <= 1024) {
    CookieHelper.set('mobile', true);
    $scope.showModal = true;
    $scope.mobileResponsiveWidth = true;
  } else {
    CookieHelper.set('mobile', false);
    $scope.mobileResponsiveWidth = false;
  }

  $(document).ready(function(){

    try {
      if($(slider_wrapper).length > 0) { //catch case for not defined
      $('.bxslider').bxSlider({

      });
    } else window.alert('doh');
    }
    catch(err) {
    }

  });

  function iovate() {
    // basic configuration
    var io_install_stm = false; // do not install Active X
    var io_exclude_stm = 12; // do not run Active X
    var io_install_flash = false; // do not install Flash
    var io_enable_rip = true; // collect Real IP information
    var sent = false;
    function send_bb( bb ) { // function to process the blackbox
        if ( sent ) return;
        // process blackbox
        console.log('process blackbox ' + bb);
        $scope.iovationKey = bb;
        CookieHelper.set('iovationKey', $scope.iovationKey);
        // send blackboc to the methods which requires Iovation check
        sent = true;
    }
    // use callback to process blackbox as soon as it is done
    var io_bb_callback = function (bb, isComplete)
    { // when done call the send function
        if ( isComplete ) send_bb( bb );
    };
    // set up timer to give us a maximum wait time before giving up on waiting
    // for all of the data to be collected. At that point, just send what is
    // available
    setTimeout( function() {
        try {
            var bb_info = ioGetBlackbox();
           console.log('in timeout ' + bb_info);
            send_bb( bb_info.blackbox );
            return;
        } catch (e) {}
        send_bb( "" ); // if we are done but got an error,
        // send an empty blackbox
    }, 5000); // set a maximum wait time of 5
  };

  selectBannerTemplate = function() {
    var page = location.href.split("/").slice(-1).toString();
    switch(page) {
      case "casino.php":
        break;
      case "livecasino.php":
        break;
      case "umbrella.php":
        break;
      case "sportsbook.php":
      case "sportsbook_content1":
      case "sportsbook_content2":
        break;
      case "promos_single.php":
      case "promos_list.php":
      case "promos_livecasino.php":
      case "promos_sportsbook.php":
      case "promos_casino.php":
        break;
      default:
        break;
    }
  };

  $scope.alterLogins = function() {
   $( document ).ready(function() {
      if(!$scope.mobileResponsiveWidth) {
        $('a#mainText').text("MAIN: ");
        $('a#bonusText').text("CASINO BONUS: ");
        $('a#sBonusText').text("SPORTS BONUS: ");
      } else {
        $('a#mainText').text("MAIN: ");
        $('a#mainText').append('<br/>');
        $('a#bonusText').text("CASINO BONUS: ");
        $('a#sBonusText').text("SPORTS BONUS: ");
      };

    });

  };

  $scope.mobileLogin = function(username, password) {
    $scope.uEmailOrUsername = username;
    $scope.uPassword = password;
    $scope.iovationKey =  CookieHelper.get('iovationKey');
    $scope.login();
  };

  $scope.prelogin = function() {
    if($scope.uEmailOrUsername && $scope.uPassword) {
        addLoadingProgress();
        $scope.login();
      }
    else { 
    	//Need to add language specific errors here or as another method
        window.alert('Please complete ALL fields to login');
      }
  };

  function addLoadingProgress() {
    $("#passwordButton").removeClass('password_field').addClass('password_field_loading');
  };

  function removeLoadingProgress() {
    $("#passwordButton").removeClass('password_field_loading').addClass('password_field');
  };

  $scope.logout = function() {

    removeLoadingProgress();

    SessionMgr.call("/user#logout").then(
      function (result) {
        CookieHelper.set('username', '');
        window.location = "umbrella.php";
      }
      , function (err) {
      }
    );

  };

  $scope.login = function () {

    var parameters = {
      "usernameOrEmail": $scope.uEmailOrUsername,
      "password": $scope.uPassword,
      "iovationBlackBox": $scope.iovationKey
    };

    SessionMgr.call("/user#login", parameters).then(
      function (result) {

    	CookieHelper.set('username', $scope.uEmailOrUsername);
        $scope.language = CookieHelper.get('language');

        if ($scope.language.length > 2) {
    		var newLang = $scope.language.substring(0,2); 
    		$scope.language = newLang;
			CookieHelper.set('language', $scope.language);			
    	} else {
	    	$scope.language = (CookieHelper.get('language'));
    	}
        
        //Reload based on registered language goes here... FIRST WE NEED TO SORT THE PROFILE LANGUAGE CHANGE OUT
		if ($scope.language != 'en') {
			  $scope.pathURL = "/" + $scope.language.toUpperCase() + "/" + location.href.split("/").slice(-1);
			  window.location.href = $scope.pathURL;
		  } else {
			  $scope.pathURL = "/" + location.href.split("/").slice(-1);
			  window.location.href = $scope.pathURL;
		  }	
		
		// Force Protcol switch... silly i know but sys admin wont change is vhost
        if (location.protocol !== "https:") {
        	location.protocol = "https:";
        }
		
        if (result.hasToEnterCaptcha) {
          console.log('MUST ENTER CAPTCHA');
          return;
        }

        if (result.hasToChangePassword) {
          console.log('HAS TO CHANGE PASSWORD');
          return;
        }

        if (result.hasToAcceptTC) {
          if (result.majorChangeInTC) {
            console.log('HAS TO ACCEPT MAJOR CHANGE IN TERMS AND CONDITIONS');
          }
          else {
            console.log('HAS TO ACCEPT TERMS AND CONDITIONS');
          }
        } else if (result.minorChangeInTC) {
            console.log('Just for your information, we have updated our Terms &amp; Conditions.');
        }
      }
      , function (err) {
          $("#passwordButton").removeClass('password_field_loading').addClass('password_field');
          window.alert(err.desc);
      }
    );
  }
  $scope.changeLanguage = function(language) {
	  CookieHelper.set('language', language);
	  $scope.language = language;
	  
	  //Redirect based on Language chosen
	  // This is a hack since the banners need to be included in each language.
	  if (language != 'en') {
		  CookieHelper.set('language', $scope.language);
		  $scope.pathURL = "/" + language.toUpperCase() + "/" + location.href.split("/").slice(-1);		  
		  window.location.href = $scope.pathURL;
	  } else {
		  CookieHelper.set('language', 'en');
		  $scope.pathURL = "/" + location.href.split("/").slice(-1);
		  window.location.href = $scope.pathURL;
	  }	
	  
  }
  
  $scope.checkIfLoggedIn = function() {

    SessionMgr.init();
    
    if(CookieHelper.get('language') != ''){
    	if (CookieHelper.get('language').length > 2) {
    		var newLang = CookieHelper.get('language').substring(0,2); 
    		$scope.language = newLang;
			CookieHelper.set('language', $scope.language);			
    	} else {
	    	$scope.language = CookieHelper.get('language');
	  	  	if (CookieHelper.get('tCount') < 1){
	  	  		CookieHelper.set('tCount', (CookieHelper.get('tCount') + 1));  	  
	  	  		$scope.changeLanguage($scope.language);
	  	  	}
    	}
    } else {
  	  CookieHelper.set('language', 'en');
  	  $scope.language = 'en';
    }
    
    $translate.use($scope.language);

    $scope.uEmailOrUsername = CookieHelper.get('username');

    SessionMgr.statusChangeHandlers.subscribe(function (data) {

      if (data.status == SessionStatus.LOGGED_IN) {
          $scope.getBalanceInit();
      }
      else if (data.status == SessionStatus.LOGGED_OUT) {
    	  CookieHelper.set('tCount', 0);
          CookieHelper.set('username', '');
          CookieHelper.set('username', $scope.uEmailOrUsername);
          // UNset cookie vars
          CookieHelper.set('firstname', '');
          CookieHelper.set('userID', '');
          CookieHelper.set('email', '');
          window.location = "umbrella.php";

      }
      else if (data.status == SessionStatus.NOT_CONNECTED) {
      }
      else if (data.status == SessionStatus.INIT_COMPLETED) {

        SessionMgr.call("/user/basicConfig#get").then(
          function (result) {
              if (result.iovation.enabled)
                  $('<script src="' + result.iovation.javaScriptUrl + '" ><\/script>').appendTo($('body'));
          }
          , function (err) {
          }
        );

        iovate();


        if (SessionMgr.isLoggedIn()) {

          $('#login').attr('id','loggedin');
          $scope.template = "loggedinTemplate";
          $scope.banner="loggedinBanner";
          selectBannerTemplate();
          if($("#signup_container").length) {
            $(signup_container).hide();
          };
          $scope.alterLogins();
          $scope.checkWhichBanner();

          $scope.$apply();


          // Set CookieHelper USER vars

          SessionMgr.call("/user/account#getProfile").then(
            function (result) {
;                
	            CookieHelper.set('firstname', result.fields.firstname);
	            CookieHelper.set('language', result.fields.language);
	            CookieHelper.set('email', result.fields.email);
	            CookieHelper.set('username', result.fields.username);
	            CookieHelper.set('userID', result.fields.userID);
	            }
	            , function (err) {
	                console.log('RPC call "/user/account#getProfile" failed, error = ' + err.desc);
	            }
          	);


        } else {

          $scope.template="notloggedinTemplate";
          $scope.banner="notloggedinBanner";
          if($("#signup_container").length) {
            $(signup_container).show();
          };

          $scope.checkWhichBanner();
          $scope.$apply();

        }

      }
    });

  };

  $scope.checkWhichBanner = function() {

    SessionMgr.statusChangeHandlers.subscribe(function (data) {
      if (data.status == SessionStatus.INIT_COMPLETED) {

    	  $scope.topMenu="mainMenu";
          $scope.$apply();


        if (SessionMgr.isLoggedIn()) {
          $scope.banner="loggedinBanner";
          $scope.$apply();

        } else {

          $scope.banner="notloggedinBanner";
          $scope.$apply();
        }


        try {
        if($(slider_wrapper).length > 0) { //catch case for not defined
          $('.bxslider').bxSlider({
        	  	// GENERAL
        		mode: 'horizontal',
        		slideSelector: '',
        		infiniteLoop: false,
        		hideControlOnEnd: true, // NEVER TURN THIS TO TRUE NOT UNLESS YOU WANT A MESS
        		speed: 3000,
        		easing: null,
        		slideMargin: 0,
        		startSlide: 0,
        		randomStart: false,
        		captions: true,
        		ticker: false,
        		tickerHover: false,
        		adaptiveHeight: false,
        		adaptiveHeightSpeed: 500,
        		video: false,
        		useCSS: false,
        		preloadImages: 'visible',
        		responsive: true,
        		slideZIndex: 50,
        		wrapperClass: 'bx-wrapper',

        		// TOUCH
        		touchEnabled: false,
        		swipeThreshold: 50,
        		oneToOneTouch: false,
        		preventDefaultSwipeX: false,
        		preventDefaultSwipeY: false,

        		// PAGER
        		pager: false,
        		pagerType: 'full',
        		pagerShortSeparator: ' / ',
        		pagerSelector: null,
        		buildPager: null,
        		pagerCustom: null,

        		// CONTROLS
        		controls: true,
        		nextText: 'Next',
        		prevText: 'Prev',
        		nextSelector: null,
        		prevSelector: null,
        		autoControls: false,
        		startText: 'Start',
        		stopText: 'Stop',
        		autoControlsCombine: false,
        		autoControlsSelector: null,

        		// AUTO
        		auto: true,
        		pause: 300,
        		autoStart: true,
        		autoDirection: 'next',
        		autoHover: false,
        		autoDelay: 0,
        		autoSlideForOnePage: false,

        		// CAROUSEL
        		minSlides: 1,
        		maxSlides: 1,
        		moveSlides: 0,
        		slideWidth: 0,

        		// CALLBACKS
        		onSliderLoad: function() {},
        		onSlideBefore: function() {},
        		onSlideAfter: function() {},
        		onSlideNext: function() {},
        		onSlidePrev: function() {},
        		onSliderResize: function() {}

          });
        } else console.log('doh');
        }
        catch(err) {
        }

      }

    });

  };

  $scope.getBalanceInit = function() {

    // first initailize the list
    var parameters =
    {
        expectBalance: true,
        expectBonus: true
    };

    SessionMgr.call("/user/account#getGamingAccounts", parameters).then(
      function (result) {

        //TODO update the balance and bonus models

        $scope.balance = result.accounts[0].amount;
        $scope.currency = result.accounts[0].currency;
        //Check for Bonus
        $scope.bonus = 0;
        $scope.sportsBonus = 0;
        for (var i = 1; i < result.accounts.length; i++) {
    		 if (result.accounts[i].name == 'OddsMatrix bonus'){
    		 	$scope.sportsBonus = result.accounts[i].amount;
    		 }
    		 
    		 if (result.accounts[i].name == 'CasinoWallet'){
    		 	$scope.bonus = result.accounts[i].amount;
    		 }
    	};
        
        
        CookieHelper.set('gamingAccountID', result.accounts[0].id);
        $scope.$apply();
      }
      , function (err) {
      }
    );
  };

});
