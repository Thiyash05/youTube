import React, {useState , useEffect} from "react";
import { useParams } from "react-router-dom";

import { onSnapshot, query , doc , collection} from "firebase/firestore";
import { db } from "../firebase";

import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import RecommendVideo from "../components/RecommendVideo";


function Video(){

    const [videos , setVideos] =useState([]);
    const [data , setData] =useState(null);

    const {id} = useParams();
    console.log(id)

    // fetch firebase 
    useEffect(() => {
        const q = query(collection(db, "videos"));
        onSnapshot(q, (snapshot) => {
          setVideos(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        });
    }, []);
    
    // firbase id
    useEffect(() => {
        if (id) {
          const q = query(doc(db, "videos", id));
          onSnapshot(q, (snapShot) => {
            setData(snapShot.data());
          });
        }
    },[id])

    console.log(data)


    //like
    let like=document.getElementById("like")
    let likeCount=document.getElementById("like-count")
    console.log(like)
    console.log(likeCount)
    var liked=true
  
    const handleLike=(()=>{
        let a=203;

        if(liked==false){
            like.innerHTML=`<i class="bi bi-hand-thumbs-up"></i>`
            like.style.color="black"
            likeCount.innerHTML=(a)
            liked=true
        }
        else{
            like.innerHTML=`<i class="bi bi-hand-thumbs-up-fill"></i>`
            like.style.color="blue"
            likeCount.innerHTML=(a+1)
            liked=false
        }

    })


    return(
        <div className="video-section">

            <div className="video-left">

                <div className="video">
                    <iframe 
                        src={`https://www.youtube.com/embed/${data?.link}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0" 
                        autoPlay
                        allowFullscreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        className="video">
                    </iframe>
                </div>
                    
                <div className="video-title">
                        <h3>{data?.title}</h3>
                </div>

                <div className="video-text">
                    <div className="logo-channel">
                        <img src={data?.logo} alt=""/>
                        <div className="inner-text">
                            <h6>{data?.channel}</h6>
                            <p>{data?.subscribers} subscribers</p>
                        </div>
                    </div>

                    <div className="sub-btn">
                        <Button variant="dark">Subscribe</Button>
                    </div>
                    
                    <div className="video-icons">
                        <div className="like-dislike ">
                            <div className="like-icon" onClick={handleLike}>
                                <i id="like"><i  class="bi bi-hand-thumbs-up" ></i></i>
                                <p id="like-count">203</p>
                            </div>

                            <div className="dislike-icon">
                                <i  class="bi bi-hand-thumbs-down" ></i> 
                            </div>
                        </div>

                        <div className="share-icon">
                            <i class="bi bi-share"></i>
                            <p>Share</p>
                        </div>

                        <div className="download-icon">
                            <i class="bi bi-download"></i>
                            <p>Download</p>
                        </div>

                        <div className="dot">
                            <i class="bi bi-three-dots"></i>
                        </div>

                    </div>
                </div>

                <div className="description">
                    <div className="views-time">
                        <p>{data?.views} views</p>
                        <p>{data?.uploadTime}</p>
                    </div>
                    <p id="description">{data?.description}</p>
                </div>
            </div>

             
            <div className="video-right">
                <div className="video-right-btn">
                    <Button className="btn-all" variant="secondary">All</Button>
                    <Button variant="secondary">Songs</Button>
                    <Button variant="secondary">Cartoons</Button>
                    <Button variant="secondary">Nature</Button>
                    <Button variant="secondary">Travel</Button>
                    <Button variant="secondary">Music</Button>   
                    
                </div>

                <div className="video-right-card">
                    {
                        videos.map((video,i)=>{
                            if(video.id !== id && video.name==data.name){
                                return(
                                    <Link key={i} to={`/video/${video.id}`}>
                                        <RecommendVideo {...video}/>
                                    </Link>
                                )

                            }
                        })
                    }
                </div>
            </div>
        </div>
        
    
    )
}
export default Video;