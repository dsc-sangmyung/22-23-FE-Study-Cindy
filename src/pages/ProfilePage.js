import React from "react";
import SideBar from "../components/SideBar";
import ProfileHeader from "../components/ProfileHeader";
function ProfilePage(){
    return(
        <div className='main_page'>
            <div className='main_sidebar'>
                <SideBar/>
            </div>
            <div className='content_area'>
                <ProfileHeader/>
            </div>
        </div>

    )
}
export default ProfilePage