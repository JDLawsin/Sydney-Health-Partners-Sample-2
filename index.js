const { createIcons, Search, ChevronRight } = lucide;

// Include only the icons you need.
createIcons({
  icons: {
    Search,
    ChevronRight,
  },
});

// Set active menu item based on current page
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (`${href}/` === currentPath || currentPath.startsWith(href)) {
    const indicator = link.querySelector("span");

    if (indicator) {
      indicator.classList.remove("hidden");
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
