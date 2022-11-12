// Adding a box shadow to the Header Content after we scroll
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
});

// Generating random text color after each click of the title
const generateRandomColor = () => {
  // Converts integer to hex
  const colToHex = (c) => {
    // Hack so colors are bright enough
    let color = c < 75 ? c + 75 : c;
    let hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  // uses colToHex to concatenate
  // a full 6 digit hex code
  const rgbToHex = (r, g, b) => {
    return "#" + colToHex(r) + colToHex(g) + colToHex(b);
  };

  //   Returns three random 0-255 integers
  const getRandomColor = () => {
    return rgbToHex(
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    );
  };

  let color = getRandomColor();
  let color2 = getRandomColor();

  // Set the text
  document.querySelector("#myName").style.color = color;
  document.querySelector("#myCurrentRole").style.color = color2;
};

document.querySelector("#title").addEventListener("click", () => {
  generateRandomColor();
});

/** This below was a function to generate individual colors for each letter of the text. However, it only worked for the first instance i.e after the first click. After each onclick event however, there was a nasty bug that involves span elements that are out of control. If you are reading this, and ever figure it out, please let me know. I would very much like to know how you figured it out, that is why I'm leaving this long, boring letter here. :) To try it out, just cooment out the working function, and un-comment this one. Be sure to call it by its right name.

**/

// const generateRandomColors = () => {
//   /**
//    * Randomly colored text
//    */

//   //Get arrays of the text
//   let letters = document.querySelector("#myName").innerHTML.split("");
//   let quote = document.querySelector("#myCurrentRole").innerHTML.split("");

//   // Converts integer to hex
//   const colToHex = (c) => {
//     // Hack so colors are bright enough
//     let color = c < 75 ? c + 75 : c;
//     let hex = color.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   };

//   // uses colToHex to concatenate
//   // a full 6 digit hex code
//   const rgbToHex = (r, g, b) => {
//     return "#" + colToHex(r) + colToHex(g) + colToHex(b);
//   };

//   // Returns three random 0-255 integers
//   const getRandomColor = () => {
//     return rgbToHex(
//       Math.floor(Math.random() * 255),
//       Math.floor(Math.random() * 255),
//       Math.floor(Math.random() * 255)
//     );
//   };

//   // This is the prototype function
//   // that changes the color of each
//   // letter by wrapping it in a span
//   // element.
//   Array.prototype.randomColor = function () {
//     let html = "";
//     this.map((letter) => {
//       let color = getRandomColor();
//       html += '<span style="color:' + color + '">' + letter + "</span>";
//     });
//     return html;
//   };

//   // Set the text
//   document.querySelector("#myName").innerHTML = letters.randomColor();
//   document.querySelector("#myCurrentRole").innerHTML = quote.randomColor();
// };

// document.querySelector("#title").addEventListener("click", () => {
//   generateRandomColors();
// });
