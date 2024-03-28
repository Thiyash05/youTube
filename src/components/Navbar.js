import React from "react";
import Button from 'react-bootstrap/Button';

import {signInWithPopup} from "firebase/auth"
import {auth,provider} from "../firebase";
import { useDispatch , useSelector } from "react-redux";
import { setUser , getUser , logout} from "../userSlice";

function Navsection(){

    //google authentication

    const dispatch= useDispatch()
    const user = useSelector(getUser)

    const handleSignin= async()=>{
        const response = await signInWithPopup(auth,provider);
        dispatch(setUser(response.user))
    }

    console.log("user" , user);

    

    //profile
    const cart=document.querySelector(".profile-card");
  
    const handleProfile=(()=>{
        cart.classList.add("profile-card-active")
    })
    
    
    const handleClose=(()=>{
        cart.classList.remove("profile-card-active")
    })

    const handleSignout=(()=>{
        dispatch(logout())
    })

   
    

    return(

        <div className="nav-section">

           <div className="logo">
                <i class="bi bi-list"></i>
                <img src="img/youtube.jpg" alt=''/>
            </div>

            <div className="search">

                <div className="search-box">
                    <input type="text" placeholder="Search"/>
                    <i class="bi bi-search"></i>
                </div>
                <div className="mike-icon">
                    <i class="bi bi-mic-fill"></i>
                </div>
                
            </div>
            

            <div className="side-scroll">

                {
                    !user? ""
                    :
                    (
                        <div className="profile-card ">

                            <div className="close-icon">
                                <i class="bi bi-x" onClick={handleClose}></i>
                            </div>

                            <div className="profile-detail">
                                <div className="profile-pic">
                                    <img src={user.photoURL} alt=""/> 
                                </div>

                                <div className="profile-name">
                                    <h5>{user.displayName}</h5>
                                    <h4>{user.email}</h4>
                                    <h6>Manage your Google Account</h6>
                                    <hr/>
                                </div>
                            </div>

                            <div className="channel">
                                <i class="bi bi-person-square"></i>
                                <p>Your channel</p>
                            </div>
                            <div className="studio">
                                <i class="bi bi-caret-right-square"></i>
                                <p>YouTube Studio</p>
                            </div>

                            <div className="switch">
                                <i class="bi bi-person-rolodex"></i>
                                <p>Switch account</p>
                            </div>

                            <div className="signout">
                                <i class="bi bi-box-arrow-in-right"></i>
                                <p onClick={handleSignout}>Sign out </p>
                            </div>

                            <div className="setting">
                                <i class="bi bi-gear"></i>
                                <p>Setting</p>
                            </div>
                      
                        </div> 
                    )
                    
                }  
                    
            </div>
         

            <div className="right-icon">

                <i class="bi bi-camera-video"></i>
                <i class="bi bi-bell"></i>
                
                {
                    !user ? (
                        <Button variant="danger" onClick={handleSignin}>Sign In</Button>
                    )     
                    :
                    (
                        <img src={user.photoURL} 
                        alt={user.displayName} 
                        className="profile-img" 
                        onClick={handleProfile}/>
                    ) 
                }
                
            </div>
        
        </div>
    )
}

export default Navsection;