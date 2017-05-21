<div id="center_panel"  class="clearfix" ng-init="getMatchWithOdds()">
    <div class="game_board">
        <div class="header_holder"><h4 class="sport_ico_3 sports_header_ico"><a href="#">{{match.name}}</a>&nbsp;/&nbsp;<a href="#">{{match.parentName}}</a>&nbsp;/&nbsp;{{match.homeParticipantName}} v {{match.awayParticipantName}}</a></h4></div>
        <div class="game_board_info">
                <span class="game_board_start_time">Start Time <span class="yellow_text">{{match.startTime| date : 'medium'}}</span></span>
        </div>
        <div>
            <div ng-repeat="filter in oddsFilters track by id" class="toggle_item">
                <input type="checkbox" id="toggle_box_label_0_{{$index}}" class="toggle_box_label_name"/>
                <label class="toggle_box_label" for="toggle_box_label_0_{{$index}}">
                    <div class="toggle_box_title_holder">
                        <span class="toggle_box_title">{{filter}}</span>
                    </div>
                </label>
                <div class="expand_chevron"></div>
                <div class="hidden_content">
                    <table width="100%" border="0" cellspacing="0" cellpadding="5px" class="bet_select_buttons game_bet_select_buttons">
                        <tr ng-repeat="odd in match.odds | filter:{ isAvailable: true } | filter: { bettingTypeName: filter } | orderBy:'bettingTypeName'"  ng-switch on="$index % 3">
                            <td  height="39px" width="33%" ng-switch-when="0">
                                <a href=""><span class="bet_select_name" ng-click="addBet(odd)">{{match.odds[$index].eventPartName}}  {{$index}}</span><span class="bet_select_odds" ng-click="addBet(match.odds[$index])">{{match.odds[$index].odds | number: 2}}</span></a>
                            </td>
                            <td ng-switch-when="0">
                                <a href=""><span class="bet_select_name"  ng-show="match.odds[$index+1]" ng-click="addBet(match.odds[$index+1])">{{match.odds[$index+1].eventPartName}}  {{$index}}</span><span class="bet_select_odds" ng-click="addBet(odd)">{{match.odds[$index+1].odds | number: 2}}</span></a>
                            </td>
                            <td ng-switch-when="0">
                                <a href=""><span class="bet_select_name" ng-show="match.odds[$index+2]" ng-click="addBet(match.odds[$index+2])">{{match.odds[$index+2].eventPartName}}  {{$index}}</span><span class="bet_select_odds" ng-click="addBet(odd)">{{match.odds[$index+2].odds | number: 2}}</span></a>
                            </td>
                        </tr>
                    </table>
                </div> 
            </div>
        </div>
    </div> <!--End game board -->
</div><!--End center panel -->
