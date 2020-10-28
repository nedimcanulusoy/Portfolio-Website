var i = 0;
var txt = "Nedim Can Ulusoy";
var speed = 75;

function typeWriter(handler) {
  if (i < txt.length) {
    document.getElementById("myname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(handler);
    }, speed);
  } else {
    handler();
  }
}

$(document).ready(() => {
  typeWriter(function () {
    $("#description").fadeIn("slow");
  });
});

/*
 
https://learn.jquery.com/using-jquery-core/document-ready/

*/
