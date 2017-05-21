<div class="modallog" id="login_modal" ng-controller="login-controller">
	<h4>{{ 'E53' | translate}}</h4>
    <a href="" onclick='window.parent.jQuery.colorbox.close(); return false;' class="close_btn">&nbsp;</a>
   	<div class="login_modal">
        <form>
            <label>{{ 'E54' | translate}}</label><br/><div class="login_spacer"></div><input id="iEmail" type="text" ng-model="uEmailOrUsername"><br/><div class="login_spacer"></div>
            <label>{{ 'E55' | translate}}</label><br/><div class="login_spacer"></div><input id="iPassword" type="password" ng-model="uPassword"  ng-keydown="$event.which === 13 && mobileLogin(uEmailOrUsername, uPassword)"><br/><div class="login_spacer"></div>
            <hr/>
            <a href="" class="green_btn" ng-click="mobileLogin(uEmailOrUsername, uPassword)">{{ 'E53' | translate}}</a> <a href="" onClick="window.parent.jQuery.colorbox.close(); window.parent.location.href = 'signup.php';" class="red_btn">{{ 'E13' | translate}}</a>
        </form>
        <div class="center_width"><br/><a href="" onClick="window.parent.jQuery.colorbox.close(); window.parent.location.href = 'forgot_password.php';" class="link">{{ 'E56' | translate}}</a></div>
	</div>        
</div>



