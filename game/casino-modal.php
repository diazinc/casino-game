<!DOCTYPE html>
<html>
    <head>
    	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
	    <script src="../js/jquery-2.1.0.min.js"></script>
    	<script src="../js/angular-1.4.8.min.js"></script>
    	<script src="../js/angular-sanitize.1.4.8.min.js"></script><link rel="stylesheet" href="colorbox.css">
	    <script src="http://www.jacklmoore.com/colorbox/jquery.colorbox.js"></script>
	    <script src="js/gameFields.js"></script>
	    <script src="js/utility.js"></script>
	    <script src="js/variables.js"></script>
	    <script src="js/session-mgr.js"></script>
	    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
	    <script src="js/fortuna-rpc-app.js" type="text/javascript"></script>
	    <script src="js/casino-controller.js" type="text/javascript"></script>
	    <script src="js/login-controller.js" type="text/javascript"></script>
	    <script src="js/angular-translate.min.js"></script>
	    <script src="js/translations.js"></script>

		<!-- JQUERY SLIDER -->
	    <!-- jQuery library (served from Google) -->
		<script src="jquery-1.8.2.min.js"></script>
		<!-- bxSlider Javascript file -->
		<script src="js/jquery.bxslider/jquery.bxslider.min.js"></script>
		<!-- bxSlider CSS file -->
		<link href="js/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />

    	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
	    <link rel="stylesheet" href="boilerplate.css">
	    <link rel="stylesheet" href="shangrila.css">
	    <link rel="stylesheet" href="shangrila_responsive.css">
	    <link rel="stylesheet" href="casino.css">
	    <link rel="stylesheet" href="casino_responsive.css">
	    <link rel="stylesheet" href="ingame.css">
	    <meta charset="utf-8">
	    <meta name="viewport" content="initial-scale = 1.0">
	    <script type="text/javascript" src="js/modernizr-1.6.min.js"></script>

    <title>Shangri La Casino</title>
    </head>
    <body ng-app="fortuna-rpc" ng-controller="casino-controller" ng-init="init()" ng-cloak>
    <!-- This code must be installed within the body tags -->
    <script type="text/javascript" src="js/lhn.js"></script>

  	<?php include("casino_2_columns.php"); ?>
  	<?php include("casino_3_columns.php"); ?>
  	<?php include("casino_4_columns.php"); ?>
  	<?php include("casino_5_columns.php"); ?>
    <a href="http://www.livehelpnow.net/products/live-chat-system" target="_blank" style="font-size:10px;" id="lhnHelp"></a>
    <script src="//www.livehelpnow.net/lhn/widgets/chatbutton/lhnchatbutton-current.min.js" type="text/javascript" id="lhnscript"></script>

  <div id="primary_wrapper" class="clearfix">
    <div id="primary_container" class="clearfix">
        <div id="header_bg" class="clearfix">
            <div id="header_top" class="clearfix">
                <div id="logo" class="clearfix" onclick="window.location.href='umbrella.php'">
                  <h1>SHANGRI LA</h1>
                    <h4>{{ 'E40' | translate }}</h4>
                </div>
                <div id="user_panel" class="clearfix" ng-controller="login-controller" ng-init="checkIfLoggedIn()">
                    <ng-include src="template"></ng-include>
                </div>
          </div>
                </div>
            </div>
        </div>
        <div id="main_menu_bg" class="clearfix">
            <div id="menu" class="clearfix">
                 <div id="main_menu_container" class="clearfix">
                    <ul id="main_menu_list">
                        <li id="main_menu_1"><a href="umbrella.php">{{ 'E3' | translate}}</a></li>
                        <li id="main_menu_2" class="selected"><a href="casino.php"><img class="main_menu_icon" src="img/casino/menu_ico_solid.png" width="31" height="20" alt=""/><span>{{ 'E4' | translate }}</span></a>
                            <ul id="home_menu" class="noJS">
                                <li><a href="umbrella.php">{{ 'E3' | translate}}</a></li>
                                <li><a href="livecasino.php">{{ 'E5' | translate}}</a></li>
                                <li><a href="sportsbook.php" class="selected">{{ 'E6' | translate}}</a></li>
                            </ul>
                        </li>
                        <li id="main_menu_3"><a href="livecasino.php">{{ 'E5' | translate}}</a></li>
                        <li id="main_menu_4"><a href="sportsbook.php">{{ 'E6' | translate}}</a></li>
                        <li id="main_menu_6"><a href="promos_list.php"><img src="img/casino/menu_ico_promotions.png" width="23" height="23" alt=""/>{{ 'E8' | translate}}</a></li>
                        <li id="main_menu_7"><a href="help.php?p=132"><img src="img/casino/menu_ico_help.png" width="17" height="25" alt=""/>{{ 'E9' | translate}}</a></li>
                    </ul>
                </div>
          </div>
        </div>

    <div id="wrapper" class="clearfix" ng-show="showGameModal != true">

       <!--Slider-->
            <div id="slider_wrapper" ng-controller="login-controller" ng-init="checkWhichBanner()">
            <ng-include src="banner"></ng-include>
            </div>

            <!--Content menu-->

            <div id="content_menu_bg" class="clearfix">
                <div id="content_menu_container" class="clearfix">
                    <div id="content_menu" class="clearfix">
                        <ul id="content_menu_list">
                            <li id="content_menu_1" class="selected"><a id="resetmenu" value="FEATURED" ng-click="selectCategory('FEATURED')"><div class="menu_icon content_menu_icon"></div>{{ 'E10' | translate }}<span class="menu_reveal_1000"> {{ 'E235' | translate }}</span></a>
                                <ul class="content_sub_menu noJS">
                                    <li><a value="TABLEGAMES" ng-click="selectCategory('TABLEGAMES')">{{ 'E59' | translate}}</a></li>
                                    <li><a value="VIDEOSLOTS" ng-click="selectCategory('VIDEOSLOTS')">{{ 'E60' | translate}}</a></li>
                                    <li><a value="JACKPOTGAMES" ng-click="selectCategory('JACKPOTGAMES')">{{ 'E61' | translate}}</a></li>
                                    <li><a value="VIDEOPOKERS" ng-click="selectCategory('VIDEOPOKERS')">{{ 'E62' | translate}}</a></li>
                                </ul>
                            </li>
                            <li id="content_menu_2"><a value="TABLEGAMES" ng-click="selectCategory('TABLEGAMES')">{{ 'E59' | translate}}</a></li>
                            <li id="content_menu_3"><a value="VIDEOSLOTS" ng-click="selectCategory('VIDEOSLOTS')">{{ 'E60' | translate}}</a></li>
                            <li id="content_menu_4"><a value="JACKPOTGAMES" ng-click="selectCategory('JACKPOTGAMES')">{{ 'E61' | translate}}</a></li>
                            <li id="content_menu_5"><a value="VIDEOPOKERS" ng-click="selectCategory('VIDEOPOKERS')">{{ 'E62' | translate}}</a></li>

                            <li id="content_menu_7"><a value="All" ng-click="selectVendor('All')"><div class="menu_icon"></div>{{ 'E11' | translate}}</a>
                                <ul ng-model="vendor" class="noJS">
                                    <li id="content_menu_8" class="vendor_menu_list"><a value="EGT" ng-click="selectVendor('EGT')">EGT</a></li>
                                    <li id="content_menu_9" class="vendor_menu_list"><a value="Microgaming" ng-click="selectVendor('Microgaming')">MICROGAMING</a></li>
                                    <li id="content_menu_10" class="vendor_menu_list"><a value="NetEnt" ng-click="selectVendor('NetEnt')">NETENT</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="content_search_container">
                        <div class="content_search_inner_container">
                            <div class="content_search_buttons">
                                <a href="#" class="content_filter_btn" ng-click="popularitySort()"><img src="img/casino/search_filter_ico.png" width="21" height="17" alt="Search Filter"/></a>
                                <a href="#" class="content_alphabetical_btn" ng-click="alphabeticalSort()" ng-bind="alphabeticalButtonText"></a>
                            </div>
                            <div class="content_search_box_container">
                                <form ng-submit="refresh()" id="searchNode">
                                    <div class="content_search_submit_btn" ng-click="submitForm()"></div>
                                    <input name="Search" type="text" ng-model="gameName" class="content_search_field" onClick="if(this.value== 'SEARCH') {this.value=''}" onblur="if(this.value == '') {this.value='SEARCH'}">
                                </form>
                            </div>
                        </div>
                    </div>
                  </div>

        <!--Content Lists-->
                <div id="content_wrapper">
                    <div id="content" class="clearfix">

                    <form id="gamesForm">
                          <ng-include src="gamesTemplate"></ng-include>
                    </form>
                        <div class="pagination">
                        	<a ng-click="firstPage()" id="firstPagination"></a>
                            <a ng-click="previousPage()" id="backPagination"></a>
                            <span class="pagination_text" ng-bind-template="{{ 'E68' | translate }} {{pageIndex}} {{ 'E68a' |translate}} {{totalPages}}"></span>
                            <a ng-click="nextPage()" id="forwardPagination"></a>
                            <a ng-click="lastPage()" id="lastPagination"></a>
                    </div>
                </div>
            </div> <!--End content container -->
        </div> <!--End wrapper -->

        <!--3 Step Singup CTA-->
        <div id="signup_container" class="clearfix">
            <div id="signup_cta"><a href="signup.php">
				<h3>{{ 'E21' | translate }}</h3>
                <div id="signup_cta_inline" class="clearfix">
                    <div id="signup_cta_img_1"></div>
                    <p id="signup_cta_p_1">{{ 'E22' | translate }}<br><span class="green_text_2">{{ 'E230' | translate }}</span></p>
                    <div class="signup_cta_chevron"></div>
                    <div id="signup_cta_img_2"></div>
                    <p id="signup_cta_p_2">{{ 'E23' | translate }}<br><span class="green_text_2">{{ 'E231' | translate }}</span></p>
                    <div class="signup_cta_chevron"></div>
                    <p id="signup_cta_p_3">{{ 'E24' | translate }}<br><span class="green_text_2">{{ 'E232' | translate }}</span></p>
                    <div id="signup_cta_img_3"></div>
                </div>
              </a>
              </div>
        </div>

  </div>
  </div>
   <div id="background_container" ng-show="showGameModal == true">
        <div id="game_overlay_close_btn" ng-controller="login-controller" ng-click="closeGameModal()"><a href="">Close Game</a></div>
        <div id="game_overlay_container">
            </div -->
            <div id="full_game_container">

                <div id="game_overlay_top_row">
                    <h2 style="padding-left:70px;">{{selectedGame.name | uppercase}} <span id="timer"> </span></h2>
                </div>
                <iframe id="main_game_container" frameborder="0" ></iframe>
                 <div id="game_overlay_bottom_row">
                    	<a id="quick_dep_btn" href="account_0_1.php" target="_blank"><span>{{ 'E231' | translate}}</span></a>
                    <div id="hor_spacer"></div>
                    <div id="game_message" ng-if="realMoney == true">{{ 'E305' | translate }} {{selectedGame.license | uppercase}}.</div>
	                <div id="game_message" ng-if="realMoney != true">{{ 'E305' | translate }} {{selectedGame.license | uppercase}}.</div>
                </div>
            </div>
            <div id="game_overlay_right_col">
                <a class="game_overlay_btn" id="btn_5" href="javascript:void(0)" onclick="javascript:toggleFullScreen()">BUTTON_5</a>
                <a class="game_overlay_btn show-modal open-modal" id="btn_8" href="#" ng-click="openHelp()">BUTTON_8</a>
                  <div class="modal">
                    <a class="close-modal" href="#">X</a>
                    <div class='modal-content' ng-bind="helpUrl">
    			  </div>
            </div>
            </div>
            </div>
        </div>
        <script>
// mozfullscreenerror event handler
function errorHandler() {
   alert('mozfullscreenerror');
}
document.documentElement.addEventListener('mozfullscreenerror', errorHandler, false);

// toggle full screen
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
</script>

<script>
(function( window, factory ) {

  ResponsiveIframe = window.ResponsiveIframe || {};
  if ( 'undefined' === typeof ResponsiveIframe ) return console.log('Unmet Dependencies');
  factory( ResponsiveIframe );

})( this, function( utils ) {

  window.ResponsiveIframe = function(
    responsiveIframe,
    excludedIframe
  ) {
    responsiveIframe = document.querySelectorAll(responsiveIframe);
    if (! responsiveIframe ) return;
    for (i = 0; i < responsiveIframe.length; ++i) {
      if ( typeof(excludedIframe) !== 'undefined') {
        if (responsiveIframe[i] === document.querySelector(excludedIframe) ) return;
      }

      var iframeHeight = responsiveIframe[i].offsetHeight,
          iframeWidth = responsiveIframe[i].offsetWidth,
          wrapper = document.createElement("div"),
          divAdded = false;
      if ( iframeHeight === iframeWidth ) {
      } else if ( iframeHeight > iframeWidth ) {
        wrapper.style.paddingTop = (iframeWidth / iframeHeight * 100) + '%';
      } else {
        wrapper.style.paddingTop = (iframeHeight / iframeWidth * 100) + '%';
      }
      wrapper.className += 'js-responsive-iframe';
      responsiveIframe[i].removeAttribute('height');
      responsiveIframe[i].removeAttribute('width');
      responsiveIframe[i].removeAttribute('style');
      if ( ! divAdded ) {
        responsiveIframe[i].parentNode.insertBefore(wrapper, responsiveIframe[i]);
        divAdded = true;
      }
      responsiveIframe[i].parentNode.removeChild(responsiveIframe[i]);
      wrapper.appendChild(responsiveIframe[i]);
    }

    return this;
  };

});
ResponsiveIframe('iframe', '#do-not-select');
</script>
  <script type="text/javascript" src="js/scripts.js"></script>
  <script type="text/javascript">
        window.onload=function() {
        };
  </script>
  <?php include("loggedin_content.php"); ?>
  <?php include("notloggedin_content.php"); ?>
  <?php include("loggedin_banner.php"); ?>
  <?php include("notloggedin_banner.php"); ?>
  <?php include("footer.php"); ?>

  </body>
</html>
