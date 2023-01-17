import React from 'react';
import './LoginPage.css';
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
        <footer>
          <div className='flex justify-center'>
            <a href='https://about.meta.com/'>
              <div className='footer-tag'>Meta</div>
            </a>
            <a href='https://about.instagram.com/'>
              <div className='footer-tag'>소개</div>
            </a>
            <a href='https://about.instagram.com/about-us/careers'>
              <div className='footer-tag'>블로그</div>
            </a>
            <a href='https://about.instagram.com/about-us/careers'>
              <div className='footer-tag'>채용정보</div>
            </a>
            <a href='https://help.instagram.com/'>
              <div className='footer-tag'>도움말</div>
            </a>
            <a href='https://developers.facebook.com/docs/instagram'>
              <div className='footer-tag'>API</div>
            </a>
            <a href='https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'>
              <div className='footer-tag'>개인정보처리방침</div>
            </a>
            <a href='https://help.instagram.com/581066165581870/'>
              <div className='footer-tag'>약관</div>
            </a>
            <a href='https://www.instagram.com/directory/profiles/'>
              <div className='footer-tag'>인기 계정</div>
            </a>
            <a href='https://www.instagram.com/explore/locations/'>
              <div className='footer-tag'>위치</div>
            </a>
            <a href='https://www.instagram.com/web/lite/'>
              <div className='footer-tag'>Instagram Lite</div>
            </a>
            <a href='https://www.facebook.com/help/instagram/261704639352628'>
              <div className='footer-tag'>연락처 업로드 & 비사용자</div>
            </a>
          </div>
          <div className='flex justify-center footer-margin'>
            <div className='footer-tag'>© 2023 Instagram from Meta</div>
          </div>
        </footer>
      </div>
  )
}

export default LoginPage