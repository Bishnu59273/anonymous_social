<template>
  <div>
    <slot />
    <div class="footer_box">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <footer
              class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
            >
              <p class="col-md-4 mb-0 text-body-secondary">
                &copy; {{ new Date().getFullYear() }} Company, Inc
              </p>

              <a
                href="/"
                class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              >
                <svg class="bi me-2" width="40" height="32">
                  <use xlink:href="#bootstrap" />
                </svg>
              </a>

              <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 text-body-secondary">Home</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 text-body-secondary"
                    >Features</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 text-body-secondary"
                    >Pricing</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 text-body-secondary">FAQs</a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
