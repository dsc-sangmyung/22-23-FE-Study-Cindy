import React from 'react';
import './LoginPage.css';

function LoginPage(){
  return (
      <div className='bg-gray w-full h-full'>
        <div className='flex container'>
          <div className=''>
            <img src='https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png'/>
          </div>
          <div className='bg-white w-full login_box'>
            <img className='mx-auto instagram-img' src={require('../assets/img/Instagram.png')}/>
            <div className='flex flex-col login-container'>
              <input className='border bg-gray input' type='text' placeholder='전화번호, 사용자 이름또는 이메일'/>
              <input className='border bg-gray input' type='text' placeholder='비밀번호'/>
              <div className='text-center bg-blue login-btn'>
                <button className='font-white bold'>로그인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LoginPage