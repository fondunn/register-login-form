const popOver = document.getElementById('hover-memory');
const popOverContent = document.getElementById('pop-over-content');

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

const submitRegisterButton = document.getElementById('submitRegister');

popOver.onmouseover = mouseOver;
popOver.onmouseout = mouseOut;


function mouseOver() {
    popOverContent.classList.remove('hide');
}

function mouseOut() {
    popOverContent.classList.add('hide');
}


userEmail.addEventListener('input', function (event) {
    
    if (userEmail.validity.valid) {
        userEmail.classList.remove('error');

     } 
    }, false);

    submitRegisterButton.addEventListener('submit', function(event){
        if (!userEmail.validity.valid) {
            userEmail.classList.add('error');

            event.preventDefault();
        }
    }, false);