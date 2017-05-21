<?php require_once( 'admin/cms.php' ); ?>
<cms:template title='Promotions Section'  hidden='1'> </cms:template>
<!DOCTYPE html>
<html>
    <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
	<link rel="stylesheet" href="boilerplate.css">
	<link rel="stylesheet" href="shangrila.css">
    <link rel="stylesheet" href="shangrila_responsive.css">
    <link rel="stylesheet" href="casino.css">
    <link rel="stylesheet" href="casino_responsive.css">
    <link rel="stylesheet" href="promos.css">
    <link rel="stylesheet" href="promos_responsive.css">
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale = 1.0">
    <script type="text/javascript" src="js/modernizr-1.6.min.js"></script>

    <script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    <link rel="stylesheet" href="colorbox.css">
    <script src="js/gameFields.js"></script>
    <script src="js/utility.js"></script>
    <script src="js/variables.js"></script>
    <script src="js/session-mgr.js"></script>
    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
    <script src="js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="js/login-controller.js" type="text/javascript"></script>
    <script src="js/angular-translate.min.js"></script>
    <script src="js/translations.js"></script>

    <!-- JQUERY SLIDER -->
    <!-- jQuery library (served from Google) -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <!-- bxSlider Javascript file -->
        <script src="js/jquery.bxslider/jquery.bxslider.min.js"></script>
        <!-- bxSlider CSS file -->
        <link href="js/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-cloak>

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
                        <li id="main_menu_1"><a href="umbrella.php">{{ 'E3' | translate }}</a></li>
                        <li id="main_menu_2"><a onClick="return true" href="casino.php"><img class="main_menu_icon" src="img/umbrella/menu_ico_solid.png" width="31" height="20" alt=""/><span>{{ 'E4' | translate }}</span></a>
                            <ul id="home_menu" class="noJS">
                                <li><a href="umbrella.php">{{ 'E3' | translate }}</a></li>
                                <li><a href="livecasino.php">{{ 'E5' | translate }}</a></li>
                                <li><a href="sportsbook.php">{{ 'E6' | translate }}</a></li>
                            </ul>
                        </li>
                        <li id="main_menu_3"><a href="livecasino.php">{{ 'E5' | translate }}</a></li>
                        <li id="main_menu_4"><a href="sportsbook.php">{{ 'E6' | translate }}</a></li>
                        <li id="main_menu_6" class="selected"><a onClick="return true" href="promos_list.php"><img class="main_menu_icon" src="img/casino/menu_ico_promotions.png" width="31" height="20" alt=""/><span>{{ 'E8' | translate }}</span></a>
                        <li id="main_menu_7"><a href="help.php?p=132"><img src="img/umbrella/menu_ico_help.png" width="17" height="25" alt=""/>{{ 'E9' | translate }}</a></li>
                    </ul>
                </div>
            </div>
         	<div id="sec_menu_bg" class="clearfix">
                <div class="menu clearfix">
                    <div id="sec_menu">
                        <div id="sec_menu_container">
                            <ul id="sec_menu_list">
                                <li id="sec_menu_1"><a href="promos_list.php"><img class="main_menu_icon" src="img/umbrella/menu_ico_solid.png" width="31" height="20" alt=""/><span>{{ 'E65' | translate }} <div class="line_return_768"></div>{{ 'E8' | translate }}</span></a>
                                    <ul id="sec_home_menu" class="noJS">
                                        <li><a href="promos_casino.php">{{ 'E36' | translate }}</a></li>
                                        <li><a href="promos_sportsbook.php">{{ 'E6' | translate }} {{ 'E8' | translate }}</a></li>
                                        <li><a href="promos_livecasino.php">{{ 'E5' | translate }} {{ 'E8' | translate }}</a></li>
                                    </ul>
                                </li>
                                                       
                                <li id="sec_menu_2" class="selected"><a href="promos_casino.php">{{ 'E4' | translate }} <div class="line_return_768"></div>{{ 'E8' | translate }}</a></li>
                                <li id="sec_menu_3"><a href="promos_sportsbook.php">{{ 'E6' | translate }} <div class="line_return_768"></div>{{ 'E8' | translate }}</a></li>
                                <li id="sec_menu_4"><a href="promos_livecasino.php">{{ 'E5' | translate }} <div class="line_return_768"></div>{{ 'E8' | translate }}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
		<div id="wrapper" class="clearfix">
			<div id="content_wrapper" style="text-align: center">
			
		        <cms:pages masterpage='promos_single.php'>
		        <cms:if promo_category='Casino' >
		     	<!-- All the variables of each page cloned out of this template are available here -->
		     		<div id="promo_box_1" class="promo_list_block">		
			     			 <a href="<cms:show k_page_link />"><img src="<cms:show promotion_image />" ></a>
			     			<div class="promo_box_header"><h4><cms:show k_page_title /></h4></div>
			     			<p><cms:excerpt count='250' truncate_chars='1'><cms:show main_content/></cms:excerpt></p>
			     			<a href="<cms:show k_page_link />">{{ 'E39' | translate }}</a>
			     	</div>
			    </cms:if>
				</cms:pages>
			</div> 
			<!--End content container -->
      	</div> 
      	<!--End wrapper -->
      
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
  <script type="text/javascript" src="js/scripts.js"></script>
  <?php include("loggedin_content.php"); ?>
  <?php include("notloggedin_content.php"); ?>
  <?php include("footer.php"); ?>
  
  </body>
</html>
<?php COUCH::invoke(); ?>