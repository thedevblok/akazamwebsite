const srvybutton = document.querySelector(".survey-btn");
const end = document.querySelector(".endmsg");
const mainform = document.querySelector(".survey_section");

srvybutton.addEventListener("click", function() {
    mainform.style.display = "none";
    end.style.display = "block";
});

