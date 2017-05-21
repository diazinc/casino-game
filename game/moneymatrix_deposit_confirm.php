<!DOCTYPE html>
<html>
    <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
	<link rel="stylesheet" href="boilerplate.css">
	<link rel="stylesheet" href="shangrila.css">
    <link rel="stylesheet" href="shangrila_responsive.css">
    <link rel="stylesheet" href="casino.css">
    <link rel="stylesheet" href="casino_responsive.css">
    <link rel="stylesheet" href="account.css">
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale = 1.0">
    <script type="text/javascript" src="../js/modernizr-1.6.min.js"></script>

    <script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    
    <script src="../js/gameFields.js"></script>
    <script src="../js/utility.js"></script>
    <script src="../js/variables.js"></script>
    <script src="../js/session-mgr.js"></script>
    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
    <script src="../js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="../js/deposit-card-controller.js" type="text/javascript"></script>
    <script src="../js/login-controller.js" type="text/javascript"></script>
    <script src="../js/angular-translate.min.js"></script>
    <script src="../js/translations.js"></script>

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-controller="deposit-card-controller" ng-init="initConfirmScreen()" ng-cloak>
    <!-- This code must be installed within the body tags -->
    <script type="text/javascript" src="../js/lhn.js"></script>
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
                <div class="menu clearfix">
                     <div id="main_menu_container" class="clearfix">
                        <ul id="main_menu_list">
                        	<li id="main_menu_1"><a href="umbrella.php">{{ 'E3' | translate}}</a></li>
                            <li id="main_menu_2"><a onClick="return true" href="casino.php"><img class="main_menu_icon" src="img/casino/menu_ico_solid.png" width="31" height="20" alt=""/><span>{{ 'E4' | translate }}</span></a>
								<ul id="home_menu" class="noJS">
                                	<li><a href="umbrella.php">{{ 'E3' | translate}}</a></li>
                                    <li><a href="livecasino.php">{{ 'E5' | translate }}</a></li>
                                    <li><a href="sportsbook.php" class="selected">{{ 'E6' | translate }}</a></li>
                            	</ul>
							</li>
                           	<li id="main_menu_3"><a href="livecasino.php">{{ 'E5' | translate }}</a></li>
                           	<li id="main_menu_4"><a href="sportsbook.php">{{ 'E6' | translate }}</a></li>                           	
							<li id="main_menu_6"><a href="promos_list.php"><img src="img/umbrella/menu_ico_promotions.png" width="23" height="23" alt=""/>{{ 'E8' | translate }}</a></li>
                           	<li id="main_menu_7"><a href="help.php?p=132"><img src="img/umbrella/menu_ico_help.png" width="17" height="25" alt=""/>{{ 'E9' | translate }}</a></li>
                        </ul>
                    </div>
            	</div>
        	</div>
        </div>
        
		<div id="content_wrapper">
        	<div id="content" class="clearfix">
            	<div class="gen_container" id="account_container">
                	<h4>{{ 'E16' | translate }}</h4>
                    <div id="account_left">
                        <div id="account_menu">
                        	<ul class="nav_list_parent">
                               <li><a href="#">{{ 'E165' | translate }}</a>
                                	<ul class="nav_list account_nav">
                                        <li class="toggle_item selected">
                                            <input type="checkbox" id="menu_account_0" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_0"><a href="account_deposit.php">{{ 'E165' | translate }}</a></label>
                                        </li>
                                        <li class="toggle_item">
                                            <input type="checkbox" id="menu_account_1" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_1"><a href="account_1_1.php">{{ 'E79' | translate }}</a></label>
                                        </li>
                                        <li class="toggle_item">
                                            <input type="checkbox" id="menu_account_2" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_2"><a href="account_2_1.php">{{ 'E80' | translate }}</a></label>
                                        </li>
                                        <li class="toggle_item">
                                            <input type="checkbox" id="menu_account_3" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_3"><a href="account_3_1.php">{{ 'E81' | translate }}</a></label>
                                        </li>
                                        <li class="toggle_item">
                                            <input type="checkbox" id="menu_account_4" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_4"><a href="account_4_1.php">{{ 'E82' | translate }}</a></label>
                                        </li>
                                        <li class="toggle_item">
                                            <input type="checkbox" id="menu_account_5" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_5"><a href="account_5_1.php">{{ 'E83' | translate }}</a></label>
                                        </li>
                                        <li class="toggle_item">
                                            <input type="checkbox" id="menu_account_6" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_6"><a href="account_6_1.php">{{ 'E84' | translate }}</a></label>
                                        </li>
                                        <li class="toggle_item">
                                            <input type="checkbox" id="menu_account_7" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_7"><a href="account_7_1.php">{{ 'E85' | translate }}</a></label>
                                        </li>
                                        <li class="toggle_item expand_item">
                                            <input type="checkbox" id="menu_account_8" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_8"><a href="account_8_1.php">{{ 'E86' | translate }}</a></label>
                                            <div class="expand_chevron"></div> 
                                            <div class="hidden_content">
                                            	<ul>
                                                	<li><a href="account_8_1.php">{{ 'E236' | translate }}</a></li>
                                                	<li><a href="account_8_2.php">{{ 'E237' | translate }}</a></li>                                                    
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="toggle_item expand_item">
                                            <input type="checkbox" id="menu_account_9" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_9"><a href="account_9_1.php">{{ 'E87' | translate }}</a></label>
                                            <div class="expand_chevron"></div>
                                            <div class="hidden_content">
                                            	<ul>
                                                	<li><a href="account_9_1.php">{{ 'E4' | translate }}</a></li>
                                                	<li><a href="account_9_2.php">{{ 'E154' | translate }}</a></li>                                                   
                                                </ul>
                                            </div>
                                        </li>
                            		</ul>
                                </li>
                            </ul>
                        </div>
					</div><div id="account_right">
                        <h5>{{ 'E242' | translate }}</h5>
                        <div class="account_content" id="account_content_00_4">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="acc_table_01 btm_spacer" id="table_1"><tbody>
                                <tr><td width="80%" colspan="2">{{ 'E252' | translate }}<span class="strong_text">{{ 'E253' | translate }}</span>{{ 'E254' | translate }}<span class="strong_text">{{ 'E255' | translate }}</span></td>
                                    <td ng-bind-template="&euro; {{debitAmount}}" width="20%"></td>
                                </tr>
                            </tbody></table>
                            <table width="100%"><tbody><tr>
                                <td width="50%"><a href="moneymatrix_deposit_selectcards.php" class="red_btn">{{ 'E42' | translate }}</a></td>
                                <td width="50%" class="align_right"><a ng-click="confirmDeposit()" class="green_btn">{{ 'E256' | translate }}</a></td>
                            </tr></tbody></table>
                        </div>
                    </div>
                </div>
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