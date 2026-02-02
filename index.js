// Set active menu item based on current page
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (`${href}/` === currentPath || currentPath.startsWith(href)) {
    const parentLi = link.closest("li");
    const indicator = link.querySelector("span");

    if (parentLi) {
      parentLi.setAttribute("data-active", "true");
    }

    if (indicator) {
      indicator.setAttribute("data-active", "true");
    }
  }
});

// Set active breadcrumb item based on current page
const breadcrumbLinks = document.querySelectorAll(
  "nav[aria-label='breadcrumb'] a",
);
breadcrumbLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const parentLi = link.closest("li");

  if (
    href === currentPath ||
    `${href}/` === currentPath ||
    href === `${currentPath}/`
  ) {
    parentLi.classList.add("font-bold", "text-white");
    parentLi.classList.remove("font-light", "text-light-gray");
  }
});

// Set active item based on hovered menu item
document.addEventListener("DOMContentLoaded", function () {
  const navDropdowns = document.querySelectorAll(".nav-dropdown");

  navDropdowns.forEach((dropdown) => {
    const menuItems = dropdown.querySelectorAll(".menu-item[data-tab]");
    const contentItems = dropdown.querySelectorAll(".menu-item-content");

    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        const tabName = this.getAttribute("data-tab");

        menuItems.forEach((menuItem) => {
          menuItem.classList.remove("active");
        });

        this.classList.add("active");

        contentItems.forEach((content) => {
          content.classList.remove("active");
        });

        const activeContent = dropdown.querySelector(
          `.menu-item-content[data-content="${tabName}"]`,
        );
        if (activeContent) {
          activeContent.classList.add("active");
        }
      });
    });
  });
});

// Show search dropdown on search button click
const searchButton = document.getElementById("search-button");
const searchDropdown = document.getElementById("search-dropdown");
const dropdowns = document.querySelectorAll(".nav-dropdown");

searchButton.addEventListener("click", () => {
  searchDropdown.classList.add("show");
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("show");
  });
});

// Hide search dropdown on close icon click
const closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", () => {
  searchDropdown.classList.remove("show");
});

// Hide search dropdown when clicking outside
const searchDropdownContent = document.querySelector(
  ".search-dropdown-content",
);
document.addEventListener("click", (e) => {
  if (
    !searchDropdownContent.contains(e.target) &&
    !searchButton.contains(e.target)
  ) {
    searchDropdown.classList.remove("show");
  }
});

// Hide search dropdown when hovering over nav items
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((navItem) => {
  navItem.addEventListener("mouseenter", () => {
    searchDropdown.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const desktopNavItems = document.querySelectorAll(
    ".hidden.md\\:block .nav-item",
  );
  const allDropdowns = document.querySelectorAll(".nav-dropdown");
  const searchDropdown = document.getElementById("search-dropdown");

  desktopNavItems.forEach((navItem) => {
    const dropdown = navItem.querySelector(".nav-dropdown");
    if (dropdown) {
      navItem.addEventListener("click", (e) => {
        if (e.target.tagName === "A") return;

        e.stopPropagation();

        searchDropdown.classList.remove("show");

        const isShown = dropdown.classList.contains("show");

        allDropdowns.forEach((d) => {
          d.classList.remove("show");
        });

        if (!isShown) {
          dropdown.classList.add("show");
        }
      });
    }
  });

  allDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  document.addEventListener("click", (e) => {
    const clickedInsideMobileNav = e.target.closest("#mobile-nav-bar");

    if (!clickedInsideMobileNav) {
      desktopNavItems.forEach((navItem) => {
        const dropdown = navItem.querySelector(".nav-dropdown");
        if (dropdown) {
          dropdown.classList.remove("show");
        }
      });
    }
  });

  desktopNavItems.forEach((navItem) => {
    navItem.addEventListener("mouseenter", () => {
      searchDropdown.classList.remove("show");
    });
  });
});

// Show mobile nav bar on hamburger button click
const hamburgerButton = document.getElementById("hamburger-btn");
const mobileNavbar = document.getElementById("mobile-nav-bar");
hamburgerButton.addEventListener("click", () => {
  mobileNavbar.classList.remove("hide");
  mobileNavbar.classList.add("show");
});

// Hide mobile nav bar on close button click
const closeMobileNavBarButton = document.getElementById("close-mobile-bar-btn");
closeMobileNavBarButton.addEventListener("click", () => {
  mobileNavbar.classList.remove("show");
  mobileNavbar.classList.add("hide");
});

// Hide mobile nav bar when clicking outside the mobile navbar
mobileNavbar.addEventListener("click", (event) => {
  if (event.target === mobileNavbar) {
    mobileNavbar.classList.remove("show");
    mobileNavbar.classList.add("hide");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileItems = document.querySelectorAll(".mobile-menu-item");
  const mobileNav = document.getElementById("mobile-nav-bar");
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  mobileItems.forEach((item) => {
    item.addEventListener("click", () => {
      const dropdownType = item.getAttribute("data-mobile-menu");

      mobileNav.classList.add("hide");
      mobileNav.classList.remove("show");

      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("show");
      });

      const targetDropdown = document.querySelector(
        `.nav-dropdown[data-mobile-dropdown="${dropdownType}"]`,
      );
      if (targetDropdown) {
        targetDropdown.classList.add("show");
      }
    });
  });

  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const contentType = item.getAttribute("data-tab");

      const parentDropdown = item.closest(".nav-dropdown");

      parentDropdown.querySelectorAll(".menu-item").forEach((menuItem) => {
        menuItem.classList.remove("active");
      });

      item.classList.add("active");

      const targetContent = document.querySelector(
        `.menu-item-content[data-mobile-content="${contentType}"]`,
      );

      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  const closeMobileDropdownBtns = document.querySelectorAll(
    ".close-mobile-dropdown-btn",
  );

  closeMobileDropdownBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("show");
      });
    });
  });
});
