<!DOCTYPE html>
<html>
    <head>
      <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">

<script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    <script src="js/gameFields.js"></script>
    <script src="js/utility.js"></script>
    <script src="js/variables.js"></script>
    <script src="js/session-mgr.js"></script>
    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
    <script src="js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="js/playlive-controller.js" type="text/javascript"></script>
    <script src="js/login-controller.js" type="text/javascript"></script>
	
	
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
	<link rel="stylesheet" href="boilerplate.css">
	<link rel="stylesheet" href="shangrila.css">
    <link rel="stylesheet" href="shangrila_responsive.css">
    <link rel="stylesheet" href="livecasino.css">
    <link rel="stylesheet" href="livecasino_responsive.css">
    <script type="text/javascript" src="js/modernizr-1.6.min.js"></script>
    <script src="js/angular-translate.min.js"></script>
    <script src="js/translations.js"></script>

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-controller="playlive-controller" ng-init="init()" ng-cloak>

   <!-- This code must be installed within the body tags -->
   <script type="text/javascript" src="js/lhn.js"></script>
    <a href="http://www.livehelpnow.net/products/live-chat-system" target="_blank" style="font-size:10px;" id="lhnHelp"></a>
    <script src="//www.livehelpnow.net/lhn/widgets/chatbutton/lhnchatbutton-current.min.js" type="text/javascript" id="lhnscript"></script>

	<div id="primary_wrapper" class="clearfix">
    <div id="primary_container" class="clearfix">
		<div id="header_bg live_casino_lobby_hide" class="clearfix">
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
              	<!--Content Lists-->
              	<div id="content_wrapper" class="remove_play_live_padding">
                  	<div id="iframe_content" class="clearfix">
                      <object type="text/html" data='{{gameURL}}'></object>
			              </div> <!--End content container -->
		            </div> <!--End wrapper -->
	         </div>
	     </div>
       <script type="text/javascript" src="js/scripts.js"></script>
  
  <?php include("loggedin_content.php"); ?>
  <?php include("notloggedin_content.php"); ?>
  <?php include("footer.php"); ?> 
  </body>
</html>
