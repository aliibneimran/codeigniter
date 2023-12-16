<?php echo $this->include("includes/top.php") ?>
<?php echo $this->include("includes/header.php") ?>
<?php echo $this->include("includes/sidebar.php") ?>

<main id="main" class="main">

  <div class="pagetitle">
    <h1>Service Table</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item">Services</li>
      </ol>
    </nav>
  </div><!-- End Page Title -->

  <section class="section">
    <div class="row">
      <div class="col-lg-12">

        <div class="card">
          <div class="card-body">
            <!-- Table with stripped rows -->
            <table class="table datatable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Service</th>
                  <th>Describe</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <?php foreach ($items as $item): ?>
                  <tr>
                    <td>
                      <?php echo $item['id'] ?>
                    </td>
                    <td>
                      <?php echo $item['title'] ?>
                    </td>
                    <td class="flex-wrap">
                      <?php echo $item['description'] ?>
                    </td>
                    <td>
                      <a href="<?php echo base_url('/services/edit/' . $item['id']) ?>" class="btn btn-success mx-3"><i class="fas fa-edit"></i></a>
                      <a href="<?php echo base_url('/services/delete/' . $item['id']) ?>"
                        onclick="return confirm('Are you sure to delete ?')" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a>
                    </td>
                  </tr>
                <?php endforeach; ?>
              </tbody>
            </table>
            <!-- End Table with stripped rows -->

          </div>
        </div>

      </div>
    </div>
  </section>

</main>

<?php echo $this->include("includes/footer.php") ?>
<?php echo $this->include("includes/bottom.php") ?>