<?php echo $this->include("includes/top.php") ?>
<?php echo $this->include("includes/header.php") ?>
<?php echo $this->include("includes/sidebar.php") ?>

<main id="main" class="main">

    <div class="pagetitle">
        <h1>Add New Service</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item">Services</li>
                <li class="breadcrumb-item active">Add-service</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->
    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add Service Form</h5>
                        <?php if (session()->getFlashdata('msg') !== NULL): ?>
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                <?php echo session()->getFlashdata('msg'); ?>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                                        aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <?php endif; ?>

                        <!-- No Labels Form -->
                        <form class="row g-3" action="<?= site_url('/services/store')?>" method="post">
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="title" placeholder="Service Title">
                            </div>
                            <div class="col-md-12">
                                <textarea name="description" id="" class="form-control"
                                    placeholder="Service Description"></textarea>
                            </div>
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
<?php echo $this->include("includes/bottom.php") ?>