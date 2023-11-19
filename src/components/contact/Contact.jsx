import React from "react"
import img from "../images/pricing.png"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
      
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Your message' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit</button>
          </form>
         </div>
<iframe style= {{width : "100%",height:"500px"}}src="https://maps.google.com/maps?q=Afronex%20tech%20hub&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </section>
    </>
  )
}

export default Contact
