const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}





// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([ email, password]);
  
  checkLength(password, 6, 25);
  checkEmail(email);
});

function validate(){
    var passwordvalid=document.getElementById("password");
    var emailvalid=document.getElementById("email");

    if(passwordvalid.value.length >=6 && emailvalid.value.length >= 10){
        document.write("login successfull");
        window.location.href="success.html";
        return false;
    } }
  

function isvalid(){
    var user = document.form.email.value;
    var pass = document.form.password.value;
    if(user.length=="" && pass.length==""){
        alert(" Username and password field is empty!!!");
        return false;
    }
    else if(user.length==""){
        alert(" Username field is empty!!!");
        return false;
    }
    else if(pass.length==""){
        alert(" Password field is empty!!!");
        return false;
    }
    else if(pass.length < 6){
        alert("password must be 6 character");
        return false;
    }
    
}