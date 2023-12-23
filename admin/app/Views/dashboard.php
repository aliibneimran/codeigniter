<?php echo $this->include("includes/top.php") ?>
<?php echo $this->include("includes/header.php") ?>
<?php
if (session()->get('user_role') == 'admin') {
  echo $this->include("includes/sidebar.php");
}
if (session()->get('user_role') == 'editor') {
  echo $this->include("includes/editor_sidebar.php");
}
?>

<main id="main" class="main">

  <div class="pagetitle">
    <h1>Dashboard</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
    </nav>
  </div><!-- End Page Title -->

  <section class="section dashboard">
    <div class="row">
      <?php
      if (session()->get('user_role') == 'admin'):
      ?>
      <div class="col-xxl-4 col-md-4">
        <div class="card info-card customers-card">
          <div class="card-body">
            <h5 class="card-title">Booking</h5>
            <div class="d-flex align-items-center">
              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i class="fas fa-store"></i>
              </div>
              <div class="ps-3">
                <h6>
                  <?= $totalOrder ?>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php endif?>
      <div class="col-xxl-4 col-md-4">
        <div class="card info-card sales-card">
          <div class="card-body">
            <h5 class="card-title">Properties</h5>
            <div class="d-flex align-items-center">
              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i class="fas fa-dolly-flatbed"></i>
              </div>
              <div class="ps-3">
                <h6>
                  <?= $totalProperty ?>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-4 col-md-4">
        <div class="card info-card revenue-card">
          <div class="card-body">
            <h5 class="card-title">Services</h5>

            <div class="d-flex align-items-center">
              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i class="fas fa-info"></i>
              </div>
              <div class="ps-3">
                <h6>
                  <?= $totalService ?>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-4 col-md-4">
        <div class="card info-card customers-card">
          <div class="card-body">
            <h5 class="card-title">Categories</h5>
            <div class="d-flex align-items-center">
              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i class="fas fa-info-circle"></i>
              </div>
              <div class="ps-3">
                <h6>
                  <?= $totalCategory ?>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-md-4">
        <div class="card info-card customers-card">
          <div class="card-body">
            <h5 class="card-title">Types</h5>
            <div class="d-flex align-items-center">
              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i class="fas fa-info-circle"></i>
              </div>
              <div class="ps-3">
                <h6>
                  <?= $totalType ?>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

  </section>

</main>
<!-- End #main -->

<?php echo $this->include("includes/footer.php") ?>
<?php echo $this->include("includes/bottom.php") ?>