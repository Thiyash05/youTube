import React from "react";
import Siderbar from '../components/Sidebar';

function Library(){
    return(

        <div className="library-section">
            <div className="library-row">

                <div className="library-nav">
                    <Siderbar/>
                </div>

                <div className="library-text">
                    <i class="bi bi-youtube"></i>
                    <h3>Enjoy your favourite videos</h3>
                    <p>Sign in to access videos that you've liked or saved</p>
                </div>
                
            </div>
             
        </div>
    )
}
export default Library;