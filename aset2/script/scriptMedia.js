let isHamburgerOpen = false;

function openHamburger() {
  let menuHamburger = document.getElementById("hamburger-navbar");
  if (isHamburgerOpen) {
    menuHamburger.style.display = "none";
    isHamburgerOpen = false;
  } else {
    menuHamburger.style.display = "flex";
    menuHamburger.style.flexDirection = "column";
    menuHamburger.style.paddingTop = "15px";
    menuHamburger.style.flexDirection = "column";
    isHamburgerOpen = true;
  }
}
