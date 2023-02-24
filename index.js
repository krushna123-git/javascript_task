function validation() {
  const username = document.querySelector("#username").value;
  var pincode = document.getElementById("pincode").value;
  var area = document.getElementById("area").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;
  var photo = document.getElementById("photo").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var pincodeRegex = /^[1-9][0-9]{5}$/;
  var usernameRegex = /^[a-zA-Z0-9]{1,20}$/;
  var passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*~])[^\s]{8,20}$/;
  var areaRegex = /^[a-zA-Z0-9\s]*$/;
  var contactRegex = /^[0-9]{10}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var fileRegex = /\.(jpg|png|gif)$/i;

  if (username == "") {
    alert("Please enter a username");
    return false;
  }

  if (!usernameRegex.test(username)) {
    alert(
      "Username should not contain any special characters and be between 1 and 20 characters long"
    );
    return false;
  }
  if (password == "") {
    alert("Please enter a password");
    return false;
  }
  if (!passwordRegex.test(password)) {
    alert(
      "Password should be between 8 and 20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character out of ( ! @ # $ ^ & * ~ ), and should not contain spaces"
    );
    return false;
  }

  if (pincode == "") {
    alert("Please enter a pincode");
    return false;
  }
  if (!pincodeRegex.test(pincode)) {
    alert("Please enter a valid 6 digit pincode");
    return false;
  }

  if (!areaRegex.test(area)) {
    alert("Area should not contain any special characters");
    return false;
  }
  if (address == "") {
    alert("Please enter an address");
    return false;
  }
  if (!contactRegex.test(contact)) {
    alert("Please enter a valid 10 digit contact number");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (photo == "") {
    alert("Please upload a photo");
    return false;
  }
  if (!fileRegex.test(photo)) {
    alert("Please upload a photo in jpg, png, or gif format");
    return false;
  }
  if (photo.size > 2 * 1024 * 1024) {
    alert("Photo size should not exceed 2MB");
    return false;
  }

  if (age == "") {
    alert("Please enter your age");
    return false;
  }
  return true;
}
