const submitBtn= document.getElementById('submitBtn');
const nameError= document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

submitBtn.addEventListener('click',(e)=>{
e.preventDefault();
if((validateName()==true)&& validateEmail()==true  && validatePassword()==true){
    alert("Form Submitted Successfully");
}
});

function validateName()
{
    let name= document.getElementById('name').value;

    if(name.length== 0){
        nameError.innerHTML="Name is Required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML="Write Full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML="";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail()
{
    let email= document.getElementById('email').value;

    if(email.length== 0){
        emailError.innerHTML="Email is Required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        emailError.innerHTML="Write Email Id";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML="";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePassword()
{
    let password= document.getElementById('password').value;

    if(password.length== 0){
        passwordError.innerHTML="Password is Required";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/))
    {
        passwordError.innerHTML="Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passwordError.innerHTML="";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}