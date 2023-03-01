import React from 'react';
import './StoryBar.css';


function StoryBar(props){
    return(
        <div className='story-bar'>
            <img className='story-pic' src={props.pic}></img>
            <div className='story-id'>{props.id}</div>
        </div>
    )
}

export default StoryBar;