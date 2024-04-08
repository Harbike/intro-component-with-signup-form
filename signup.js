let body = document.querySelector('html');
let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
let userMail = document.querySelector('.email');
let userPass = document.querySelector('.password');
let firstErr = document.querySelector('.firstErr');
let lastErr = document.querySelector('.lastErr');
let mailErr = document.querySelector('.mailErr');
let passErr = document.querySelector('.passErr');
let claimBtn = document.querySelector('.btn');
let userResponse = document.querySelectorAll('input');
let errMessages = document.querySelectorAll('.msg');
let thankYou = document.querySelector('.thank-you');
let result = [];

// name validation
function getValidation(name,err){
    name.addEventListener('focus',()=>{
        name.setAttribute('placeholder','');
    });
    name.addEventListener('focusout',()=>{
        name.setAttribute('placeholder',name.getAttribute('name')); //new: - getAttribute
        err.style.visibility ='hidden'
        if(name.value === null || name.value === ''){
            err.style.visibility ='visible'
        }
    });
}
//mail validation
function validateMail(userMail, err){
    userMail.addEventListener('focus',()=>{
        userMail.setAttribute('placeholder','email@example/com');
    });
    userMail.addEventListener('focusout',()=>{
        userMail.setAttribute('placeholder','Email Address');
        err.style.visibility ='hidden'
        if(userMail.value === null || userMail.value === ''){
            err.textContent = 'E-mail cannot be empty'
            err.style.visibility ='visible'
        } else if (userMail.value === null || userMail.value === '' || !userMail.value.includes('@')){
            err.textContent = 'Looks like this is not an email'
            err.style.visibility ='visible'
        }
    });
}
// password validation
function checkPass(pass,err){
    pass.addEventListener('focus',()=>{
        pass.setAttribute('placeholder','******');
    });
    pass.addEventListener('focusout',()=>{
        pass.setAttribute('placeholder','Password');
        err.style.visibility ='hidden'
        if(pass.value === null || pass.value === ''){
            err.textContent = 'Password cannot be empty'
            err.style.visibility ='visible';
        }
        // set password minlength and max
    });
}
//  reset form
function resetForm(){
    userResponse.forEach((field) =>{
        field.value = "";
    })
}
// verify all input is filled
function verifyAll(event){
    event.preventDefault();

    for(i=0; i < userResponse.length; i++){
        if(userResponse[i].value){
            result.push(userResponse[i].value);
            console.log(result);
        }
        else if(userResponse[i].value === '' || userResponse[i].value === null){
            //alert user to input field
            alert('Kindly complete the form');
            //stop submission
            return false;
        }
    }
    return true;
}
// when claimBtn is clicked: -
claimBtn.addEventListener('click', (event)=>{
    const verified = verifyAll(event);
    if (verified){
        resetForm();
    }
})

getValidation(firstName, firstErr);
getValidation(lastName, lastErr);
validateMail(userMail, mailErr);
checkPass(userPass, passErr);