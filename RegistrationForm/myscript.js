function check_alphabets_only(input) {
    var alphabetsOnly = /^[a-zA-Z]*$/;
    return alphabetsOnly.test(input);
}

function check_digits_only(input) {
    var numberOnly = /^[0-9]*$/;
    return numberOnly.test(input);
}

function check_email_format(input) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(input);
}

function check_empty(input) {
    if(input == "" || input == null) return true;
    else return false;
}

function display_error(errorBoxId, errorMessage) {
    errorBox = document.getElementById(errorBoxId);
    errorBox.innerHTML = "";
    errorBox.innerHTML = errorMessage;
}

function empty_all_errorBox() {
    errorBox = document.getElementById("firstNameError");
    errorBox.innerHTML = "";
    errorBox = document.getElementById("lastNameError");
    errorBox.innerHTML = "";
    errorBox = document.getElementById("phoneNumberError");
    errorBox.innerHTML = "";
    errorBox = document.getElementById("emailError");
    errorBox.innerHTML = "";
    errorBox = document.getElementById("genderError");
    errorBox.innerHTML = "";
    errorBox = document.getElementById("cityError");
    errorBox.innerHTML = "";
}

function validate() {
    validationFlag = true;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    city = document.getElementById("city").value;
    gender = document.getElementsByName("gender");
    empty_all_errorBox();
    if(check_empty(firstName))
    {
        display_error("firstNameError", "First Name cannot be empty");
        validationFlag = false;
    }
    else if(!check_alphabets_only(firstName)) {
        display_error("firstNameError", "First Name should only have English Alphabets");
        validationFlag = false;
    }
    if(!check_alphabets_only(lastName)) {
        display_error("lastNameError", "Last Name should only have English Alphabets");
        validationFlag = false;
    }
    if(check_empty(phoneNumber))
    {
        display_error("phoneNumberError", "Phone number cannot be empty");
        validationFlag = false;
    }
    else if(phoneNumber.length != 10) {
        display_error("phoneNumberError", "Phone number should be 10 digits long");
        validationFlag = false;
    }
    else if(!check_digits_only(phoneNumber))
    {
        display_error("phoneNumberError", "Phone number should only have digits [0-9]");
        validationFlag = false;
    }
    if(check_empty(email)) {
        display_error("emailError", "Email cannot be empty");
        validationFlag = false;
    }
    else if(!check_email_format(email)) {
        display_error("emailError", "Inavlid Email address");
        validationFlag = false;
    }
    var genderSelected = false;
    for(index=0; index<gender.length; index++ ) {
        if(gender[index].checked)
            genderSelected = true;
    } 
    if(!genderSelected) {
        display_error("genderError", "Select your gender");
        validationFlag = false;
    }
    if(city == "None") {
        display_error("cityError", "Select Your City");
        validationFlag = false;
    }
    return validationFlag;
}
