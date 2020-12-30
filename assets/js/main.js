var prevScrollpos = window.pageYOffset;
var logo = document.getElementById("logo")

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 500) {
    if (logo.classList.contains("logo-in-animation"))
    {
    logo.classList.remove("logo-in-animation");
    logo.classList.add("logo-out-animation");
    }
  } else {
      if (logo.classList.contains("logo-out-animation")){
    logo.classList.remove("logo-out-animation");
    logo.classList.add("logo-in-animation");
  }
}
}
