// function toggleContent(contentId) {
//   var content = document.getElementById(contentId);
//   var arrow = content.previousElementSibling.querySelector('.arrow');

//   if (content.style.display === "none" || content.style.display === "") {
//     content.style.display = "block";
//     arrow.innerHTML = "&#x25B2;"; //arrow up
//   } else {
//     content.style.display ="none";
//     arrow.innerHTML = "&#x25BC;";  //arrow down
//   }
// }

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});



document.addEventListener('DOMContentLoaded', function() {
  var toggles = document.querySelectorAll(".toggle");

  toggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {

        // Avoid triggering the toggle functionality if the click is inside a nested toggle
        if (e.target.closest('.toggle') !== toggle) {
            return;
        }
          // Ensure only the direct child ul is targeted, not all nested uls
          var nestedUl = e.currentTarget.querySelector(":scope > ul, :scope > ol");
          var arrow = e.currentTarget.querySelector(".arrow");

          if (nestedUl.style.display === "none" || nestedUl.style.display === "") {
              nestedUl.style.display = "block";
              arrow.innerHTML = "&#x25B2;"; // Up arrow
          } else {
              nestedUl.style.display = "none";
              arrow.innerHTML = "&#x25BC;"; // Down arrow
          }
      });
  });
});
