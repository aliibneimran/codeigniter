<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Products</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <link href="../assets/img/favicon.png" rel="icon">
  <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.3.1/css/all.min.css" />

  <!-- Vendor CSS Files -->
  <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="../assets/vendor/quill/quill.snow.css" rel="stylesheet">
  <link href="../assets/vendor/quill/quill.bubble.css" rel="stylesheet">
  <link href="../assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="../assets/vendor/simple-datatables/style.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="<?php echo site_url('assets/css/style.css')?>" rel="stylesheet">

</head>

<body>

    <?php echo $this->include("includes/header.php")?>
    <?php echo $this->include("includes/sidebar.php")?>


  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Products Table</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">Products</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <?php if (session()->getFlashdata('msg') !== NULL): ?>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <?php echo session()->getFlashdata('msg'); ?>
                  <button type="button" class="btn close" data-dismiss="alert" aria-label="Close"><span
                      aria-hidden="true">&times;</span>
                  </button>
                </div>
              <?php endif; ?>
              <!-- Table with stripped rows -->
              <table class="table datatable"> 
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Photo</th>
                    <th>Catagory</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Model</th>
                    <th>Utility</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach ($items as $item): ?>
                    <tr>
                      <td><?php echo $item['id'] ?></td>
                      <td><img src="<?php echo base_url('/assets/uploads/'.$item['photo'])?>" width="50px" height="50px" alt=""></td>
                      <td><?php echo $item['product'] ?></td>
                      <td><?php echo $item['category'] ?></td>
                      <td><?php echo $item['price'] ?></td>
                      <td><?php echo $item['sku'] ?></td>
                      <td><?php echo $item['model'] ?></td>
                      <td><?php echo $item['utility'] ?></td>
                      <td>
                        <a href="<?php echo base_url('/products/edit/' . $item['id']) ?>" class="btn btn-success mx-3"><i class="fas fa-edit"></i></a>
                        <a href="<?php echo base_url('/products/delete/' . $item['id']) ?>" onclick="return confirm('Are you sure to delete ?')" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a>
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

  <?php echo $this->include("includes/footer.php")?>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/chart.js/chart.umd.js"></script>
  <script src="assets/vendor/echarts/echarts.min.js"></script>
  <script src="assets/vendor/quill/quill.min.js"></script>
  <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
  <script src="assets/vendor/tinymce/tinymce.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>