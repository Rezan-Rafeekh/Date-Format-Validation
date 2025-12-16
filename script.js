// Check whether a string contains date format dd-mm-yyyy
function checkDate() {
  var str = document.getElementById("inputString").value;

  // Regular Expression for dd-mm-yyyy
  var pattern = /\b\d{2}-\d{2}-\d{4}\b/;

  if (pattern.test(str)) {
    alert("Yes, It contain a date!!");
  } else {
    alert("No, It does not contain a date!!");
  }
}
