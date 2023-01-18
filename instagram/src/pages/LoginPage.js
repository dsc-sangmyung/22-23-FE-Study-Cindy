import React from 'react';
import './LoginPage.css';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function LoginPage(){
  return (
      <div className='bg-gray w-full h-full'>
        <div className='flex container'>
          <div>
            <img src='https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png'/>
          </div>
          <div className='flex flex-col whole'>
            <div className='bg-white w-full login_box'>
              <img className='mx-auto instagram-img' src={require('../assets/img/Instagram.png')}/>
              <div className='flex flex-col login-container'>
                <input className='border bg-gray input' type='text' placeholder='전화번호, 사용자 이름또는 이메일'/>
                <input className='border bg-gray input' type='text' placeholder='비밀번호'/>
                <div className='text-center bg-blue login-btn'>
                  <button className='font-white bold'>로그인</button>
                </div>
                <div className='flex line-margin'>
                  <div className='relative line'></div>
                  <span className='or'>또는</span>
                  <div className='relative line'></div>
                </div>
                <div className='flex mx-auto'>
                  <div>F</div>
                  <div className='login_facebook'>Facebook으로 로그인</div>
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
                  <span className='account bold'>가입하기</span>
                </div>
              </div>
            </div>
            <div className='download-app text-center'>
              <span>앱을 다운로드하세요.</span>
            </div>
            <div className='flex w-full justify-center app-margin'>
              <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DC3D48381-855B-4ED5-B461-EDCC53F06CF5%26utm_content%3Dlo%26utm_medium%3Dbadge&pli=1'>
                <img className='googleplay' src='https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png'/>
              </a>
              <a href='ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1030'>
                <img className='microsoft' src='https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png'/>
              </a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default LoginPage