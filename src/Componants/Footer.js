import React from "react"
import Twitter from "./Twitter Icon.png"
import Git from "./GitHub Icon.png"
import Instagram from "./Instagram Icon.png"
import Facebook from "./Facebook Icon.png"



export default function Footer(){
    return(
        <section className="Footer">
           <a href="https://www.youtube.com/"><img src={Twitter} alt="" /></a>
           <a href="https://www.youtube.com/"><img src={Facebook} alt="" /></a>
           <a href="https://www.youtube.com/"><img src={Instagram} alt="" /></a>
           <a href="https://www.youtube.com/"><img src={Git} alt="" /></a>

        </section>
    )
}