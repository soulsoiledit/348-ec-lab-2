function styleChange() {
  var parColor = document.getElementById("parColor").value;
  var borderColor = document.getElementById("borderColor").value;
  var borderWidth = document.getElementById("borderWidth").value;

  var element = document.getElementById('paragraph');
  element.style.backgroundColor = parColor;
  element.style.borderColor = borderColor;
  element.style.borderWidth = borderWidth;
}
