import React, {useEffect , useState} from "react";
import SideItem from "../components/Sidebar";
import Button from 'react-bootstrap/Button';

import { query , onSnapshot , collection } from "firebase/firestore";
import { db } from "../firebase";

import {Link} from "react-router-dom";
import VideoComponent from "../components/Video-Component";



function Home(){

    const [videos , setVideos]= useState([]);
 
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

    console.log(videos)
    
  
    const [btn,setBtn]=useState(false);
    const [filter , setfilter] =useState([]);


    const handleClick=(text)=>{
      
      setBtn(true)
      const a = videos.filter((v, i)=>{
        return v.name == text
      })
      console.log(a)
      setfilter(a)
      
     
    }

    const handleAll=()=>{
       setBtn(false)
    }


      

  return(

    <div className="home-page">

        <div className="left-page">
            <SideItem/>
        </div>

        <div className="right-page">

            <div className="homepage-btn" >
                <Button id="btn" className="btn-all" variant="secondary" onClick={()=>handleAll()} >All</Button>
                <Button id="btn" variant="secondary" onClick={()=>handleClick("songs")}>Songs</Button>
                <Button id="btn" variant="secondary" onClick={()=>handleClick("Cartoon")}>Cartoons</Button>
                <Button id="btn" variant="secondary" onClick={()=>handleClick("nature")}>Nature</Button>
                <Button id="btn" variant="secondary"  onClick={()=>handleClick("travel")}>Travel</Button>
                <Button id="btn" variant="secondary"  onClick={()=>handleClick("Music")}>Music</Button>
                <Button id="btn" variant="secondary"  onClick={()=>handleClick("foodlove")}>Foodie</Button>
                <Button id="btn" variant="secondary" onClick={()=>handleClick("rainy")}>Rainy</Button>
                <Button id="btn" variant="secondary" onClick={()=>handleClick("movie")}>Movie</Button>
                <Button id="btn" variant="secondary" onClick={()=>handleClick("comedy")}>Comedy</Button>
                <Button id="btn" variant="secondary"onClick={()=>handleClick("kuttys")}>Kutty's</Button>
                <Button id="btn" variant="secondary" onClick={()=>handleClick("reels")}>Dance</Button>
                <Button id="btn" variant="secondary" onClick={()=>handleClick("story")}>Story</Button>
            </div>
              
            <div className="card-section">

              {
                btn == true?
                filter.map((video, i) => (
                  <Link to={`/video/${video.id}`} key={video.id}> 
                  <VideoComponent {...video} />
                  </Link>
                ))

                :
                

                videos.map((video, i) => (
                  <Link to={`/video/${video.id}`} key={video.id}> 
                  <VideoComponent {...video} />
                  </Link>
                ))
               

              }

            </div>
        </div>

    </div>
       
  )
   
}
export default Home;