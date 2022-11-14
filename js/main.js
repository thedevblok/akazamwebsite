// const srvybutton = document.querySelector(".survey-btn");
// const end = document.querySelector(".endmsg");
// const mainform = document.querySelector(".survey_section");

// srvybutton.addEventListener("click", function() {
//     mainform.style.display = "none";
//     end.style.display = "block";
// });




// ============== SHOW NAVBAR JAVASCRIPT ============


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menuItem = document.querySelector(".menuItem");


menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// CLOSE NAV MENU
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav);
menuItem.addEventListener("click", closeNav);
// ============== END NAVBAR JAVASCRIPT ============

