<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute bg-primary">
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <div class="navbar-toggle">
            <button type="button" class="navbar-toggler">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <a class="navbar-brand" href="#pablo">Login Page</a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="../dashboard.html" class="nav-link">
                <i class="now-ui-icons design_app"></i> Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a href="register.html" class="nav-link">
                <i class="now-ui-icons tech_mobile"></i> Register
              </a>
            </li>
            <li class="nav-item active">
              <a href="login.html" class="nav-link">
                <i class="now-ui-icons users_circle-08"></i> Login
              </a>
            </li>
            <li class="nav-item">
              <a href="pricing.html" class="nav-link">
                <i class="now-ui-icons now-ui-icons business_money-coins"></i> Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="lock.html" class="nav-link">
                <i class="now-ui-icons ui-1_lock-circle-open"></i> Lock
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    <div class="wrapper wrapper-full-page">
      <div
        class="full-page login-page section-image"
        filter-color="black"
      >
        <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
        <div class="content">
          <div class="container">
            <div class="col-md-4 ml-auto mr-auto">
              <form class="form" method action>
                <div class="card card-login card-plain">
                  <div class="card-header">
                    <div class="logo-container">
                      <img src="~/assets/img/now-logo.png" alt />
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="input-group no-border form-control-lg">
                      <span class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="now-ui-icons users_circle-08"></i>
                        </div>
                      </span>
                      <input type="text" class="form-control" placeholder="First Name..." />
                    </div>
                    <div class="input-group no-border form-control-lg">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="now-ui-icons text_caps-small"></i>
                        </div>
                      </div>
                      <input type="text" placeholder="Last Name..." class="form-control" />
                    </div>
                  </div>
                  <div class="card-footer">
                    <a
                      href="#pablo"
                      class="btn btn-primary btn-round btn-lg btn-block mb-3"
                    >Get Started</a>
                    <div class="pull-left">
                      <h6>
                        <a href="#pablo" class="link footer-link">Create Account</a>
                      </h6>
                    </div>
                    <div class="pull-right">
                      <h6>
                        <a href="#pablo" class="link footer-link">Need Help?</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container-fluid">
            <nav>
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">Creative Tim</a>
                </li>
                <li>
                  <a href="http://presentation.creative-tim.com">About Us</a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">Blog</a>
                </li>
              </ul>
            </nav>
            <div class="copyright" id="copyright">
              &copy;
              {{ seen }}, Designed by
              <a href="https://www.invisionapp.com" target="_blank">Invision</a>. Coded by
              <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
            </div>
          </div>
        </footer>
        <div class="full-page-background" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
      </div>
    </div>
  </div>
</template>
<script>

import backgroundUrl from '~/assets/img/bg14.jpg'

export default {
  data () {
    return {
      seen: new Date().getFullYear(),
      backgroundUrl
    }
  },
  mounted() {
    // var $page = $('.full-page');
    // var image_src = $page.data('image');

    // if (image_src !== undefined) {
    //   var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
    //   $page.append(image_container);
    // }
  }
}
</script>
<style>
/* .full-page-background{
  background-image:url('./assets/img/bg14.jpg');
} */
</style>

