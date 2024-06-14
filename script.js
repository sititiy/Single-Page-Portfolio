const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    item.classList.add("active");
  });
});
