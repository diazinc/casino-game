<!DOCTYPE html>
<html>
    <head>

    <script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    <link rel="stylesheet" href="colorbox.css">
    <script src="js/gameFields.js"></script>
    <script src="js/utility.js"></script>
    <script src="js/variables.js"></script>
    <script src="js/session-mgr.js"></script>
    <script src="js/autobahn.min.jgz" type="text/javascript"></script>
    <script src="js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="js/casino-controller.js" type="text/javascript"></script>
    <script src="js/login-controller.js" type="text/javascript"></script>

	<!-- JQUERY SLIDER -->
    <!-- jQuery library (served from Google) -->
		<script src="jquery-1.8.2.min.js"></script>
		<!-- bxSlider Javascript file -->
		<script src="js/jquery.bxslider/jquery.bxslider.min.js"></script>
		<!-- bxSlider CSS file -->
		<link href="js/jquery.bxslider/jquery.bxslider_vk.css" rel="stylesheet" />


    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
    <link rel="stylesheet" href="boilerplate.css">
    <link rel="stylesheet" href="shangrila.css">
    <link rel="stylesheet" href="shangrila_responsive.css">
    <link rel="stylesheet" href="casino.css">
    <link rel="stylesheet" href="casino_responsive.css">
    <link rel="stylesheet" href="ingame.css">
    <link href="css_vk/slider_vk.css" rel="stylesheet" type="text/css">
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale = 1.0">
    <script type="text/javascript" src="js/modernizr-1.6.min.js"></script>

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-controller="casino-controller" ng-cloak>
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
                    <h4>ONLINE CASINO &amp; SPORTS BOOK</h4>
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
                        <li id="main_menu_1"><a href="umbrella.php">HOME</a></li>
                        <li id="main_menu_2" class="selected"><a href="casino.php"><img class="main_menu_icon" src="img/casino/menu_ico_solid.png" width="31" height="20" alt=""/><span>CASINO</span></a>
                            <ul id="home_menu" class="noJS">
                                <li><a href="umbrella.php">HOME</a></li>
                                <li><a href="livecasino.php">LIVE CASINO</a></li>
                                <li><a href="sportsbook.php" class="selected">SPORTS BOOK</a></li>
                            </ul>
                        </li>
                        <li id="main_menu_3"><a href="livecasino.php">LIVE CASINO</a></li>
                        <li id="main_menu_4"><a href="sportsbook.php">SPORTS BOOK</a></li>
                        <li id="main_menu_6"><a href="promos_list.php"><img src="img/casino/menu_ico_promotions.png" width="23" height="23" alt=""/>PROMOTIONS</a></li>
                        <li id="main_menu_7"><a href="help.php?p=6"><img src="img/casino/menu_ico_help.png" width="17" height="25" alt=""/>HELP</a></li>
                    </ul>
                </div>
          </div>
        </div>
        
     <div id="wrapper" class="clearfix">
            <!--Slider JS Starts-->
             <script>
        jQuery(document).ready(function ($) {
            
            var jssor_1_SlideoTransitions = [
              [{b:5500,d:3000,o:-1,r:240,e:{r:2}}],
              [{b:-1,d:1,o:-1,c:{x:51.0,t:-51.0}},{b:0,d:1000,o:1,c:{x:-51.0,t:51.0},e:{o:7,c:{x:7,t:7}}}],
              [{b:-1,d:1,o:-1,sX:9,sY:9},{b:1000,d:1000,o:1,sX:-9,sY:-9,e:{sX:2,sY:2}}],
              [{b:-1,d:1,o:-1,r:-180,sX:9,sY:9},{b:2000,d:1000,o:1,r:180,sX:-9,sY:-9,e:{r:2,sX:2,sY:2}}],
              [{b:-1,d:1,o:-1},{b:3000,d:2000,y:180,o:1,e:{y:16}}],
              [{b:-1,d:1,o:-1,r:-150},{b:7500,d:1600,o:1,r:150,e:{r:3}}],
              [{b:10000,d:2000,x:-379,e:{x:7}}],
              [{b:10000,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:9100,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:10000,d:1600,x:-200,o:-1,e:{x:16}}]
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
    </script>
    <!--Slider JS ENDS-->
    <!--Jssor Slider STARTS -->
    <div id="jssor_1" class="slider_container_vk">
        <!-- Loading Screen -->
        <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
            <div style="position:absolute;display:block;background:url('img/loading_vk.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
        </div>
        <div data-u="slides" class="slider_vk">
            <ng-include src="banner"></ng-include> 
        
        </div>
        <!-- Bullet Navigator -->
        <div data-u="navigator" class="jssorb05" style="bottom:16px;right:16px;" data-autocenter="1">
            <!-- bullet navigator item prototype -->
            <div data-u="prototype" style="width:16px;height:16px;"></div>
        </div>
        <!-- Arrow Navigator -->
        <span data-u="arrowleft" class="jssora22l" style="top:0px;left:12px;width:40px;height:58px;" data-autocenter="2"></span>
        <span data-u="arrowright" class="jssora22r" style="top:0px;right:12px;width:40px;height:58px;" data-autocenter="2"></span>
    </div>
            <!--Content menu-->
              
            <div id="content_menu_bg" class="clearfix">
                <div id="content_menu_container" class="clearfix">
                    <div id="content_menu" class="clearfix">
                        <ul id="content_menu_list">
                            <li id="content_menu_1" class="selected"><a id="resetmenu" value="FEATURED" ng-click="selectCategory('FEATURED')"><div class="menu_icon content_menu_icon"></div>FEATURED<span class="menu_reveal_1000"> SLOTS</span></a>
                                <ul class="content_sub_menu noJS">
                                    <li><a value="TABLEGAMES" ng-click="selectCategory('TABLEGAMES')">TABLE GAMES</a></li>
                                    <li><a value="VIDEOSLOTS" ng-click="selectCategory('VIDEOSLOTS')">CLASSIC SLOTS</a></li>
                                    <li><a value="JACKPOTGAMES" ng-click="selectCategory('JACKPOTGAMES')">JACKPOT GAMES</a></li>
                                    <li><a value="VIDEOPOKERS" ng-click="selectCategory('VIDEOPOKERS')">VIDEO POKER</a></li>
                                </ul>
                            </li>
                            <li id="content_menu_2"><a value="TABLEGAMES" ng-click="selectCategory('TABLEGAMES')">TABLE GAMES</a></li> 
                            <li id="content_menu_3"><a value="VIDEOSLOTS" ng-click="selectCategory('VIDEOSLOTS')">CLASSIC SLOTS</a></li>
                            <li id="content_menu_4"><a value="JACKPOTGAMES" ng-click="selectCategory('JACKPOTGAMES')">JACKPOT GAMES</a></li>
                            <li id="content_menu_5"><a value="VIDEOPOKERS" ng-click="selectCategory('VIDEOPOKERS')">VIDEO POKER</a></li>
                            <li id="content_menu_7"><a value="All" ng-click="selectVendor('All')"><div class="menu_icon"></div>ALL BRANDS</a>
                                <ul ng-model="vendor" class="noJS">     
                                    <li><a value="EGT" ng-click="selectVendor('EGT')">EGT</a></li>
                                    <li><a value="Microgaming" ng-click="selectVendor('Microgaming')">MICROGAMING</a></li>
                                    <li><a value="NetEnt" ng-click="selectVendor('NetEnt')">NETENT</a></li>
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
                            <a ng-click="previousPage()" id="backPagination"></a>
                            <span class="pagination_text">Page {{pageIndex}} of {{totalPages}}</span>
                            <a ng-click="nextPage()" id="forwardPagination"></a>
                    </div>
                </div>
            </div> <!--End content container -->
        </div> <!--End wrapper -->
      
        <!--3 Step Singup CTA-->
        <div id="signup_container" class="clearfix">
            <div id="signup_cta"><a href="signup.php">
        <h3>SIGN UP IN 3 EASY STEPS!</h3>
                <div id="signup_cta_inline" class="clearfix">
                    <div id="signup_cta_img_1"></div>
                    <p id="signup_cta_p_1">CREATE<br><span class="green_text_2">NEW ACCOUNT</span></p>
                    <div class="signup_cta_chevron"></div>
                    <div id="signup_cta_img_2"></div>
                    <p id="signup_cta_p_2">MAKE A<br><span class="green_text_2">DEPOSIT</span></p>
                    <div class="signup_cta_chevron"></div>
                    <div id="signup_cta_img_3"></div>
                    <p id="signup_cta_p_3">START<br><span class="green_text_2">PLAYING!</span></p>
                </div>
                </a>
            </div>                  
        </div>
   
  </div>
  </div>
   <div id="background_container" style="display:none;">
        <div id="game_overlay_container">
            <div id="full_game_container">
            
                <div id="game_overlay_top_row">
                    <h2 style="padding-left:60px;">{{selectedGame.name | uppercase}} <span id="timer"> </span></h2>
                </div><!--
                --><iframe id="main_game_container" frameborder=0 vspace=0 hspace=0 marginwidth=0 marginheight=0 width="1024" height="768"></iframe><!--
                 -->
                 <div id="game_overlay_bottom_row">
                    <div  id="player_balance"><span ng-controller="login-controller" ng-bind-template="MAIN: {{casinocurrency}} {{casinobalance}}"></span></div>
                    <div id="hor_spacer"></div>
                    <div id="game_message" ng-if="realMoney == true">You are now playing in a Real Mode game under the jurisdiction of {{selectedGame.license | uppercase}}.</div>
                    <div id="game_message" ng-if="realMoney != true">You are now playing in a Fun Mode game under the jurisdiction of {{selectedGame.license | uppercase}}.</div>
                    <div id="hor_spacer"></div>
                </div>
            </div>
                <div id="game_overlay_close_btn"  ng-controller="login-controller" ng-click="closeGameModal()"><a href="" ng-click="getBalanceInit()">Close Game</a></div>                  
            </div>
        </div>
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