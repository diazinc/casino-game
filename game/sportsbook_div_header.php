<div id="header_top" class="clearfix">
    <div id="logo" class="clearfix" onclick="window.location.href='umbrella.php'">
            <h1>SHANGRI LA</h1>
        <h4>{{ 'E40' | translate }}</h4>
    </div>
    <div id="user_panel" class="clearfix" ng-controller="login-controller" ng-init="checkIfLoggedIn()">
        <ng-include src="template"></ng-include>
    </div>
</div>