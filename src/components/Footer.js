import React from "react";

function Footer(){
  return(
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
  )
}
export default Footer;