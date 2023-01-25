import React from 'react'

function DownloadApp(){
  return(
      <div>
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
  )
}
export default DownloadApp