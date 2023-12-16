<?php echo $this->include("includes/top.php") ?>
<?php echo $this->include("includes/header.php") ?>
<?php echo $this->include("includes/sidebar.php") ?>

<main id="main" class="main">

  <div class="pagetitle">
    <h1>All Properties</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item">Properties</li>
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
                  <th>Title</th>
                  <th>Price</th>
                  <th>Photo</th>
                  <th>Utility</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <?php foreach ($items as $item): ?>
                  <tr>
                    <td><?= $item['id'] ?></td>
                    <td><?= $item['title'] ?></td>
                    <td><?= $item['price'] ?></td>
                    <td><img src="<?= base_url('/assets/uploads/'.$item['photo'])?>" width="50px" height="50px" alt=""></td>
                    <td><?= $item['utility'] ?></td>
                    <td>
                      <a href="<?php echo base_url('/properties/edit/' . $item['id']) ?>" class="btn btn-success mx-3"><i class="fas fa-edit"></i></a>
                      <a href="<?php echo base_url('/properties/delete/' . $item['id']) ?>"
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