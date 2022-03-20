var dist = "20px";
var duration_default = 1000;
var duration_slower = 1400;
var duration_slowest = 1800;

var slideleft = {
    origin: "left",
    distance: dist,
    duration: duration_default,
};
var slideright = {
    origin: "left",
    distance: dist,
    duration: duration_default,
};

var slidedown = {
    origin: "top",
    distance: dist,
    duration: duration_default,
};

var slidedown_slower = {
    origin: "top",
    distance: dist,
    duration: duration_slower,
};

var slidedown_slowest = {
    origin: "top",
    distance: dist,
    duration: duration_slowest,
};

var slideup = {
    distance: dist,
    duration: duration_default,
};

ScrollReveal().reveal(".clr-accent-title");

ScrollReveal().reveal("#name", slideup);
ScrollReveal().reveal("#landing a");

ScrollReveal().reveal(".company-name", slideright);
ScrollReveal().reveal(".experience-achievements", slidedown);

ScrollReveal().reveal("#certificate-list h3", slideright);
ScrollReveal().reveal(".certificate-tags", slidedown);

ScrollReveal().reveal(".badge", slidedown);
ScrollReveal().reveal(".badge img", slidedown_slowest);
ScrollReveal().reveal(".badge h3", slidedown_slower);

ScrollReveal().reveal(".star p", slidedown);
ScrollReveal().reveal("#hackerrank h3", slideright);

ScrollReveal().reveal("#total-problems-solved p", slidedown);
