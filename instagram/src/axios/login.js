import axios from 'axios'

function Login(){
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    axios({
        method:"POST",
        url:'api/insert',
        data:{
            id,
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