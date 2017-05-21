<!DOCTYPE html>
<html>
  <head>
    <title>Loading captcha with JavaScript - Codedodle</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
    <script type='text/javascript'>
    var captchaContainer = null;
    var loadCaptcha = function() {
      captchaContainer = grecaptcha.render('captcha_container', {
        'sitekey' : 'Your site key',
        'callback' : function(response) {
          alert(response);
        }
      });
    };
    </script>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                  <div class="panel panel-primary">
                      <div class="panel-heading">
                          <h3 class="panel-title">Google new reCATCHA Demo</h3>
                      </div>
                      <div class="panel-body">
                          <form role="form" class="form-horizontal" action="submit.php" method="POST">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="username" class="form-control" placeholder="Enter Username">
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" placeholder="Password">
                              </div>
                              <div class="form-group">
                                 <small>Are you a robot?</small>
                                 <div id="captcha_container"></div>
                              </div>
                              <input type="submit" value="Submit">
                          </form>                    
                      </div>
                  </div>
              </div>
              <div class="col-md-3"></div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">
              <small><a class="" href="http://www.codedodle.com/" title="Codedodle">codedodle.com</a></small>
          </div>
      </div>
      <script src="https://www.google.com/recaptcha/api.js?onload=loadCaptcha&render=explicit" async defer></script>
  </body>
</html>