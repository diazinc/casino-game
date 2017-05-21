<!DOCTYPE html>
<html>
  <head>
    <title>Loading captcha with JavaScript - codedodle</title>
    <link href="http://www.codedodle.comxa.com/css/bootstrap.min.css" rel="stylesheet" type="text/css"></link>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                  <?php
                    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

                        $params = array();
                        $params['secret'] = 'Your site secret here.'; // Secret key
                        if (!empty($_POST) && isset($_POST['g-recaptcha-response'])) {
                            $params['response'] = urlencode($_POST['g-recaptcha-response']);
                        }
                        $params['remoteip'] = $_SERVER['REMOTE_ADDR'];

                        $params_string = http_build_query($params);
                        $requestURL = 'https://www.google.com/recaptcha/api/siteverify?' . $params_string;

                        // Get cURL resource
                        $curl = curl_init();

                        // Set some options
                        curl_setopt_array($curl, array(
                            CURLOPT_RETURNTRANSFER => 1,
                            CURLOPT_URL => $requestURL,
                        ));

                        // Send the request
                        $response = curl_exec($curl);
                        // Close request to clear up some resources
                        curl_close($curl);

                        $response = @json_decode($response, true);
                        
                        if ($response["success"] == true) {
                            echo '<h3 class="alert alert-success">Login Successful</h3>';
                        } else {
                            echo '<h3 class="alert alert-danger">Login failed</h3>';
                        }
                    } else {
                        // get request.
                    } 
                  ?>
              </div>
              <div class="col-md-3"></div>
          </div>
          <br/>
          <div class="row">
              <div class="col-md-12">
                  <p>Visit <a class="" href="http://www.codedodle.com/" title="Codedodle">codedodle.com</a> for more.</p>
              </div>
          </div>
      </div>
  </body>
</html>