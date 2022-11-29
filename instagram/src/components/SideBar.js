import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import {MdOutlineExplore} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlinePlusCircle} from 'react-icons/ai';

import './SideBar.css'

function SideBar(){
    return(
        <div id=''>
          <div className='SideHome'>
            <AiFillHome className='icon'/>
            <span>홈</span>
          </div>
          <div className='SideHome'>
            <BiSearchAlt2 className='icon'/>
            <span>검색</span>
          </div>
          <div className='SideHome'>
            <MdOutlineExplore className='icon'/>
            <span>탐색 탭</span>
          </div>
          <div className='SideHome'>
            <AiOutlineMessage className='icon'/>
            <span>메시지</span>
          </div>
          <div className='SideHome'>
            <AiOutlineHeart className='icon'/>
            <span>알림</span>
          </div>
          <div className='SideHome'>
            <AiOutlinePlusCircle className='icon'/>
            <span>만들기</span>
          </div>
          <div className='SideHome'>
              <img src='../assets/img/profile2.jpg' className='profile_image' ></img>
            <span>프로필</span>
          </div>

        </div>

    )
}

export default SideBar;