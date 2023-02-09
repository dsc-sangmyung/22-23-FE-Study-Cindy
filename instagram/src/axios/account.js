import axios from "axios";
function account(){
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const user_name = document.getElementById('user_name').value;
    const password = document.getElementById('password').value;

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

export default account;