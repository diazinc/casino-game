//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('casino-controller-modal', function ($scope, $http, $httpParamSerializerJQLike) {
  $scope.username = "USERNAME";
  $scope.password = "PASSWORD";
  $scope.realMoney = false;
  $scope.alphabetAsc = false;
  $scope.popularityAsc = false;
  $(".content_filter_btn").css("background-color","#b41626"); //activated red
  $scope.alphabeticalButtonText = "A-Z";
  $scope.sortingMethod = { Alphabetic:1, Popularity: 2 };
  $scope.sortSelected = "";
  $scope.jackpots = {};

  console.log('here');
  SharedState.initialize($scope, 'modal1');
  SharedState.turnOn('modal1');
  console.log(SharedState.values());

  // Fake text i used here and there.
  $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
    'Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum ' +
    'corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

  //Clock for IN-GAME time
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('timer').innerHTML =
      h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  function calculateColumns() {

    if($(window).width() <= 768) {
      $scope.numberOfColumns = 2;
      $scope.pageSize = 8;
      $scope.gamesTemplate = "casino_2_template";
    };
    if($(window).width() >= 769 && $(window).width() <= 1000) {
      $scope.numberOfColumns = 3;
      $scope.pageSize = 12;
      $scope.gamesTemplate = "casino_3_template";
    };
    if($(window).width() >= 1001 && $(window).width() <= 1279) {
      $scope.numberOfColumns = 4;
      $scope.pageSize = 16;
      $scope.gamesTemplate = "casino_4_template";
    };
    if($(window).width() >= 1280) {
      $scope.numberOfColumns = 5;
      $scope.pageSize = 20;
      $scope.gamesTemplate = "casino_5_template";
    };

  };

  calculateColumns();

  $scope.testPlatform = function() {
    var isPC = true;
    if( /Android/i.test(navigator.userAgent) ) {
      isPC = false;
      $scope.platform = "Android";
    };
    if( /iPhone/i.test(navigator.userAgent) ) {
      isPC = false;
      iOSVersion();
      $scope.platform = "iPhone";
    };
    if( /iPad/i.test(navigator.userAgent) ) {
      isPC = false;
      iOSVersion();
      $scope.platform = "iPad";
    };
    if( /Windows Phone 7.0|Windows Phone OS 7.5/i.test(navigator.userAgent) ) {
      isPC = false;
      $scope.platform = "WM7";
    };
    if( /Windows Phone 8.0/i.test(navigator.userAgent) ) {
      isPC = false;
      $scope.platform = "WP8";
    };
    if(isPC) {
      $scope.platform = "PC";
    };

    CookieHelper.set('platform', $scope.platform);

    // This will run only if iPhone or iPad not
    function iOSVersion() {
  	  if(window.MSStream){
  	    // There is some iOS in Windows Phone...
  	    return false;
  	  }
  	  var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
  	      version;

  	  if (match !== undefined && match !== null) {
  	    version = [
  	      parseInt(match[1], 10),
  	      parseInt(match[2], 10),
  	      parseInt(match[3] || 0, 10)
  	    ];
  	    $scope.iOSV = parseFloat(version.join('.'));
  	    return parseFloat(version.join('.'));
  	  }

  	  return false;
  	}

    $scope.refreshGames();
  };

  $scope.gameName = "SEARCH";

  $(document).ready(function () {
    $(".content_sub_menu li a").click(function(event) {
      $('.content_sub_menu li').slideUp();
    });
  });

  /* PAGINATION BLOCK */

  paginationNone = function() {
    $(forwardPagination).removeClass("page_forward");
    $(backPagination).removeClass("page_back");
    $(forwardPagination).addClass("page_forward_deadlink");
    $(forwardPagination).addClass("page_last_deadlink");
    $(backPagination).addClass("page_back_deadlink");
  };

  paginationInitial = function() {
    $(forwardPagination).removeClass("page_forward_deadlink");
    $(lastPagination).removeClass("page_last_deadlink");
    $(firstPagination).addClass("page_first_deadlink");
    $(forwardPagination).addClass("page_forward");
    $(lastPagination).addClass("page_last");
    $(backPagination).addClass("page_back_deadlink");
  }

  paginationIntermidiate = function() {
    $(forwardPagination).removeClass("page_forward_deadlink");
    $(lastPagination).removeClass("page_last_deadlink");
    $(backPagination).removeClass("page_back_deadlink");
    $(firstPagination).removeClass("page_first_deadlink");
    $(forwardPagination).addClass("page_forward");
    $(lastPagination).addClass("page_last");
    $(backPagination).addClass("page_back");
    $(firstPagination).addClass("page_first");
  };

  paginationEnd = function() {
    $(forwardPagination).removeClass("page_forward");
    $(lastPagination).removeClass("page_last");
    $(forwardPagination).addClass("page_forward_deadlink");
    $(lastPagination).addClass("page_last_deadlink");
    $(backPagination).removeClass("page_back_deadlink");
    $(firstPagination).removeClass("page_first_deadlink");
    $(backPagination).addClass("page_back");
    $(firstPagination).addClass("page_first");
  };

  $scope.selectVendor = function(vendor) {

	if ($scope.pageIndex > 1) {
		 $scope.pageIndex = 1;
	}

    if(vendor == "All") {
      $scope.vendor = undefined;
    } else {
      $scope.vendor = vendor;
      switch(vendor) {
      case "EGT":
        $scope.clearClassesSelected();
        $(content_menu_8).addClass("selected");
        break;
      case "Microgaming":
        $scope.clearClassesSelected();
        $(content_menu_9).addClass("selected");
        break;
      case "NetEnt":
        $scope.clearClassesSelected();
        $(content_menu_10).addClass("selected");
        break;
      default:
        break;
      }
    }

    $scope.refreshGames();
  };

  $scope.clearClassesSelected = function() {
    $(content_menu_1).removeClass("selected");
    $(content_menu_2).removeClass("selected");
    $(content_menu_3).removeClass("selected");
    $(content_menu_4).removeClass("selected");
    $(content_menu_5).removeClass("selected");
  };

  $scope.selectCategory = function(category) {
    $('.content_sub_menu li').slideDown();
    if(category == "FEATURED") {
      $scope.category = null;
    } else {
      $scope.category = category;
    };
    if ($scope.pageIndex > 1) {
    	$scope.pageIndex = 1;
    }

    switch(category) {
      case "FEATURED":
        $scope.clearClassesSelected();
        $(content_menu_1).addClass("selected");
        break;
      case "TABLEGAMES":
        $scope.clearClassesSelected();
        $(content_menu_2).addClass("selected");
        break;
      case "VIDEOSLOTS":
        $scope.clearClassesSelected();
        $(content_menu_3).addClass("selected");
        break;
      case "JACKPOTGAMES":
        $scope.clearClassesSelected();
        $(content_menu_4).addClass("selected");
        break;
      case "VIDEOPOKERS":
       $scope.clearClassesSelected();
        $(content_menu_5).addClass("selected");
        break;
      default:
        console.log('default');
        break;
    };
    $scope.refreshGames();
  };

  $scope.closeGameModal = function() {
    var iframe = document.getElementById('main_game_container');
    var modal = document.getElementById('background_container');

    iframe.src = "";
    modal.style="display: none !important;";
    $scope.showGameModal = false;
    $scope.getBalanceInit();
   };

   $scope.closeMobileGame = function() {
	   	CookieHelper.set('gurl', '');
   		CookieHelper.set('gname', '');
   		CookieHelper.set('lic', '');
   		CookieHelper.set('mode', '');
   		$scope.gameURL = '';
    	window.location.href = "casino.php";
	};



  $scope.displayGame = function(gameURL) {
    if($scope.numberOfColumns == 5) {
      var iframe = document.getElementById('main_game_container');
      var modal = document.getElementById('background_container');
      var wrapper = document.getElementById('wrapper');

      var shot = $scope.gameURL;
      var index = shot.indexOf("&funMode=False&_sid", shot.indexOf("&funMode=False&_sid") + 1);
      var resultURL;
      if (index < 0) {
          resultURL = shot;

      } else {
          resultURL = shot.substr(0, index);
      }

      // Set iframe dimensions and GAME URL
      iframe.width =  '100%';
	  iframe.height = (($(window).height()/100) * 65);
      iframe.src = resultURL;
      // Hide Casino games list page
      $scope.showGameModal = true;

      //Display Game container
      modal.style="display: block; background-image:url(" + $scope.selectedGame.backgroundImage + "); position: absolute; min-width: 100%; min-height: 100%; border: 0; margin: 0; padding: 0; z-index: 100000; left: 0; top: 0; background-repeat: no-repeat; background-position: center top; background-color: #000;";

    }
    else {
    	CookieHelper.set('backImage', $scope.selectedGame.backgroundImage); // Don't think we need this
        window.location.href = 'ingame.php';
    };
  };


  $scope.mobileGame = function() {
	  // declare styles for game
	  var modal = document.getElementById('background_container');
	  var gcont = document.getElementById('full_game_container');
	  var iframe = document.getElementById('main_game_container');

	  //Setup Game screen dimensions
	  var cwidth = $(window).width();  //80%
	  var cheight = $(window).height(); // 80%
	  var gwidth = ($(window).width() -2);  //90% Dont fucking ask why? Its a trick!
	  var gheight = (cheight - 80);

	  //Set the mobile game vars needed
	  $scope.name = CookieHelper.get('gname');
	  $scope.lic = CookieHelper.get('lic');
	  $scope.mode = CookieHelper.get('mode');

	  //Set the Game container style
	  gcont.style = 'align: center; margin: 0px 0px 0px 0px; border: #e6253a 1px solid; height:' + cheight + ';width: ' + cwidth;

	  // Set iframe game container dimensions and GAME URL
	  iframe.width =  gwidth;
	  iframe.height = gheight;
	  iframe.src = CookieHelper.get('gurl');

	  //display the game container
  	  modal.style = "display: block !important; position: absolute; min-width: 100%; min-height: 100%; border: 0; margin: 0; padding: 0; z-index: 100000; left: 0; top: 0; background-image:url(" + CookieHelper.get('backImage') + ");  background-repeat: no-repeat; background-position: center top; background-color: #000;";

  	  startTime();
  }

  $scope.hideGame = function() {
    var gameFrame = document.getElementById('game_wrapper');
  };

  $scope.setRealMoney = function(flag) {
    $scope.realMoney = flag;
  };

  $scope.gameClicked = function(game) {
    $scope.getLaunchURL(game.slug);
    $scope.selectedGame = game;

    //set vars for mobile game held in cookie
    CookieHelper.set('gname', game.name);
    CookieHelper.set('lic', game.license);
    CookieHelper.set('mode', $scope.realMoney);

    $scope.helpUrl = game.helpUrl;


    // Get Help content
    $http.get(game.helpUrl).then(function(response) {
    	$scope.helpInfo = response.data;
    });

  };


  // Open Game Info page
  $scope.openHelp = function() {
	   	function openLightBox(){
	   		var modal = $('.modal');
	   			$('.show-modal').on('click', function() {
	   			modal.fadeIn();
	   		});
	   		$('.close-modal').on('click', function() {
	   			modal.fadeOut();
	   			});
	   	}
	 openLightBox();
  	};


  $scope.nextPage = function() {
    if ($scope.pageIndex < $scope.totalPages) {
      $scope.pageIndex++;
      $scope.refreshGames();
    }
  };

  $scope.lastPage = function() {
	      $scope.pageIndex=$scope.totalPages;
	      $scope.refreshGames();
	  };

  $scope.previousPage = function() {
    if ($scope.pageIndex > 1) {
      $scope.pageIndex--;
      $scope.refreshGames();
    }
  };

  $scope.firstPage = function() {
	      $scope.pageIndex = 1;
	      $scope.refreshGames();
	  };




  $scope.popularitySort = function() {

    $(".content_filter_btn").css("background-color","#b41626"); //active red
    $(".content_alphabetical_btn").css("background-color","#151515"); //deactivated black

    $scope.sortSelected = $scope.sortingMethod.Popularity;
    $scope.popularityAsc = !$scope.popularityAsc;

    $scope.refreshGames();

  };

  $scope.alphabeticalSort = function() {

    $(".content_alphabetical_btn").css("background-color","#b41626"); //active red
    $(".content_filter_btn").css("background-color","#151515"); //deactivated black

    $scope.sortSelected = $scope.sortingMethod.Alphabetic;
    $scope.alphabetAsc = !$scope.alphabetAsc;

    if($scope.alphabetAsc == true) {
      $scope.alphabeticalButtonText = "A-Z";
      $(".content_alphabetical_btn").css("background-color","#b41626"); //active red
      $(".content_filter_btn").css("background-color","#151515"); //deactivated black
    } else {
      $scope.alphabeticalButtonText = "Z-A";
      $(".content_alphabetical_btn").css("background-color","b41626"); //active red
      $(".content_filter_btn").css("background-color","#151515"); //deactivated black
    }

    $scope.refreshGames();
  };

  // ADD to Favourites
  $scope.addFavourite = function(slug) {

	  var parameters =
	    {
			anonymousUserIdentity: CookieHelper.get('anonymousUserIdentity'),
	        type: 'game',
	        id: slug

	    }
	    // Add Game to favourites
	    SessionMgr.call("/casino#addToFavorites", parameters).then(
	      function (result) {
	          console.log(result);
	          $scope.$apply();
	      }
	      , function (err) {
	          window.alert(err.desc);
	      }


	   );

	  }

  function twoColumnsSort() {
    var x = 0;
    var multiplier = 0;

    for(var i in $scope.games) {
      x++;

      $scope.games[i].count = x;

      if(!$scope.games[i].thumbnail) {$scope.games[i].thumbnail = "http://82.221.98.14/img/notfound.jpg";}

      if(x == 1+2*multiplier) {$scope.column1games.push($scope.games[i])};
      if(x == 2+2*multiplier) {
        $scope.column2games.push($scope.games[i]);
        multiplier++;
      };

    };

    $scope.$apply();

  };

  function threeColumnsSort() {
    var x = 0;
    var multiplier = 0;

    for(var i in $scope.games) {
      x++;

      $scope.games[i].count = x;

      if(x == 1+3*multiplier) {$scope.column1games.push($scope.games[i])};
      if(x == 2+3*multiplier) {$scope.column2games.push($scope.games[i])};
      if(x == 3+3*multiplier) {
        $scope.column3games.push($scope.games[i]);
        multiplier++;
      };

    };

    $scope.$apply();

  };

  function fourColumnsSort() {
    var x = 0;
    var multiplier = 0;

    for(var i in $scope.games) {
      x++;

      $scope.games[i].count = x;

      if(x == 1+4*multiplier) {$scope.column1games.push($scope.games[i])};
      if(x == 2+4*multiplier) {$scope.column2games.push($scope.games[i])};
      if(x == 3+4*multiplier) {$scope.column3games.push($scope.games[i])};
      if(x == 4+4*multiplier) {
        $scope.column4games.push($scope.games[i]);
        multiplier++;
      };

    };

    $scope.$apply();

  };

  function fiveColumnsSort() {
    var x = 0;
    var multiplier = 0;

    for(var i in $scope.games) {
      x++;

      $scope.games[i].count = x;

      if(x == 1+5*multiplier) {$scope.column1games.push($scope.games[i])};
      if(x == 2+5*multiplier) {$scope.column2games.push($scope.games[i])};
      if(x == 3+5*multiplier) {$scope.column3games.push($scope.games[i])};
      if(x == 4+5*multiplier) {$scope.column4games.push($scope.games[i])};
      if(x == 5+5*multiplier) {
        $scope.column5games.push($scope.games[i]);
        multiplier++;
      };

    };

    $scope.$apply();

  };

  $scope.refreshGames = function() {

    $scope.games = [];
    $scope.column1games = [];
    $scope.column2games = [];
    $scope.column3games = [];
    $scope.column4games = [];
    $scope.column5games = [];

    var params = {};

    params.sortFields = [];
    params.filterByName = [];
    params.filterByVendor = [];
    params.filterByPlatform = [];
    params.filterByCategory = [];

    switch ($scope.sortSelected) {
      case $scope.sortingMethod.Alphabetic: {
        if($scope.alphabetAsc) {
          params.sortFields.push({ field: 4, order: 'ASC' });
        }
        else {
         params.sortFields.push({ field: 4, order: 'DESC' });
        };
        break;
      };
      case $scope.sortingMethod.Popularity: { //popularity sort works only one way at present
        if($scope.popularityAsc) {
          params.sortFields.push({ field: 1024, order: 'DESC' });
        }
        break;
      };
      default:
        break;
    };

    if($scope.vendor) {
      params.filterByVendor.push($scope.vendor);
    };

    if($scope.platform) {
       params.filterByPlatform.push($scope.platform);
    };

    if($scope.category) {
       params.filterByCategory.push($scope.category);
    };

    if($scope.gameName != "SEARCH") {
      params.filterByName.push($scope.gameName);
      $scope.gameName = "SEARCH";
    };

    if ($scope.pageIndex) {
      params["pageIndex"] = $scope.pageIndex;
    };

    if ($scope.pageSize) {
      params["pageSize"] = $scope.pageSize;
    };

    params["expectedFields"] = FieldsUtility.getGameFields();
    params["expectedFormat"] = FieldsUtility.getExpedtedFormat();


    var JSONParams = JSON.stringify(params);

    SessionMgr.call("/casino#getGames", params).then(
      function (result) {
        $scope.pageIndex = result.currentPageIndex;
        $scope.totalPages = result.totalPageCount;
        $scope.gamesData = result.games;

        if($scope.totalPages == undefined || $scope.totalPages == 0) {
          this.paginationNone();
        };

        if($scope.pageIndex == 1) {
          if($scope.totalPages == 0 || $scope.totalPages == 1) {
            this.paginationNone();
          } else {
          this.paginationInitial();
          }
        };

        if($scope.pageIndex > 1 && $scope.pageIndex < $scope.totalPages) {
          this.paginationIntermidiate();
        };

        if($scope.pageIndex == $scope.totalPages && $scope.pageIndex != 1) {
          this.paginationEnd();
        };

        Object.keys($scope.gamesData).forEach(function (key) {
          var game = $scope.gamesData[key]; //game.url or game.slug for instance
          game["jackpot"] = $scope.jackpots[game.slug];
          if(game["jackpot"]) game["jackpot"] = "$" + game["jackpot"];
          $scope.games.push(game);
        });

         switch($scope.numberOfColumns) {
          case 2: {
            twoColumnsSort();
            break;
          };
          case 3: {
            threeColumnsSort();
            break;
          };
          case 4: {
            fourColumnsSort();
            break;
          };
          case 5: {
            fiveColumnsSort();
            break;
          };
          default:
            break;
        }

      }
      , function (err) {
      }
    );

  };

  $scope.getJackpots = function() {

    var params = {};

    params.filterByPlatform = [];

    params["expectedFields"] = FieldsUtility.getJackpotFields();

    if($scope.platform) {
       params.filterByPlatform.push($scope.platform);
    };

    SessionMgr.call("/casino#getJackpots", params).then(
      function (result) {
        for (var i = 0; i < result.jackpots.length; i++) {
          var jackpot = result.jackpots[i];
          $scope.jackpots[jackpot.game.slug] = jackpot.amount.USD;
        };
      }
      , function (err) {
      }
    );

  };

  // DAMN... comma in balance is NOT a simple formatting exercise.
  // This is the function to convert number to currency format on game close
  $scope.currencyFormatBalance = function(number)
  {
     var decimalplaces = 2;
     var decimalcharacter = ".";
     var thousandseparater = ",";
     number = parseFloat(number);
     var formatted = new String(number.toFixed(decimalplaces));
     if( decimalcharacter.length && decimalcharacter != "." ) { formatted = formatted.replace(/\./,decimalcharacter); }
     var integer = "";
     var fraction = "";
     var strnumber = new String(formatted);
     var dotpos = decimalcharacter.length ? strnumber.indexOf(decimalcharacter) : -1;
     if( dotpos > -1 )
     {
        if( dotpos ) { integer = strnumber.substr(0,dotpos); }
        fraction = strnumber.substr(dotpos+1);
     }
     else { integer = strnumber; }
     if( integer ) { integer = String(Math.abs(integer)); }
     while( fraction.length < decimalplaces ) { fraction += "0"; }
     temparray = new Array();
     while( integer.length > 3 )
     {
        temparray.unshift(integer.substr(-3));
        integer = integer.substr(0,integer.length-3);
     }
     temparray.unshift(integer);
     integer = temparray.join(thousandseparater);
     $scope.balance = integer + decimalcharacter + fraction;
  }


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
        if (result.accounts.length > 1){
        	$scope.bonus = result.accounts[1].amount;
        } else {
        	$scope.bonus = 0;
        }


        //Convert balance to currencyFormat
        $scope.currencyFormatBalance($scope.balance);
        //Alter Balances
        $( document ).ready(function() {
            if(!$scope.mobileResponsiveWidth) {
              $('a#mainText').text("MAIN: " + $scope.currency + " " + $scope.balance);
              $('a#bonusText').text("BONUS: " + $scope.currency + " " + parseFloat(Math.round($scope.bonus * 100) / 100).toFixed(2));
            } else {
              $('a#mainText').text("MAIN: " + $scope.currency + " " + $scope.balance);
              $('a#mainText').append('<br/>');
              $('a#bonusText').text("BONUS: " + $scope.currency + " "  + $scope.bonus);
            };

          });

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
              		infiniteLoop: false, // NEVER TURN THIS TO TRUE NOT UNLESS YOU WANT A MESS
              		hideControlOnEnd: true,
              		speed: 3000,
              		easing: null,
              		slideMargin: 0,
              		startSlide: 0,
              		randomStart: false,
              		captions: false,
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
                  console.log('page does not implement the banner');
              }

            }

          });
        $scope.$apply();
      }
      , function (err) {
      }
    );

    // then start monitor the balance
    SessionMgr.call("/user/account#watchBalance", parameters).then(
      function (result) {
      }
      , function (err) {
      }
    );

    // this callback is fired when balance is updated
    function onBalanceChanged(data) {
      console.log('Event [/account/balanceChanged] is fired with data = ' + JSON.stringify(data, null, 4));
    }
  };


  function directBasedOnStatus(data) {
    switch(data.status) {
      case 0:
        CookieHelper.set('gurl', '');
        $scope.getBalanceInit();
        $scope.gameURL = data.url;
        CookieHelper.set('gurl', data.url);
        startTime();
        $scope.displayGame(data.url, "cdn.everymatrix.com/_casino/C/C382ECD29CAFBD9A973163BE4FA77FDB.jpg");
        break;
      case 1:
        console.log("1 : User is only allowed to withdraw money");
        window.alert("User is only allowed to withdraw money");
        break;
      case 2:
        console.log("2 : User's profile is incomplete, should redirect user to profile page to complete the profile");
        window.alert("User profile is incomplete, please update on the profile page");
        break;
      case 3:
        console.log("3 : The country (either IP or profile country) is blocked for this game");
        window.alert("The country (either IP or profile country) is blocked for this game");
        break;
      case 4:
        console.log("4 : The game is not available for the current user");
        window.alert("The game is not available for the current user");
        break;
      case 5:
        console.log("5: The email address is not verified, end-user has to click the link in activation email which will cause /user#activate to be called");
        window.alert("The email address is not verified");
        break;
      default:
        break;
    };
  };

  $scope.getLaunchURL = function(slug) {

    var params = {};

    if(slug) {
       params["slug"] = slug;
    };

    if(true) {
      params["realMoney"] = $scope.realMoney;
    };

    if (!SessionMgr.isLoggedIn()) {
        alert('Please login to play Casino games');
        return;
    }

    SessionMgr.call("/casino#getLaunchUrl", params).then(
      function (result) {

          directBasedOnStatus(result);
      }
      , function (err) {
      }
    );

  };


  $scope.submitForm = $scope.refreshGames;

  $scope.init = function() {

    setTimeout(function() { //wait for session to be established before calls made
     $scope.showGameModal = false;
     $scope.testPlatform();
    }, 3000);

  };

});
