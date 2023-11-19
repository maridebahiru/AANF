import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/services.jpg"
import "./service.css"

const About = () => {
  return (
    <>
      <section className='service'>
        <Back name='Our Services' title='How Can We Help?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Services' subtitle='If you need any help, please
feel free to contact us.' />

            <p>Afronex Tech Hub is an innovative technology solutions provider based in Dire Dawa, Ethiopia. We offer best-fit technologies and professional services for Corporations, Government, NGOs and Private Enterprises on their business and technological needs.</p>
            <p>Afronex Tech Hub is an innovative technology solutions provider based in Dire Dawa, Ethiopia. We offer best-fit technologies and professional services for Corporations, Government, NGOs and Private Enterprises on their business and technological needs.</p>
            
          </div>

          <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
