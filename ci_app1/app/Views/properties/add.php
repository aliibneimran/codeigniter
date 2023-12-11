<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Forms</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

 <!-- Favicons -->
 <link href="<?php echo site_url('assets/img/favicon.png')?>" rel="icon">
    <link href="<?php echo site_url('assets/img/apple-touch-icon.png')?>" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="<?php echo site_url('assets/vendor/bootstrap/css/bootstrap.min.css')?>" rel="stylesheet">
    <link href="<?php echo site_url('assets/vendor/bootstrap-icons/bootstrap-icons.css')?>" rel="stylesheet">
    <link href="<?php echo site_url('assets/vendor/boxicons/css/boxicons.min.css')?>" rel="stylesheet">
    <link href="<?php echo site_url('assets/vendor/quill/quill.snow.css')?>" rel="stylesheet">
    <link href="<?php echo site_url('assets/vendor/quill/quill.bubble.css')?>" rel="stylesheet">
    <link href="<?php echo site_url('assets/vendor/remixicon/remixicon.css')?>" rel="stylesheet">
    <link href="<?php echo site_url('assets/vendor/simple-datatables/style.css')?>" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="<?php echo site_url('assets/css/style.css')?>" rel="stylesheet">
</head>

<body>

    <?php echo $this->include("includes/header.php") ?>
    <?php echo $this->include("includes/sidebar.php") ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>Add New Property</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item">Property</li>
                    <li class="breadcrumb-item active">Add-property</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->
        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Add Property Form</h5>

                            <!-- No Labels Form -->
                            <form class="row g-3" action="/properties/store" method="post" enctype="multipart/form-data">

                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="title" placeholder="Property Title">
                                </div>
                                <div class="col-md-12">
                                    <textarea name="description" id="" class="form-control" placeholder="Property Description"></textarea>
                                </div>
                                <div class="col-md-4">
                                    <select id="inputState" name="cat" class="form-select">
                                        <option selected>Category</option>
                                        <?php foreach($cats as $cat):?>
                                          <option value="<?= $cat['id']?>"><?= $cat['category'] ?></option>
                                        <?php endforeach;?>
                                        <!-- <option value="Apartments">Apartments</option>
                                        <option value="Condominium">Condominium</option>
                                        <option value="Duplex">Duplex</option>
                                        <option value="Houses">Houses</option>
                                        <option value="Industrial">Industrial</option>
                                        <option value="Land">Land</option>
                                        <option value="Offices">Offices</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Villas">Villas</option> -->
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select id="inputState" name="type" class="form-select">
                                        <option selected>Type</option>
                                        <option value="Rentals">Rentals</option>
                                        <option value="Sales">Sales</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select id="inputState" name="status" class="form-select">
                                        <option selected>Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Hot Offer">Hot Offer</option>
                                        <option value="New Offer">New Offer</option>
                                        <option value="Open House">Open House</option>
                                        <option value="Sold">Sold</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="size" placeholder="Size">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" class="form-control" name="bed" placeholder="No. of Bed">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" class="form-control" name="bath" placeholder="No. of Bath">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" class="form-control" name="floor" placeholder="Floor number">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="address" placeholder="Address">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="city" placeholder="City">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="country" placeholder="Country">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" class="form-control" name="zip" placeholder="Zip">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" class="form-control" name="price" placeholder="Price">
                                </div>
                                <div class="col-md-6">
                                    <input type="file" class="form-control" name="photo" placeholder="Property Photo">
                                </div>
                                <!-- <div class="col-md-12">
                                <h5 class="card-title">Utilities :</h5> 
                                    <input type="checkbox" name="utility[]" value="Central Air" class="mx-2"> 
                                    <label>Central Air</label>
                                    <input type="checkbox" name="utility[]" value="Electricity" class="mx-2"> 
                                    <label>Electricity</label>
                                    <input type="checkbox" name="utility[]" value="Heating" class="mx-2"> 
                                    <label>Heating</label>
                                    <input type="checkbox" name="utility[]" value="Natural Gas" class="mx-2"> 
                                    <label>Natural Gas</label>
                                    <input type="checkbox" name="utility[]" value="Ventilation" class="mx-2"> 
                                    <label>Ventilation</label>
                                    <input type="checkbox" name="utility[]" value="Water" class="mx-2"> 
                                    <label>Water</label>
                                </div> -->
                                <!-- <div class="col-md-12">
                                <h5 class="card-title">Interior Details :</h5>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Equipped Kitchen </label>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Gym</label>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Laundry </label>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Media Room</label>
                                </div>
                                <div class="col-md-12">
                                <h5 class="card-title">Outdoor Details :</h5> 
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Back yard</label>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Basketball court</label>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Front yard</label>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Garage Attached</label>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Hot Bath</label>
                                    <input type="checkbox" class="mx-2"> 
                                    <label>Pool</label>
                                </div> -->
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">Add</button>
                                    <button type="reset" class="btn btn-secondary">Reset</button>
                                </div>
                            </form><!-- End No Labels Form -->


                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <?php echo $this->include("includes/footer.php") ?>

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="<?php echo site_url('assets/vendor/apexcharts/apexcharts.min.js')?>"></script>
    <script src="<?php echo site_url('assets/vendor/bootstrap/js/bootstrap.bundle.min.js')?>"></script>
    <script src="<?php echo site_url('assets/vendor/chart.js/chart.umd.js')?>"></script>
    <script src="<?php echo site_url('assets/vendor/echarts/echarts.min.js')?>"></script>
    <script src="<?php echo site_url('assets/vendor/quill/quill.min.js')?>"></script>
    <script src="<?php echo site_url('assets/vendor/simple-datatables/simple-datatables.js')?>"></script>
    <script src="<?php echo site_url('assets/vendor/tinymce/tinymce.min.js')?>"></script>
    <script src="<?php echo site_url('assets/vendor/php-email-form/validate.js')?>"></script>

    <!-- Template Main JS File -->
    <script src="<?php echo site_url('assets/js/main.js')?>"></script>
</body>

</html>