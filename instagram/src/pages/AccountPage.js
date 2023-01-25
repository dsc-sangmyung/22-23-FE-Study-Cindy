import React from 'react';
import './AccountPage.css';
import Footer from '../components/Footer';
import DownloadApp from "../components/DownloadApp";

function AccountPage (){
  return(
      <div className='bg-gray w-full h-full'>
        <div className='flex flex-col total_account bg-white account_box mx-auto'>
          <img className='mx-auto instagram-img' src={require('../assets/img/Instagram.png')}/>
          <div className='account-container'>
            <div className='account_msg text-center'>친구들의 사진과 동영상을 보려면 가입하세요.</div>
            <div className='flex account_facebook'>
              <span className='facebook_logo text-center'>f</span>
              <div className='text-center'>Facebook으로 로그인</div>
            </div>
          </div>
        </div>
        <DownloadApp/>
        <Footer/>
      </div>
  )
}

export default AccountPage