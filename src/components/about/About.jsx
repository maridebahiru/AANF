import React from "react"
import Back from "./Bk"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Afronex Tech Hub is an innovative technology solutions provider based in Dire Dawa, Ethiopia. We offer best-fit technologies and professional services for Corporations, Government, NGOs and Private Enterprises on their business and technological needs.</p>
            <p>Afronex Tech Hub is an innovative technology solutions provider based in Dire Dawa, Ethiopia. We offer best-fit technologies and professional services for Corporations, Government, NGOs and Private Enterprises on their business and technological needs.</p>
            <button className='btn2'>More About Us</button>
          </div>

          <div className='profile'>
                <div className='profile-background'>

                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
