import React from 'react';
import './AccountPage.css';
import Footer from '../components/Footer';
import DownloadApp from "../components/DownloadApp";
import Account from '../axios/account'
import {Link} from "react-router-dom";

function AccountPage (){
  return(
      <div className='bg-gray w-full h-full'>
        <div className='flex flex-col mx-auto total_account'>
            <div className='flex flex-col bg-white account_box mx-auto'>
          <img className='mx-auto instagram-img' src={require('../assets/img/Instagram.png')}/>
          <div className='account-container'>
            <div className='account_msg text-center'>친구들의 사진과 동영상을 보려면 가입하세요.</div>
              <div className='flex account_facebook'>
                  <span className='facebook_logo text-center'>f</span>
                  <div className='text-center'>Facebook으로 로그인</div>
              </div>
              <div className='flex line-margin'>
                  <div className='relative line'></div>
                  <span className='or'>또는</span>
                  <div className='relative line'></div>
              </div>
              <div className='flex flex-col'>
                  <input className='border bg-gray input' id='email' type='text' placeholder='휴대폰 번호 또는 이메일 주소'/>
                  <input className='border bg-gray input' id='name' type='text' placeholder='성명'/>
                  <input className='border bg-gray input' id='user_name' type='text' placeholder='사용자 이름'/>
                  <input className='border bg-gray input' id='password' type='password' placeholder='비밀번호'/>
              </div>
              <div className='call-info'>
                  <span>
                      저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.
                  </span>
                  <a className='account-more' href='https://www.facebook.com/help/instagram/261704639352628'>
                      <span>더 알아보기</span>
                  </a>
              </div>
              <div className='bg-blue-100 round-lg account-ac w-full mx-auto'>
                  <div onClick={Account} className='bold font-white text-center account-text'>가입</div>
              </div>
          </div>
        </div>
          <div className='flex bg-white w-full whole-account'>
              <div className='mx-auto text-center outside-account'>
                <div className='account-margin'>
                  <span>계정이 있으신가요?</span>
                  <Link to={"/"}>
                    <span className='account bold'>로그인</span>
                  </Link>
                </div>
              </div>
            </div>
        </div>
        <DownloadApp/>
        <Footer/>
      </div>
  )
}

export default AccountPage