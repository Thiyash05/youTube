import React from "react";

import {signInWithPopup} from "firebase/auth"
import {auth,provider} from "../firebase";
import { useDispatch , useSelector } from "react-redux";
import { setUser , getUser } from "../userSlice";

import { Link } from "react-router-dom";



function SideItem(){
    
    //google authentication
    const dispatch= useDispatch()
    const user = useSelector(getUser)

    const signin= async()=>{
        const response = await signInWithPopup(auth,provider);
        dispatch(setUser(response.user))
    }
    console.log("user" , user);
    

    return(

        <div className="side-item">

            <ul>
                <li className="home-icon"><i class="bi bi-house-door-fill"></i> Home</li>
                <li><i class="bi bi-caret-right-square"></i> Shorts</li>
                <li><i class="bi bi-skip-forward-btn-fill"></i> Subcriptions</li>

                <hr id="dis"/>
                
                {/* google authentication library */}
                {
                    !user? 
                    (
                        <Link to="library"><li id="dis"><i class="bi bi-collection-fill" ></i> Library</li></Link>
                    )
                    :
                    (
                        <li id="dis"><i class="bi bi-collection-fill" ></i> Library</li>
                    )
                }
                    
                <li id="dis"><i class="bi bi-clock-history"></i> History</li>
                <li id="dis"><i class="bi bi-play-btn"></i> Your video</li>
                <li id="dis"><i class="bi bi-hand-thumbs-up"></i> Liked videos</li>
                <li id="dis"><i class="bi bi-chevron-down"></i> Show more</li>

                {/* google authentication subscription */}
                {
                    !user? 
                    (
                         ""
                    )
                    :
                    (
                        <div className="subcriber-icon">
                            <hr id="dis"/>
                            <h6 id="dis">Subscription</h6>

                            <li id="dis">
                                <div className="subscriber1">
                                    <img src="img/subs1.jpg" alt=""/>
                                    <p>Gaming World</p>
                                </div>
                                   
                            </li>

                            <li id="dis">
                                <div className="subscriber2">
                                    <img src="img/subs2.jpg" alt=""/>
                                    <p>LUCIFER</p>
                                </div>                           
                            </li>

                            <li id="dis">
                                <div className="subscriber3">
                                    <img src="img/subs3.jpg" alt=""/>
                                    <p>Musivarts</p>
                                </div>
                                    
                            </li>

                            <li id="dis">
                                <div className="subscriber1">
                                    <img src="img/subs4.jpeg" alt=""/>
                                    <p>ANIME WORLD</p>
                                </div>
                                
                            </li>
                               
                        </div>
                    )
                }

                <hr id="dis"/>
                <h6 id="dis">Explore</h6>
                <li id="dis"><i class="bi bi-fire"></i> Trending</li>
                <li id="dis"><i class="bi bi-bag-fill"></i> Shopping</li>
                <li id="dis"><i class="bi bi-music-note"></i> Music</li>
                <li id="dis"><i class="bi bi-film"></i> Movies & Shows</li>
                <li id="dis"><i class="bi bi-broadcast"></i> Live</li>
                <li id="dis"><i class="bi bi-controller"></i> Gaming</li>
                <li id="dis"><i class="bi bi-newspaper"></i> News</li>
                <li id="dis"><i class="bi bi-trophy"></i> Sports</li>
                <li id="dis"><i class="bi bi-lightbulb"></i> Learing</li>
                <li id="dis"><i class="bi bi-sunglasses"></i> Fashion & Beauty</li>
                <hr id="dis"/>
                <li id="dis"><i class="bi bi-gear"></i> Setting</li>


            </ul>
        </div>
        
        
    )
}
export default SideItem;