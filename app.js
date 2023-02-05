// mobile navigation

const hamburger = document.querySelector(".hamburger");
const navMenuMobile = document.querySelector(".nav-menu-mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenuMobile.classList.toggle("active");
});

const navMenuMobileProduct = document.querySelector(".nav-menu-mobile-product");
const navSubmenuMobileProduct = document.querySelector(
  ".nav-submenu-mobile-product"
);
const faProduct = document.querySelector("#faproduct");

navMenuMobileProduct.addEventListener("click", () => {
  navSubmenuMobileProduct.classList.toggle("hide");
  faProduct.classList.toggle("turn");
});

const navMenuMobileCompany = document.querySelector(".nav-menu-mobile-company");
const navSubmenuMobileCompany = document.querySelector(
  ".nav-submenu-mobile-company"
);
const faCompany = document.querySelector("#facompany");

navMenuMobileCompany.addEventListener("click", () => {
  navSubmenuMobileCompany.classList.toggle("hide");
  faCompany.classList.toggle("turn");
});

const navMenuMobileConnect = document.querySelector(".nav-menu-mobile-connect");
const navSubmenuMobileConnect = document.querySelector(
  ".nav-submenu-mobile-connect"
);
const faConnect = document.querySelector("#faconnect");

navMenuMobileConnect.addEventListener("click", () => {
  navSubmenuMobileConnect.classList.toggle("hide");
  faConnect.classList.toggle("turn");
});

// desktop navigation bar
const navMenuProduct = document.querySelector(".nav-menu-product");
console.log(navMenuProduct);
const navSubMenuProduct = document.querySelectorAll(".nav-submenu-product");
console.log(navMenuProduct);
const faNavMenuProduct = document.querySelector("#fa-nav-menu-product");

navMenuProduct.addEventListener("click", () => {
  for (const subMenu of navSubMenuProduct) {
    subMenu.classList.toggle("hide");
  }
  faNavMenuProduct.classList.toggle("turn");
});

const navMenuCompany = document.querySelector(".nav-menu-company");
const navSubMenuCompany = document.querySelectorAll(".nav-submenu-company");
const faNavMenuCompany = document.querySelector("#fa-nav-menu-company");

navMenuCompany.addEventListener("click", () => {
  for (const subMenucompany of navSubMenuCompany) {
    subMenucompany.classList.toggle("hide");
  }
  faNavMenuCompany.classList.toggle("turn");
});

const navMenuConnect = document.querySelector(".nav-menu-connect");
const navSubMenuConnect = document.querySelectorAll(".nav-submenu-connect");
const faNavMenuConnect = document.querySelector("#fa-nav-menu-connect");

navMenuConnect.addEventListener("click", () => {
  for (const subMenuconnect of navSubMenuConnect) {
    subMenuconnect.classList.toggle("hide");
  }
  faNavMenuConnect.classList.toggle("turn");
});
