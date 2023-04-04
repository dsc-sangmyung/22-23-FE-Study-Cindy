import React from 'react'
import './ProfileHeader.css'
import {Link} from "react-router-dom";
function ProfileHeader(){
    return(
        <div className='profile_container'>
            <div className='flex'>
                <div className='mr-2'>
                    <img src={require('../assets/img/profile2.jpg')} className='profile_header_image'></img>
                </div>
                <div>
                    <div className='flex'>
                        <span className='fw-6 flex align-center'>s__0_0yun</span>
                        <Link to={'/edit'}>
                            <button className='bg-gray-200 bold round-lg px-4 ml-3'>프로필 편집</button>
                        </Link>
                        <svg aria-label="옵션" className="x1lliihq x1n2onr6 p-2 my-auto" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                             height="24" role="img" viewBox="0 0 24 24" width="24"><title>옵션</title>
                            <circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2"></circle>
                            <path
                                d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                                fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader