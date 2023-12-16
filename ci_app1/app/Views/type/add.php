<?php echo $this->include("includes/top.php") ?>
<?php echo $this->include("includes/header.php") ?>
<?php echo $this->include("includes/sidebar.php") ?>

<main id="main" class="main">

    <div class="pagetitle">
        <h1>Add New Type</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item">Type</li>
                <li class="breadcrumb-item active">Add-type</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->
    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add Type</h5>
                        <?php if (session()->getFlashdata('msg') !== NULL): ?>
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                <?php echo session()->getFlashdata('msg'); ?>
                            </div>
                        <?php endif; ?>

                        <!-- No Labels Form -->
                        <form class="row g-3" action="<?= site_url('/type/store')?>" method="post">
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="name" placeholder="Type Name">
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Add</button>
                                <button type="reset" class="btn btn-secondary">Reset</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php echo $this->include("includes/footer.php") ?>
<?php echo $this->include("includes/bottom.php") ?>