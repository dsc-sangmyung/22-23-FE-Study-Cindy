import axios from "axios";
function account(){
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const user_name = document.getElementById('user_name').value;
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;

    checkError(emailOrPhone,password)
    axios({
        method:"POST",
        url:'/api/account',
        data:{
            emailOrPhone,
            user_name,
            nickname,
            password
        },
    }).then((res)=>{
        console.log(res)
    }).catch((res)=>{
        console.log(res)
    })

}

function checkError(emailOrPhone,password){
    let error_msg = document.getElementById('error_msg');
    error_msg.innerHTML = '';

    if (!checkID(emailOrPhone)) {
        error_msg.className += "font-red mt-3 text-center";
        error_msg.innerText = 'Enter a valid email address.';
        return;
    }

    if (!checkPWd(password)) {
        error_msg.className += "font-red mt-3 text-center";
        error_msg.innerText = 'Enter a valid password.';
        return;
    }
}

function checkID(emailOrPhone){
    let reg_email =  /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    let reg_number = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/

    if(reg_email.test(emailOrPhone) || reg_number.test(emailOrPhone))
        return true;
    else
        return false;

}

function checkPWd(pwd){
    if(pwd.toString().length<6)
        return false;
    else
        return true;

}
export default account;