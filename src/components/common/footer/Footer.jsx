import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
        
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.jpg' alt='' />
              <h2>If you have any idea start with us.</h2>
              <p>Receive updates and new products </p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
              
            </div>
            
          ))}
          <div className="lower__footer">
         <ul>
         <a href="https://m.facebook.com/Afronex-Tech-Hub-101130591374005/?_rdr">Facebook</a>
         <a href="https://twitter.com/afronex_hub">Twitter</a>
         <a href="https://t.me/afronex_hub">Telegram</a>
         <a  href="https://bit.ly/3Bjjtoo">Linkedln</a>
         </ul>
     </div>
        </div>
 </footer>
      <div className='legal'>
        <span>© 2022 Afronex Tech 
          hub.</span>
      </div>
    </>
  )
}

export default Footer
