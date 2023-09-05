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


// function scrollGallery(selector, value) {
//     document.querySelector(selector).scrollBy({
//         left: value,
//         behavior: 'smooth'
//     });
// }

// document.getElementById("prevBtn").addEventListener("click", function() {
//     scrollGallery(".photos", -200);  // For photos
//     scrollGallery(".videos", -330);  // For videos (320 + 10 margin)
// });

// document.getElementById("nextBtn").addEventListener("click", function() {
//     scrollGallery(".photos", 200);   // For photos
//     scrollGallery(".videos", 330);   // For videos (320 + 10 margin)
// });



document.getElementById("prevBtn").addEventListener("click", function() {
    document.querySelector(".photos").scrollBy({
        left: -200, // This value can be adjusted based on how much you want to scroll
        behavior: 'smooth'
    });
});

document.getElementById("nextBtn").addEventListener("click", function() {
    document.querySelector(".photos").scrollBy({
        left: 200, // This value can be adjusted based on how much you want to scroll
        behavior: 'smooth'
    });
 });

 document.getElementById("videoPrevBtn").addEventListener("click", function() {
    document.querySelector(".videos").scrollBy({
        left: -330, // Adjust as needed (320 + 10 margin)
        behavior: 'smooth'
    });
});

document.getElementById("videoNextBtn").addEventListener("click", function() {
    document.querySelector(".videos").scrollBy({
        left: 330, // Adjust as needed (320 + 10 margin)
        behavior: 'smooth'
    });
});
