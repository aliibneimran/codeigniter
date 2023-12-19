<aside id="sidebar" class="sidebar">

  <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
      <a class="nav-link collapsed" href="/editor">
        <i class="bi bi-grid"></i>
        <span>Editor Dashboard</span>
      </a>
    </li>

    <!--Service-->
    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#service" data-bs-toggle="collapse" href="#">
        <i class="bi bi-menu-button-wide"></i><span>Service</span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="service" class="nav-content collapse" data-bs-parent="#sidebar-nav">
        <li><a href="<?= base_url('/editor/services') ?>"><i class="bi bi-circle"></i><span>All Services</span></a></li>
        <li><a href="<?= base_url('/editor/services/add-service') ?>"><i class="bi bi-circle"></i><span>Add
              Service</span></a></li>
      </ul>
    </li>
    <!--Property-->
    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#property" data-bs-toggle="collapse" href="#">
        <i class="bi bi-menu-button-wide"></i><span>Property</span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="property" class="nav-content collapse" data-bs-parent="#sidebar-nav">
        <li><a href="<?= base_url('/editor/properties') ?>"><i class="bi bi-circle"></i><span>All Property</span></a>
        </li>
        <li><a href="<?= base_url('/editor/properties/add-property') ?>"><i class="bi bi-circle"></i><span>Add
              Property</span></a></li>
      </ul>
    </li>
    <!--Category-->
    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#category" data-bs-toggle="collapse" href="#">
        <i class="bi bi-menu-button-wide"></i><span>Categories</span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="category" class="nav-content collapse" data-bs-parent="#sidebar-nav">
        <li><a href="<?= base_url('/editor/categories') ?>"><i class="bi bi-circle"></i><span>All Categories</span></a></li>
        <li><a href="<?= base_url('/editor/categories/add-category') ?>"><i class="bi bi-circle"></i><span>Add
              Category</span></a></li>
      </ul>
    </li>

    <!--Type-->
    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#type" data-bs-toggle="collapse" href="#">
        <i class="bi bi-menu-button-wide"></i><span>Types</span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="type" class="nav-content collapse" data-bs-parent="#sidebar-nav">
        <li><a href="<?= base_url('/editor/type') ?>"><i class="bi bi-circle"></i><span>All Type</span></a></li>
        <li><a href="<?= base_url('/editor/type/add-type') ?>"><i class="bi bi-circle"></i><span>Add Type</span></a></li>
      </ul>
    </li>

  </ul>

</aside>