
    <?php echo $this->include("includes/top.php") ?>
    <?php echo $this->include("includes/header.php") ?>
    <?php echo $this->include("includes/sidebar.php") ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>Booking Table</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Booking</li>
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
                                        <th>Order Id</th>
                                        <th>Customer Id</th>
                                        <th>Address</th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                        <th>Booking Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($items as $item): ?>
                                        <tr>
                                            <td>
                                                <?= $item['id'] ?>
                                            </td>
                                            <td>
                                                <?= $item['customer_id'] ?>
                                            </td>
                                            <td>
                                                <?= $item['address'] ?>
                                            </td>
                                            <td>
                                                <?= $item['product_name'] ?>
                                            </td>
                                            <td>
                                                <?= $item['quantity'] ?>
                                            </td>
                                            <td>
                                                <?= $item['total_price'] ?>
                                            </td>
                                            <td>
                                                <?= $item['order_date'] ?>
                                            </td>
                                            <td>
                                                <a href="" class="btn btn-success mx-2"><i class="fas fa-edit"></i></a>
                                                <a href="" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a>
                                            </td>
                                        </tr>
                                    <?php endforeach ?>
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