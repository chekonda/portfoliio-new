document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function toggleMenu() {
  var menuItems = document.querySelector("nav ul");
  if (menuItems.style.display === "flex") {
    menuItems.style.display = "none";
  } else {
    menuItems.style.display = "flex";
  }
}
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// function toggleMenu() {
//   var menuItems = document.querySelector("nav ul");
//   if (menuItems.style.display === "flex") {
//     menuItems.style.display = "none";
//   } else {
//     menuItems.style.display = "flex";
//   }
// }
function toggleMenu() {
  var menuItems = document.querySelector("nav ul");
  if (window.innerWidth <= 760) {
    if (menuItems.style.display === "flex") {
      menuItems.style.display = "none";
    } else {
      menuItems.style.display = "flex";
    }
  }
}


document.addEventListener("DOMContentLoaded", function () 
{
  const paragraphs = document.querySelectorAll("#about p");

  console.log(paragraphs); // Check if paragraphs are selected

  let delay = 0;

  // Animate paragraphs
  paragraphs.forEach(paragraph =>
  {
    setTimeout(() => {
      paragraph.classList.add("show");
    }, delay);
    delay += 500; // Increment delay for each paragraph animation
  });


});

// function toggleMenu() {
//   var menuItems = document.querySelector("nav ul");
//   if (menuItems.style.display === "flex") {
//     menuItems.style.display = "none";
//   } else {
//     menuItems.style.display = "flex";
//   }
// }
// function toggleMenu() {
//   var menuItems = document.querySelector("nav ul");
//   if (window.innerWidth <= 760) {
//     if (menuItems.style.display === "flex") {
//       menuItems.style.display = "none";
//     } else {
//       menuItems.style.display = "flex";
//     }
//   }
// }

// JavaScript
// document.querySelector('.menu-icon').addEventListener('click', function () {
//   var nav = document.querySelector('nav');
//   nav.classList.toggle('full-screen');
// });

// document.querySelectorAll('nav a').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       var nav = document.querySelector('nav');
//       nav.classList.remove('full-screen');

//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute('href'));
//       target.scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () 
// {
//   const paragraphs = document.querySelectorAll("#about p");

//   console.log(paragraphs); // Check if paragraphs are selected

//   let delay = 0;

//   // Animate paragraphs
//   paragraphs.forEach(paragraph =>
//   {
//     setTimeout(() => {
//       paragraph.classList.add("show");
//     }, delay);
//     delay += 500; // Increment delay for each paragraph animation
//   });


// });




