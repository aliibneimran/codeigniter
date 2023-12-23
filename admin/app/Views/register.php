<?php echo $this->include("includes/top.php") ?>

<main>
  <div class="container">

    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <div class="d-flex justify-content-center py-4">
              <a href="index.html" class="logo d-flex align-items-center w-auto">
                <img src="<?php echo base_url('assets/img/logo.png') ?>" alt="">
                <span class="d-none d-lg-block">Admin</span>
              </a>
            </div><!-- End Logo -->

            <div class="card mb-3">

              <div class="card-body">

                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                  <p class="text-center small">Enter your personal details to create account</p>
                </div>
                <?php if (session()->getFlashdata('msg') !== NULL): ?>
                  <div class="alert alert-danger" role="alert">
                    <?php echo session()->getFlashdata('msg'); ?>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                    </button>
                  </div>
                <?php endif; ?>
                <form class="row g-3 needs-validation" novalidate action="<?= site_url('/register/store') ?>"
                  method="post">
                  <div class="col-12">
                    <label for="yourName" class="form-label">Your Name</label>
                    <input type="text" name="name" class="form-control" id="yourName" required>
                    <div class="invalid-feedback">Please, enter your name!</div>
                    <span class="text-danger">
                      <?php if (isset($validation))
                        echo $validation->getError('name'); ?>
                    </span>
                  </div>

                  <div class="col-12">
                    <label for="yourEmail" class="form-label">Your Email</label>
                    <input type="email" name="email" class="form-control" id="yourEmail" required>
                    <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    <span class="text-danger">
                      <?php if (isset($validation))
                        echo $validation->getError('email'); ?>
                    </span>
                  </div>

                  <div class="col-12">
                    <label for="yourPassword" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="yourPassword" required>
                    <div class="invalid-feedback">Please enter your password!</div>
                    <span class="text-danger">
                      <?php if (isset($validation))
                        echo $validation->getError('password'); ?>
                    </span>
                  </div>
                  <div class="col-12">
                    <label for="yourPassword" class="form-label">Conform Password</label>
                    <input type="password" name="confirmpassword" class="form-control" id="yourPassword" required>
                    <div class="invalid-feedback">Please enter your password!</div>
                    <span class="text-danger">
                      <?php if (isset($validation))
                        echo $validation->getError('password'); ?>
                    </span>
                  </div>

                  <!-- <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required>
                        <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div> -->
                  <div class="col-12">
                    <button class="btn btn-primary w-100" type="submit">Create Account</button>
                  </div>
                  <div class="col-12">
                    <p class="small mb-0">Already have an account? <a href="/login">Log in</a></p>
                  </div>
                </form>

              </div>
            </div>

            <div class="credits">
              <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
            </div>

          </div>
        </div>
      </div>

    </section>

  </div>
</main>

<?php echo $this->include("includes/bottom.php") ?>