<?php require_once( 'admin/cms.php' ); ?>
<cms:template title='Help' clonable='1' nested_pages='1'> 

<cms:editable
 name='heading_of_page'
 label='Heading'
 desc='The page heading'
 type='richtext'>...</cms:editable>

</cms:template>
<!DOCTYPE html>
<html>
    <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
	<link rel="stylesheet" href="boilerplate.css">
	<link rel="stylesheet" href="shangrila.css">
    <link rel="stylesheet" href="shangrila_responsive.css">
    <link rel="stylesheet" href="casino.css">
    <link rel="stylesheet" href="casino_responsive.css">
    <link rel="stylesheet" href="help.css">
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale = 1.0">
    <script type="text/javascript" src="../js/modernizr-1.6.min.js"></script>

    <script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    <link rel="stylesheet" href="colorbox.css">
    <script src="../js/gameFields.js"></script>
    <script src="../js/utility.js"></script>
    <script src="../js/variables.js"></script>
    <script src="../js/session-mgr.js"></script>
    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
    <script src="../js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="../js/login-controller.js" type="text/javascript"></script>
    <script src="../js/angular-translate.min.js"></script>
    <script src="../js/translations.js"></script>

        <!-- JQUERY SLIDER -->
    <!-- jQuery library (served from Google) -->
        <script src="js/jquery-1.8.2.min.js"></script>
        <!-- bxSlider Javascript file -->
        <script src="../js/jquery.bxslider/jquery.bxslider.min.js"></script>
        <!-- bxSlider CSS file -->
        <link href="js/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-cloak>

    <!-- This code must be installed within the body tags -->
    <script type="text/javascript" src="../js/lhn.js"></script>
    <a href="http://www.livehelpnow.net/products/live-chat-system" target="_blank" style="font-size:10px;" id="lhnHelp">best live chat</a>
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
        <div id="main_menu_bg" class="clearfix">
            <div id="menu" class="clearfix">
                <div class="menu clearfix">
                     <div id="main_menu_container" class="clearfix">
                        <ul id="main_menu_list">
                        	<li id="main_menu_1"><a href="umbrella.php">{{ 'E3' | translate}}</a></li>
                            <li id="main_menu_2"><a onClick="return true" href="casino.php"><img class="main_menu_icon" src="img/casino/menu_ico_solid.png" width="31" height="20" alt=""/><span>{{ 'E4' | translate }}</span></a>
								<ul id="home_menu" class="noJS">
                                	<li><a href="umbrella.php">{{ 'E3' | translate}}</a></li>
                                    <li><a href="livecasino.php">{{ 'E5' | translate }}</a></li>
                                    <li><a href="sportsbook.php" class="selected">{{ 'E6' | translate }}</a></li>                            	</ul>
							</li>
                           	<li id="main_menu_3"><a href="livecasino.php">{{ 'E5' | translate }}</a></li>
                           	<li id="main_menu_4"><a href="sportsbook.php">{{ 'E6' | translate }}</a></li>
							<li id="main_menu_6"><a href="promos_list.php"><img src="img/umbrella/menu_ico_promotions.png" width="23" height="23" alt=""/>{{ 'E8' | translate }}</a></li>
                           	<li id="main_menu_7" class="selected"><a href="help.php?p=132"><img src="img/umbrella/menu_ico_help_sel.png" width="17" height="25" alt=""/>{{ 'E9' | translate }}</a></li>
                        </ul>
                    </div>
            	</div>
        	</div>
        </div>
        
		<div id="content_wrapper">
        	<div id="content" class="clearfix">
            	<div class="gen_container" id="help_container">

                	<h4>{{ 'E9' | translate }}</h4>
                    <div id="help_left">
                        <div class="help_search_holder">
                            <div class="help_search">
                             <cms:search_form msg='Search' processor="<cms:show k_site_link/>help.php" />
                                <cms:search masterpage='help.php' limit='10' >
    							
								</cms:search>
								
                            </form>
                            </div>
                        </div>
                        <div id="help_menu">
                        	<ul class="nav_list_parent">
                                <li><a href="#">{{ 'E290' | translate}}</a>
                                <cms:menu masterpage='help.php' depth='3' list_type='li' ignore_show_in_menu='1' menu_class='help_menu_item nav_list help_nav' menu_id='menu_item' selected_class='toggle_item'/>

                        </div>
                        
                    </div><div id="help_right"><br/>                 
                        <div id="help_search_results">
                        <cms:search >
                            <li>
                                <a href="<cms:show k_page_link />">
                                    <h5><cms:show k_page_title /></h5>
                                </a>
                                <p>
                                    <cms:show k_search_excerpt />
                                </p>
                            </li>                           
                        </cms:search>
                        </div>
						
						
                        <h5> <cms:show heading_of_page /> </h5>
                        <hr/>
                        
                        <cms:editable name='main_content' type='richtext'>

                        </cms:editable>
                        
                        <div id="help_content">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
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
  <script type="text/javascript" src="../js/scripts.js"></script>
  
  <?php include("loggedin_content.php"); ?>
  <?php include("notloggedin_content.php"); ?>
  <?php include("footer.php"); ?>

  </body>
</html>
<?php COUCH::invoke(); ?>