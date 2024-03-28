import React from "react";

function VideoComponent(
    {channel  , duration  , logo , thumbnail , title , uploadTime , views}
    ){
    return(

        <div className="card-row">
            <div className="card-col">
                <div className="card">
                    <div className="card-img">
                        <img src={thumbnail} alt=""/>

                        <div className="duration">
                            <p>{duration}</p>
                        </div>
                    </div>

                    <div className="card-text">
                        <div className="channel-logo">
                            <img src={logo} alt=""/>
                        </div>

                        <div className="text">
                            <h5>
                                {title.length <= 50 ? title : `${title.substr(0, 50)}...`}
                            </h5>
                            <h6>{channel}</h6>
                            <h6>{views}views . {uploadTime}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoComponent;