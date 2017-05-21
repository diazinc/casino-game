<?php require_once( 'admin/cms.php' ); ?>
<cms:template title='Live Casino'>
<!-- LOGGED IN BANNERS -->
<cms:editable name='LoggedIn_image1' label='LoggedIn Image 1' desc='Upload image here' type="image" />
<cms:editable name='loginBannerLink1' label='Link for Banner1' desc='URL when banner clicked' type="text" />

<cms:editable name='LoggedIn_image2' label='LoggedIn Image 2' desc='Upload image here' type="image" />
<cms:editable name='loginBannerLink2' label='Link for Banner2' desc='URL when banner clicked' type="text" />

<cms:editable name='LoggedIn_image3' label='LoggedIn Image 3' desc='Upload image here' type="image" />
<cms:editable name='loginBannerLink3' label='Link for Banner3' desc='URL when banner clicked' type="text" />



<!-- LOGGED OUT BANNERS -->
<cms:editable name='LoggedOut_image1' label='LoggedOut Image 1' desc='Upload image here' type="image" />
<cms:editable name='logoutBannerLink1' label='Link for Banner1' desc='URL when banner clicked' type="text" />

<cms:editable name='LoggedOut_image2' label='LoggedOut Image 2' desc='Upload image here' type="image" />
<cms:editable name='logoutBannerLink2' label='Link for Banner2' desc='URL when banner clicked' type="text" />

<cms:editable name='LoggedOut_image3' label='LoggedOut Image 3' desc='Upload image here' type="image" />
<cms:editable name='logoutBannerLink3' label='Link for Banner3' desc='URL when banner clicked' type="text" />

</cms:template>

<!DOCTYPE html>
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
        <script src="../js/jquery-2.1.0.min.js"></script>
    	<script src="../js/angular-1.4.8.min.js"></script>
    	<script src="../js/angular-sanitize.1.4.8.min.js"></script>
        <link rel="stylesheet" href="colorbox.css">
        
        <!-- for ios 7 style, multi-resolution icon of 152x152 -->
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-barstyle" content="black-translucent">
		<link rel="apple-touch-icon" href="icon-152.png">
		<!-- for Chrome on Android, multi-resolution icon of 196x196 -->
		<meta name="mobile-web-app-capable" content="yes">
		<link rel="shortcut icon" sizes="196x196" href="icon-196.png">
		<meta name="viewport" content="width=devicewidth, minimal-ui">
		
        <script src="js/gameFields.js"></script>
        <script src="js/utility.js"></script>
        <script src="js/variables.js"></script>
        <script src="js/session-mgr.js"></script>
        <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
        <script src="js/fortuna-rpc-app.js" type="text/javascript"></script>
        <script src="js/livecasino-controller.js" type="text/javascript"></script>
        <script src="js/login-controller.js" type="text/javascript"></script>
        <script src="js/angular-translate.min.js"></script>
    	<script src="js/translations.js"></script>

    	<!-- JQUERY SLIDER -->
        <!-- jQuery library (served from Google) -->
    	<script src="js/jquery-1.8.2.min.js"></script>
    	<!-- bxSlider Javascript file -->
    	<script src="js/jquery.bxslider/jquery.bxslider.min.js"></script>
    	<!-- bxSlider CSS file -->
    	<link href="js/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />
    	
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
    	<link rel="stylesheet" href="boilerplate.css">
    	<link rel="stylesheet" href="shangrila.css">
        <link rel="stylesheet" href="shangrila_responsive.css">
        <link rel="stylesheet" href="livecasino.css">
        <link rel="stylesheet" href="livecasino_responsive.css">
    	<meta charset="utf-8">
    	<meta name="viewport" content="initial-scale = 1.0">
        <script type="text/javascript" src="js/modernizr-1.6.min.js"></script>

        <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-controller="livecasino-controller" ng-init="init()" ng-cloak>

   <!-- This code must be installed within the body tags -->
    <script type="text/javascript" src="js/lhn.js"></script>
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
       <div id="main_menu_bg" class="clearfix">
            <div id="menu" class="clearfix">
                 <div id="main_menu_container" class="clearfix">
                    <ul id="main_menu_list">
                        <li id="main_menu_1"><a href="umbrella.php">{{ 'E3' | translate}}</a></li>
                        <li id="main_menu_2"><a href="casino.php">{{ 'E4' | translate }}</a></li>
                        <li id="main_menu_3" class="selected"><a href="livecasino.php"><img class="main_menu_icon" src="img/casino/menu_ico_solid.png" width="31" height="20" alt=""/><span>{{ 'E5' | translate}}</span></a>
                            <ul id="home_menu" class="noJS">
                                <li><a href="umbrella.php">{{ 'E3' | translate}}</a></li>
                                <li><a href="casino.php">{{ 'E4' | translate }}</a></li>
                                <li><a href="sportsbook.php" class="selected">{{ 'E6' | translate}}</a></li>
                            </ul>
                        </li>
                        <li id="main_menu_4"><a href="sportsbook.php">{{ 'E6' | translate}}</a></li>
                        <li id="main_menu_6"><a href="promos_list.php"><img src="img/umbrella/menu_ico_promotions.png" width="23" height="23" alt=""/>{{ 'E8' | translate}}</a></li>
                        <li id="main_menu_7"><a href="help.php?p=132"><img src="img/umbrella/menu_ico_help.png" width="17" height="25" alt=""/>{{ 'E9' | translate}}</a></li>
                    </ul>
            	</div>
        	</div>
        </div>
        
		<div id="wrapper" class="clearfix">
          <!--Slider-->
            <div id="slider_wrapper" ng-controller="login-controller" ng-init="checkWhichBanner()">
            <ng-include src="banner"></ng-include>                         
            </div>
   
          	<!--Content Lists-->
          	<div id="content_wrapper">
              	<div id="content" class="clearfix">
                	<div ng-show="featured">
                        <div class="livecasino_block" id="live_3">
                            <h4><img src="img/livecasino/live_roulette.png" alt="LIVE ROULETTE" /></h4>
                            <div class="play_btn"><a value="ROULETTE" ng-click="getLaunchURL(8345039412)">{{ 'E25' | translate}}</a></div>
                            <div class="live_casino_main"><img src="img/livecasino/block_3_main.png" alt=""/></div>
                            <div class="reflection_highlight"></div>
                        </div>
                        <div class="livecasino_block" id="live_2">
                        	<h4><img src="img/livecasino/live_baccarat.png" alt=""/></h4>
                            <div class="play_btn"><a value="BACCARAT" ng-click="getLaunchURL(8341089233)">{{ 'E25' | translate}}</a></div>
                            <div class="live_casino_main"><img src="img/livecasino/block_2_main.png" alt=""/></div>
                        	<div class="reflection_highlight"></div>
                        </div>
                        <div class="livecasino_block" id="live_1">
                            <h4><img src="img/livecasino/live_blackjack.png" alt="LIVE BLACKJACK" /></h4>
                            <div class="play_btn"><a value="BLACKJACK" ng-click="getLaunchURL(8342001802)">{{ 'E25' | translate}}</a></div>
                            <div class="live_casino_buttons_holder"></div>
                            <div class="live_casino_main"><img src="img/livecasino/block_1_main.png" alt=""/></div>
                            <div class="reflection_highlight"></div>
                        </div>
                        <div class="livecasino_block" id="live_6">
                            <h4><img src="img/livecasino/live_caribbeanstud.png" alt="LIVE CARIBBEAN STUD POKER" /></h4>
                            <div class="play_btn"><a value="CARIBBEANSTUD" ng-click="getLaunchURL(10161070715)">{{ 'E25' | translate}}</a></div>
                            <div class="live_casino_main"><img src="img/livecasino/block_6_main.png" alt=""/></div>
                            <div class="reflection_highlight"></div>
                        </div>
                        <div class="livecasino_block" id="live_5">
                            <h4><img src="img/livecasino/live_holdem.png" alt=""/></h4>
                            <div class="play_btn"><a value="HOLDEM" ng-click="getLaunchURL(8340030441)">{{ 'E25' | translate}}</a></div>
                            <div class="live_casino_main"><img src="img/livecasino/block_5_main.png" alt=""/></div>
                        	<div class="reflection_highlight"></div>
                        </div>
                        <div class="livecasino_block" id="live_4">
                            <h4><img src="img/livecasino/live_3_card.png" alt=""/></h4>
                            <div class="play_btn"><a value="3CARDPOKER" ng-click="getLaunchURL(8340007188)">{{ 'E25' | translate}}</a></div>
                            <div class="live_casino_main"><img src="img/livecasino/block_4_main.png" alt=""/></div>
                            <div class="reflection_highlight"></div>
                        </div>
                  	</div>
                </div> <!--End content -->   
			</div> <!--End content wrapper -->          
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
</body>
  <script type="text/javascript" src="js/scripts.js"></script>
  <?php include("loggedin_content.php"); ?>
  <?php include("notloggedin_content.php"); ?>
  <?php include("loggedin_banner.php"); ?>
  <?php include("notloggedin_banner.php"); ?> 
  <?php include("footer.php"); ?> 
  </body>
</html>
<?php COUCH::invoke(); ?>
