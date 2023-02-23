import React from "react"
import ProfilePic from "../Profile.jpg"
import MainPic from "./Mail.png"
import LinkedInPic from "./linkedin.png"

export default function Info(){
    return(
        <section className="Info">
            <div className="img">
                <img src= {ProfilePic}  alt=""/>
            </div>
                <h2> Mahidun Nobi</h2>
                <p> Frontend Developer</p>
                <span> mahidunnobi.website</span>
                <div className="buttons">
                    <button className="EmailBtn"><img src={MainPic} alt="" /> <span> E-mail </span> </button>
                    <button className="LinkdinBtn"><img src={LinkedInPic} alt="" /> <span> Linkedin </span></button>
                </div>
            
        </section>
    )
}