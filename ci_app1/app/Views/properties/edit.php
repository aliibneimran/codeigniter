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
        <h1>Edit Property</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item">Property</li>
                <li class="breadcrumb-item active">Edit-property</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->
    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Edit Property Form</h5>

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
                                    <input type="checkbox" name="utility[]" value="<?= $utility ?>" class="mx-2" <?php foreach ($selectedUtilities as $uti):
                                          echo ($uti == $utility) ? 'checked' : '';
                                      endforeach; ?>>
                                    <label>
                                        <?= $utility ?>
                                    </label>
                                <?php endforeach; ?>
                            </div>
                            <div class="col-md-12">  
                                <h5 class="card-title">Interior Details :</h5>
                                <?php
                                $selectedInteriors = explode(',', $items['interior']);
                                $interiorOptions = ['Equipped Kitchen', 'Gym', 'Laundry', 'Media Room'];
                                foreach ($interiorOptions as $interior): ?>
                                    <input type="checkbox" name="interior[]" value="<?= $interior ?>" class="mx-2" <?php foreach ($selectedInteriors as $int):
                                          echo ($int == $interior) ? 'checked' : '';
                                      endforeach; ?>>
                                    <label>
                                        <?= $interior ?>
                                    </label>
                                <?php endforeach; ?>
                            </div>
                            <div class="col-md-12">
                                <h5 class="card-title">Outdoor Details :</h5>
                                <?php
                                $selectedOutdoors = explode(',', $items['outdoor']);
                                $outdoorOptions = ['Back Yard', 'Basketball Court', 'Front Yard', 'Garage Attached','Hot Bath','Pool'];
                                foreach ($outdoorOptions as $outdoor): ?>
                                    <input type="checkbox" name="outdoor[]" value="<?= $outdoor ?>" class="mx-2" <?php foreach ($selectedOutdoors as $out):
                                          echo ($out == $outdoor) ? 'checked' : '';
                                      endforeach; ?>>
                                    <label>
                                        <?= $outdoor ?>
                                    </label>
                                <?php endforeach; ?>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Update</button>
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