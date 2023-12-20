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
                        <form class="row g-3" action="<?= site_url('properties/update/' . $items['id']) ?>"
                            method="post" enctype="multipart/form-data">

                            <div class="col-md-12">
                                <input type="text" class="form-control" name="title" value="<?= $items['title'] ?>"
                                    placeholder="Property Title">
                            </div>
                            <div class="col-md-12">
                                <textarea name="description" id="" class="tinymce-editor"
                                    placeholder="Property Description"><?= $items['description'] ?></textarea>
                            </div>
                            <div class="col-md-4">
                                <select id="inputState" name="cat" class="form-select">
                                    <option selected>Category</option>
                                    <!-- <option value="" selected>123</option> -->
                                    <?php foreach ($cats as $cat): ?>
                                        <?= $selected = ($cat['c_id'] == $items['category_id']) ? 'selected' : ''; ?>
                                        <option value="<?= $cat['c_id'] ?>" <?= $selected ?>>
                                            <?= $cat['category'] ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select id="inputState" name="type" class="form-select">
                                    <option selected>Type</option>
                                    <?php foreach ($types as $type): ?>
                                        <?= $selected = ($type['t_id'] == $items['type_id']) ? 'selected' : ''; ?>
                                        <option value="<?= $type['t_id'] ?>" <?= $selected ?>>
                                            <?= $type['type'] ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select id="inputState" name="status" class="form-select">
                                    <option selected>Status</option>
                                    <?php foreach ($status as $sts): ?>
                                        <?= $selected = ($sts['s_id'] == $items['status_id']) ? 'selected' : ''; ?>
                                        <option value="<?= $sts['s_id'] ?>" <?= $selected ?>>
                                            <?= $sts['status'] ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="size" value="<?= $items['size'] ?>"
                                    placeholder="Size">
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="bed" value="<?= $items['bed'] ?>"
                                    placeholder="No. of Bed">
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="bath" value="<?= $items['bath'] ?>"
                                    placeholder="No. of Bath">
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="floor" value="<?= $items['floor'] ?>"
                                    placeholder="Floor number">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="address" value="<?= $items['address'] ?>"
                                    placeholder="Address">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="city" value="<?= $items['city'] ?>"
                                    placeholder="City">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="country" value="<?= $items['country'] ?>"
                                    placeholder="Country">
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="zip" value="<?= $items['zip'] ?>"
                                    placeholder="Zip">
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="price" value="<?= $items['price'] ?>"
                                    placeholder="Price">
                            </div>
                            <div class="col-md-6">
                                <input type="file" class="form-control" name="photo" value="<?= $items['photo'] ?>"
                                    placeholder="Property Photo">
                            </div>
                            <div class="col-md-12">
                                <h5 class="card-title">Utilities :</h5>
                                <?php
                                $selectedUtilities = explode(',', $items['utility']);
                                $utilitiesOptions = ['Central Air', 'Electricity', 'Heating', 'Natural Gas', 'Ventilation', 'Water'];

                                foreach ($utilitiesOptions as $utility): ?>
                                    <input type="checkbox" name="utility[]" value="<?= $utility ?>" class="mx-2"
                                        <?= in_array($utility, $selectedUtilities) ? 'checked' : '' ?>>
                                    <label>
                                        <?= $utility ?>
                                    </label>
                                <?php endforeach; ?>
                                <!-- <input type="checkbox" name="utility[]" value="Central Air" class="mx-2">
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
                                <label>Water</label> -->
                            </div>
                            <div class="col-md-12">
                                <h5 class="card-title">Interior Details :</h5>
                                <input type="checkbox" name="interior[]" value="Equipped Kitchen" class="mx-2">
                                <label>Equipped Kitchen </label>
                                <input type="checkbox" name="interior[]" value="Gym" class="mx-2">
                                <label>Gym</label>
                                <input type="checkbox" name="interior[]" value="Laundry" class="mx-2">
                                <label>Laundry </label>
                                <input type="checkbox" name="interior[]" value="Media Room" class="mx-2">
                                <label>Media Room</label>
                            </div>
                            <div class="col-md-12">
                                <h5 class="card-title">Outdoor Details :</h5>
                                <input type="checkbox" name="outdoor[]" value="Back Yard" class="mx-2">
                                <label>Back Yard</label>
                                <input type="checkbox" name="outdoor[]" value="Basketball Court" class="mx-2">
                                <label>Basketball Court</label>
                                <input type="checkbox" name="outdoor[]" value="Front Yard" class="mx-2">
                                <label>Front Yard</label>
                                <input type="checkbox" name="outdoor[]" value="Garage Attached" class="mx-2">
                                <label>Garage Attached</label>
                                <input type="checkbox" name="outdoor[]" value="Hot Bath" class="mx-2">
                                <label>Hot Bath</label>
                                <input type="checkbox" name="outdoor[]" value="Pool" class="mx-2">
                                <label>Pool</label>
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