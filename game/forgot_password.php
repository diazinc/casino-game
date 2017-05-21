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
    <script src="../js/forgot-password-controller.js" type="text/javascript"></script>
    <script src="../js/login-controller.js" type="text/javascript"></script>
    <script src="../js/angular-translate.min.js"></script>
    <script src="../js/translations.js"></script>
    <script type='text/javascript'>
    var captchaContainer = null;
    var loadCaptcha = function() {
      captchaContainer = grecaptcha.render('captcha_container', {
        'sitekey' : '6LcM7SgTAAAAAFTbRFOuEsFc1nNu-jyaJ4QQ1QxG',
        'callback' : function(response) {
          console.log(response);
          CookieHelper.set('verificationResponse', response);
        }
      });
    };
    </script>
    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-controller="forgot-password-controller" ng-cloak>
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
        
		<div id="wrapper" class="clearfix">
			<div id="content_wrapper" style="text-align: center">
				<div id="content">
                    <h3 class="fgt_pwd_header green_text_3">{{ 'E54a' | translate }}</h3>
                    <div class="fgt_pwd_container">
					<form novalidate id="accountForm">
                    	<table width="100%" border="0" cellspacing="0" cellpadding="0" class="acc_table_01 btm_spacer"><tbody>
                            <tr>
                            	<th colspan="2">{{ 'E307' | translate }}<br />{{ 'E308' | translate }}</th>
                            </tr>
                            <tr>
                            	<td>
                                    <div class="inp_row_holder no_padding">
                                        <div class="inp_tab_block_1"><label for="withdraw_currency" class="form_input_label ">{{ 'E111' | translate }} </label><input type="text" name="nEmail" ng-model="nEmail" class="form_input fgt_pwd_email" id="nEmail" ng-keydown="$event.which === 13 && forgotPassword()" ></div>
                                    </div>
                            	</td>
                            </tr>
                            <tr><td>
                            	<div id="captcha_container"></div>
                            	</td>
                            </tr>
                            <tr>
                                <td>    
                                    <form role="form" class="form-horizontal" action="submit.php" method="POST">
                                        <input type="submit" value="{{ 'E148' | translate }}" ng-click="forgotPassword()">
                                    </form>
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
					</form>
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
  
  <script src="https://www.google.com/recaptcha/api.js?onload=loadCaptcha&render=explicit" async defer></script>
  </body>
</html>