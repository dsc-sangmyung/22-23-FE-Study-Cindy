import axios from "axios";
function account(){
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const user_name = document.getElementById('user_name').value;
    const password = document.getElementById('password').value;

    checkID(email);
    checkPWd(password);

    axios({
        method:"GET",
        url:'/api/account',
        params:{
            name,
            email,
            user_name,
            password
        },
    }).then((res)=>{
        console.log(res)
    }).catch((res)=>{
        console.log(res)
    })

}

function checkID(email){
    let reg_email =  /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    let reg_number = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
    let error_msg = document.getElementById('error_msg');

    if(reg_email.test(email) || reg_number.test(email)){
        error_msg.innerHTML = '';
        return email
    }else{
        error_msg.className += "font-red mt-3 text-center";
        error_msg.innerText = 'Enter a valid email address.';
        return false
    }
}

function checkPWd(pwd){
    let error_msg = document.getElementById('error_msg');

    if(pwd.toString().length<6){
        error_msg.className += "font-red mt-3 text-center";
        error_msg.innerText = 'Enter a valid password.';
    }else{
        error_msg.innerHTML = '';
        return pwd;
    }
}
export default account;