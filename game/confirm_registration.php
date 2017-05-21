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
    <script src="../js/utility.js"></script>
    <script src="../js/variables.js"></script>
    <script src="../js/session-mgr.js"></script>
    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
    <script type="text/javascript" src="../js/modernizr-1.6.min.js"></script>
    
    <script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    
    <script src="../js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="../js/activate-registration-controller.js" type="text/javascript"></script>
    <script src="../js/login-controller.js" type="text/javascript"></script>
    <script src="../js/angular-translate.min.js"></script>
    <script src="../js/translations.js"></script>

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-controller="activate-registration-controller" ng-cloak>
    <!-- This code must be installed within the body tags -->
    <script type="text/javascript" src="../js/lhn.js"></script>
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
						<li id="main_menu_1" class="selected"><a onClick="return true" href="umbrella.php"><img class="main_menu_icon" src="img/casino/menu_ico_solid.png" width="31" height="20" alt=""/><span>HOME</span></a>								
                            <ul id="home_menu" class="noJS">
                                <li><a href="casino.php">{{ 'E4' | translate }}</a></li>
                                <li><a href="livecasino.php">LIVE CASINO</a></li>
                                <li><a href="sportsbook.php" class="selected">SPORTS BOOK</a></li>
                            </ul>
                        </li>
                        <li id="main_menu_2"><a href="casino.php">{{ 'E4' | translate }}</a></li>
                        <li id="main_menu_3"><a href="livecasino.php">LIVE CASINO</a></li>
                        <li id="main_menu_4"><a href="sportsbook.php">SPORTS BOOK</a></li>
                        <li id="main_menu_6"><a href="promos_list.php"><img src="img/casino/menu_ico_promotions.png" width="23" height="23" alt=""/>PROMOTIONS</a></li>
                        <li id="main_menu_7"><a href="help.php?p=132"><img src="img/casino/menu_ico_help.png" width="17" height="25" alt=""/>HELP</a></li>
                    </ul>
                </div>
        	</div>
        </div>
        
		
    <div id="content_wrapper">
        <div id="reg_content" class="clearfix">
            <div class="gen_container" id="registration_container">
                <h4>REGISTRATION - 3 EASY STEPS! </h4>
                <a href="" class="close_btn" onClick="window.history.go(-1);">&nbsp;</a>  
   				<table width="100%"><tbody>
                    <tr>
                        <td id="reg_col_1">            
                        <div class="reg_step" id="reg_step_1">
                            <h4>STEP 1</h4>
                            <p>CREATE ACCOUNT</p>
                        </div>
                        </td>
                        <td id="reg_col_2">   
                        <div class="reg_step" id="reg_step_2">
                          <h4>STEP 2</h4>
                          <p>CONFIRMATION</p>
                        </div>
                        </td>
                        <td id="reg_col_3">   
                        <div class="reg_step" id="reg_step_3">
                          <h4>STEP 3</h4>
                          <p>START PLAYING</p>
                        </div>
                        </td>
                    </tr>
                    </tbody></table>    
                    <div class="step_pos_1"></div><div class="step_pos_2"></div><div class="step_pos_3"></div>
                    <div class="step_pos_1_on"></div><div class="step_pos_2_on"></div><div class="step_pos_3_on"></div>
                    <div class="step_bar"></div><div class="step_bar_progress"></div>
                    
                    <div class="reg_step_page" id="reg_page_3">
                        <hr/>
                        <h4>YOUR EMAIL ADDRESS IS NOW VERIFIED.</h4>
                        <h5>YOU ARE NOW READY TO DEPOSIT FUNDS AND START PLAYING!</h5>
                        <div class="center_width" style="margin-top: 40px; margin-bottom: 20px;"><a class="green_btn reg_submit_btn" href="umbrella.php">START PLAYING</a></div>
                    </div>
				</div>
            </div>
        </div>     
  <?php include("loggedin_content.php"); ?>
  <?php include("notloggedin_content.php"); ?>

  </body>
  
</html>