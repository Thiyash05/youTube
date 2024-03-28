import React from "react";

function RecommendVideo({name , thumbnail , title , channel , views , uploadTime}){
    console.log(thumbnail)
    return(
        
        <div className="recommend-video">
            
            <div className="recommendvideo-card">
                <img src={thumbnail} alt=""/>
            </div>

            <div className="recommendvideo-innertext">
                <h5>
                    {title.length <= 70 ? title : `${title.substr(0, 60)}...`} 
                </h5>
                <h6>{channel}</h6>
                <h6>{views} views . {uploadTime}</h6>
            </div>
            
        </div>
    )
}

export default RecommendVideo;