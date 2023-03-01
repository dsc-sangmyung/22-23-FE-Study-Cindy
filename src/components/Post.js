import React from 'react'
import './Post.css'
function Post(props){
    return(
        <div>
            <div className='post-bar'>
                <div className='post-name-profile'>
                    <img className='post-img' src={props.img}/>
                    <span className='post-name'>{props.name}</span>
                </div>
                <svg aria-label="옵션 더 보기" color="#262626" fill="#262626" width="70" height="40" role="img"
                     viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
            </div>
        </div>
    )

}

export default Post