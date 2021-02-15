//get forms
const loginForm = document.getElementById('liginForm');
const registerForm = document.getElementById('registerForm');

//get popUp
const popOver = document.getElementById('hover-memory');
const popOverContent = document.getElementById('pop-over-content');

//get login form inputs
const loginUserName = document.getElementById('loginUserName');
const loginUserPassword = document.getElementById('loginUserPassword');

//get register form inputs
const registerUserName = document.getElementById('registerUserName');
const registerUserEmail = document.getElementById('registerUserEmail');
const registerUserPassword = document.getElementById('registerUserPassword');

//get buttons
const submitLoginButton = document.getElementById('submitLogin');
const submitRegisterButton = document.getElementById('submitRegister');

//popover on 'remember my password'
popOver.onmouseover = mouseOver;
popOver.onmouseout = mouseOut;

function mouseOver() {
    popOverContent.classList.remove('hide');
}

function mouseOut() {
    popOverContent.classList.add('hide');
}

// validation

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    checkLoginInputs();
});

function checkLoginInputs() {
    const userNameValue = loginUserName.value.trim();
    const userPasswordValue = loginUserPassword.value.trim();

    //set min length of login and password
    const userLoginLength = userNameValue.length;
    const userPasswordLength = userPasswordValue.length;

    if ( userNameValue == '' | userLoginLength < 3) {
        setInvalidFor(loginUserName);
    } else {
        setValidFor(loginUserName);
    }

    if ( userPasswordValue == '' | userPasswordLength < 8) {
        setInvalidFor(loginUserPassword);
    } else {
        setValidFor(loginUserPassword);
    }
}
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRegisterInputs();
});
function checkRegisterInputs() {
    const userEmailValue = registerUserEmail.value.trim();
    const userNameValue = registerUserName.value.trim();
    const userPasswordValue = registerUserPassword.value.trim();

    //set min length of login and password
    const userLoginLength = userNameValue.length;
    const userPasswordLength = userPasswordValue.length;


    if ( userNameValue == '' | userLoginLength < 3) {
        setInvalidFor(registerUserName);
    } else {
        setValidFor(registerUserName);
    }

    if ( userPasswordValue == '' | userPasswordLength < 8) {
        setInvalidFor(registerUserPassword);
    } else {
        setValidFor(registerUserPassword);
    }

    if(userEmailValue == '') {
		setInvalidFor(registerUserEmail);
	} else if (!emailCheck(userEmailValue)) {
		setInvalidFor(registerUserEmail);
	} else {
		setValidFor(registerUserEmail);
	}

}


function setValidFor(input) {
    const validInput = input;
    validInput.classList.add('valid');
}

function setInvalidFor(input) {
    const invalidInput = input;
    invalidInput.classList.add('invalid');
}

function emailCheck(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}