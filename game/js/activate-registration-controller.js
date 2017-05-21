//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('activate-registration-controller', function ($scope, $http, $httpParamSerializerJQLike) {

  function getQueryVariable(variable) {
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable){return pair[1];}
     }
     return(false);
  }

  function showStep3() {
    $('#reg_page_1').hide();
    $('#reg_page_2').hide();
    $('#reg_page_3').show();
    
    // Step 3 (Fucking DOTS) ... Progress indicators added...
    var stepOne = document.getElementsByClassName("step_pos_1_on")[0];
    var stepTwo = document.getElementsByClassName("step_pos_2_on")[0];
    var stepThree  = document.getElementsByClassName("step_pos_3_on")[0];
    stepOne.style="display:block !important;";
    stepTwo.style="display:block !important;";
    stepThree.style="display:block !important;";
    document.getElementsByClassName("step_bar_progress")[0].className = "step_bar_progress_3";
  };

  $scope.key = getQueryVariable('key');

  $scope.activateRegistration = function() {

    var params = {};

    params["verificationCode"] = $scope.key;
   
    SessionMgr.call("/user/account#activate", params).then(
      function (result) {
      }
      , function (err) {
        }
    );

  };

    setTimeout(function() { //wait for session to be established before calls made

     $scope.activateRegistration();   

  }, 4000);

  showStep3();

});