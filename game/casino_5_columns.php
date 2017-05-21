<script type="text/ng-template" id="casino_5_template">
<?php for ($i = 1; $i <= 5; $i++) { ?>
  <div id="content_list_<?php echo $i ?>" class="clearfix">
    <div class="small_block_container">
      <div class="small_block" ng-repeat="game in column<?php echo $i ?>games">
        <a href="#"><img src="{{ game.thumbnail }}" width="230" height="170" alt=""/></a>
        <div class="reflection_highlight"></div>
        <div class="game_jackpot_container" ng-if="jackpots[game.slug]"><span>{{ jackpots[game.slug] }}</span></div>
        <div class="game_overlay" ng-click="gameClicked(game)">
          <div class="play_buttons hidden_content">
            <a href="" ng-click="setRealMoney(true)" class="green_btn">PLAY FOR REAL</a><br/>
            <a href="" ng-click="setRealMoney(false)" class="red_btn">PLAY FOR FUN</a>
          </div>
        </div>
        <div class="favourite_checkbox">
          <input type="checkbox" ng-click="selectFunction(game.slug)" name="game{{game.count}}-favourite" id="game{{game.count}}-favourite" value="true">
          <label for="game{{game.count}}-favourite"></label>
        </div>
        <div class="game_name">{{ game.name | limitTo: 25 }} {{game.name.length < 25 ? '' : '...'}}</div>
      </div>
    </div>
  </div>
<?php } ?>
</script>
