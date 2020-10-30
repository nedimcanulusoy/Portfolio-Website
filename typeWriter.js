var i = 0;
var txt = "Nedim Can Ulusoy";
var speed = 80;

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
    $("#description").fadeIn(1800);
    $("#descr-aboutme").fadeIn(1800);
    $("#descr-cv").fadeIn(1800);
    $("#descr-contact").fadeIn(1800);
  });
});



/*
 
https://learn.jquery.com/using-jquery-core/document-ready/

*/
