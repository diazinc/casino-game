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
    <script src="../js/deposit-entry-controller.js" type="text/javascript"></script>
    <script src="../js/login-controller.js" type="text/javascript"></script>
    <script src="../js/angular-translate.min.js"></script>
    <script src="../js/translations.js"></script>

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-controller="deposit-entry-controller" ng-init="initPaymentMethods()" ng-cloak>
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
                                            <input type="checkbox" id="menu_account_0" class="account_menu_checkbox"/><label class="account_menu_item" for="menu_account_0"><a href="account_desposit.php">{{ 'E165' | translate }}</a></label>
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
                        <h5>{{ 'E165' | translate }}</h5> 
                            <!-- CREDIT CARDS -->                
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="acc_table_01"><tbody>
                                <tr><th>{{ 'E238' | translate }}</th><th>{{ 'E88' | translate }}</th><th>{{ 'E89' | translate }}</th><th>{{ 'E91' | translate }}</th></tr>
                                <tr ng-repeat="method in paymentMethodsCC">
                                  <td width="50%">
                                  	<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody>
                                  		<tr>
                                        	<td width="57px"><output ng-bind-html="method.icon"></output></td>
                                        	<td ng-bind="method.name"></td>
                                        	<td><a href="#" ng-click="selectDepositMethod(method.code)" class="green_btn">{{ 'E239' | translate }}</a></td>
                                        </tr></tbody>
                                     </table>
                                  </td>
                                  <td width="15%" ng-bind="method.depositFee"></td>
                                  <td width="15%" ng-bind="method.depositProcessingTime"></td>
                                  <td width="20%" ng-bind-template="{{ 'E94' | translate }} {{method.depositLimit.currency}} {{method.depositLimit.min}}    {{ 'E95' | translate }} {{method.depositLimit.currency}} {{method.depositLimit.max}}"></td>
                                </tr>
                            </tbody></table><br/>
                            <!-- E-WALLETS -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="acc_table_01"><tbody>
                                <tr><th>{{ 'E241' | translate }}</th><th>{{ 'E88' | translate }}</th><th>{{ 'E89' | translate }}</th><th>{{ 'E91' | translate }}</th></tr>
                                <tr ng-repeat="method in paymentMethodsEW">
                                  <td width="50%">
                                  	<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody>
                                  		<tr>
                                        	<td width="57px"><output ng-bind-html="method.icon"></output></td>
                                        	<td ng-bind="method.name"></td>
                                        	<td><a href="#" ng-click="selectDepositMethod(method.code)" class="green_btn">{{ 'E239' | translate }}</a></td>
                                        </tr></tbody>
                                     </table>
                                  </td>
                                  <td width="15%" ng-bind="method.depositFee"></td>
                                  <td width="15%" ng-bind="method.depositProcessingTime"></td>
                                  <td width="20%" ng-bind-template="{{ 'E94' | translate }} {{method.depositLimit.currency}} {{method.depositLimit.min}}    {{ 'E95' | translate }} {{method.depositLimit.currency}} {{method.depositLimit.max}}"></td>
                                </tr>
                            </tbody></table><br/>
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