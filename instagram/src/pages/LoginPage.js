import React from 'react';
import './LoginPage.css';
import Footer from '../components/Footer'
import DownloadApp from '../components/DownloadApp'
import { Link } from "react-router-dom";
import login from '../axios/login';

function LoginPage(){
  return (
      <div className='bg-gray w-full h-full'>
        <div className='flex container w-full'>
          <div className='react-image bg-img'>
            <div className='background-img'>
              <img className='image sub-background'/>
            </div>
          </div>
          <div className='flex flex-col whole'>
            <div className='bg-white w-full login_box'>
              <img className='mx-auto instagram-img' src={require('../assets/img/Instagram.png')}/>
              <div className='flex flex-col login-container'>
                <input className='border bg-gray input' id='email' type='text' placeholder='전화번호, 사용자 이름또는 이메일'/>
                <input className='border bg-gray input' id='password' type='password' placeholder='비밀번호'/>
                <Link to={"./main"}>
                  <div onClick={login} className='text-center bg-blue login-btn'>
                    <button className='font-white bold'>로그인</button>
                  </div>
                </Link>
                <div className='flex line-margin'>
                  <div className='relative line'></div>
                  <span className='or'>또는</span>
                  <div className='relative line'></div>
                </div>
                <div className='flex account_facebook'>
                  <span className='facebook_logo text-center'>f</span>
                  <div className='text-center'>Facebook으로 로그인</div>
                </div>
                <div className='forget_pwd mx-auto'>
                  비밀번호를 잊으셨나요?
                </div>
              </div>
            </div>
            <div className='flex bg-white w-full whole-account'>
              <div className='mx-auto text-center outside-account'>
                <div className='account-margin'>
                  <span>계정이 없으신가요?</span>
                  <Link to={"./account"}>
                    <span className='account bold'>가입하기</span>
                  </Link>
                </div>
              </div>
            </div>
            <DownloadApp/>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default LoginPage