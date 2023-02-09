import axios from "axios";
function account(){
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const user_name = document.getElementById('user_name').value;
    const password = document.getElementById('password').value;

    console.log(email)
    console.log(password)
    axios({
        method:"POST",
        url:'https://reqres.in/api/register',
        data:{
            'email':email,
            'password':password
        },
    }).then((res)=>{
        console.log(res)
    }).catch((res)=>{
        console.log(res)
    })

}

export default account;