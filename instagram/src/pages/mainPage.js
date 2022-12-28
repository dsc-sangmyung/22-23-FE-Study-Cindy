import React from 'react';
import SideBar from "../components/SideBar";
import StoryBar from "../components/StoryBar";
import Post from "../components/Post";
import './mainPage.css';
import Profile from '../assets/img/profile2.jpg';
import Profile_jsh from '../assets/img/rabbit.jpg'

function mainPage(){
    return(
        <div className='main_page'>
            <div className='main_sidebar'>
                <SideBar/>
            </div>
            <div className='content_area'>
                <div className='content_subarea'>
                    <div className='main_story'>
                        <StoryBar id="s__0_0yun" pic={Profile}/>
                        <StoryBar id="miracle_jsh" pic={Profile_jsh}/>
                    </div>
                    <div className='main_post'>
                        <Post name="s__0_0yun" img={Profile}/>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default mainPage