function verify() {
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;

  tooShort = (pass1.length < 8) || (pass2.length < 8);
  match = pass1 === pass2;

  if (tooShort) {
    if (pass1.length < 8) {
      alert("The first password is too short!");
    } else {
      alert("The second password is too short!");
    }
  } else if (match) {
    alert("Everything looks good!");
  } else {
    alert("The passwords don't match!");
  }
}
