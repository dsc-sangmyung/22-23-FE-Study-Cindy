import axios from 'axios'

function Login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    axios({
        method:"GET",
        url:'api/insert',
        data:{
            email,
            password
        }
    }).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
        throw new Error(error);
    })
}
export default Login