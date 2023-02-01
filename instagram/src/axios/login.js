import axios from 'axios'

function Login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    axios({
        method:"POST",
        url:'https://reqres.in/api/login',
        data:{
            "email":email,
            "password":password
        }
    }).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
        throw new Error(error);
    })
}
export default Login