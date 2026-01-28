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
