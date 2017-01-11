<script>
    <!--
    function getStylesheet() {
      var currentTime = new Date().getHours();
          if (0 <= currentTime&&currentTime < 5) {
           document.write("<link rel='stylesheet' href='css/sogive-night.css' type='text/css'>");
          }
          if (5 <= currentTime&&currentTime < 11) {
           document.write("<link rel='stylesheet' href='css/sogive-morning.css' type='text/css'>");
          }
          if (11 <= currentTime&&currentTime < 16) {
           document.write("<link rel='stylesheet' href='css/sogive-day.css' type='text/css'>");
          }
          if (16 <= currentTime&&currentTime < 22) {
           document.write("<link rel='stylesheet' href='css/sogive-evening.css' type='text/css'>");
          }
          if (22 <= currentTime&&currentTime <= 24) {
           document.write("<link rel='stylesheet' href='css/sogive-night.css' type='text/css'>");
        }
    }

    getStylesheet();
    -->
</script>
<noscript><link href="css/sogive-day.css" rel="stylesheet"></noscript>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
<div class="bg">
    </div>
    <div class="jumbotron">
        <div class="col-md-12 hidden-xs hidden-sm">
            <div class="col-md-offset-2 col-md-8 text-center">
                <a href="http://sogive.org">
                    <img class="logo" alt="SoGive" src="img/logo.png">
                </a>
                <p class="sogive-lead-line">
                    <i>Keep track of how you make the world a better place</i>
                </p>
                <button class="btn-lg btn-getinvolved" id="getinvolvedbutton" href="#" role="button">Get Involved</button>
            </div>
            <div class="col-md-offset-4 col-md-4 divcontact-dropin text-center" style="display:none" id="getinvolved-div">
              <form id='mailing-list' action='https://sogive.soda.sh/forms-form.json' class='form-inline'>
                  <input type='hidden' name='mlist' value='company-news,product-news,marketing'>
                  <div class='form-group'>
                      <label class=''>Get email updates</label>           
                      <input class='form-control' type='email' name='email' placeholder='Your Email'>
                  </div>
                  <button class="btn btn-primary" type='submit'>Sign up</button>
              </form>
            </div>
        </div>
        <div class="col-md-12 visible-xs visible-sm">
            <div class="col-md-offset-2 col-md-8 text-center">
                <a href="http://sogive.org">
                    <img class="logo-sm" alt="SoGive" src="img/logo.png">
                </a>
                <p class="sogive-lead-line">
                    <i>Keep track of how you make the world a better place</i>
                </p>
                <button class="btn-lg btn-getinvolved" id="getinvolvedbutton" href="#" role="button">Get Involved</button>
            </div>
            <div class="col-md-offset-4 col-md-4 divcontact-dropin text-center" style="display:none" id="getinvolved-div">
              <form id='mailing-list' action='https://sogive.soda.sh/forms-form.json' class='form-inline'>
                  <input type='hidden' name='mlist' value='company-news,product-news,marketing'>
                  <div class='form-group'>
                      <label class=''>Get email updates</label>           
                      <input class='form-control' type='email' name='email' placeholder='Your Email'>
                  </div>
                  <button class="btn btn-primary" type='submit'>Sign up</button>
              </form>
            </div>
        </div>
    </div>
        <div class="white-bg container visible-xs visible-sm">
        <div class="white-bg navbar navbar-fixed-top">
            <div class="white-bg btn-group pull-right">
                <button type="button" class="btn btn-circle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="glyphicon glyphicon-menu-hamburger"></span>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="aims.html">Our Aims</a>
                    </li>
                    <li>
                        <a href="team.html">Team</a>
                    </li>
                    <li>
                        <a href="get-involved.html">Get Involved</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/sogivecharity">Facebook</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/sogivecharity">Twitter</a>
                    </li>
                    <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="white-bg col-md-12">
    <div class="white-bg container hidden-xs hidden-sm">
        <nav class="navbar navbar-default" role="navigation">
            <div class="white-bg container">
                <div class="white-bg collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="aims.html">Our Aims</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="get-involved.html">Get Involved</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </div>

<div class="container" id='page-part2'>
  <div class="row">
    <div class="col-md-4">
      <h2>What We Do</h2>
      <p>
      SoGive shows your impact - for the donations you make via SoGive and the donations you make elsewhere.
      </p>
      <p>
	We believe that people are more inspired seeing their donations in terms like "You funded 30 malaria nets in Africa" than "You gave £100 to charity"
	</p>
    </div><!-- ./what we do -->
    <div class="col-md-4">
    	<h2>Join Us</h2>
	<p>We need early users, designers, testers, and other team members to help out.</p>
    	<p>Ready to take the next step? Get in touch with us - email <span class='email' name='sanjay' domain='sogive.org'>sanjay (at) sogive.org</span></p>
   </div>
    <div class="col-md-4">    	
      	<h2>About SoGive</h2>
      	<p>Find out about our organisation, mission, and our plans.</p>
      	<p><a class="btn btn-default" href="about.html" role="button">Read more &raquo;</a></p>
    </div><!-- ./Values -->
  </div><!-- ./row -->	
</div><!-- ./page-part2 -->