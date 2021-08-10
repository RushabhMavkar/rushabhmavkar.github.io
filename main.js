function toggleCollapseBtnText() {
  var btn = document.getElementById("cert-collapse-btn");
  currentText = btn.textContent;
  expectedText = currentText == "Show More" ? "Show Less" : "Show More";
  btn.textContent = expectedText;
}
