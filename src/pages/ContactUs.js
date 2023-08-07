import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavTray from '../components/NavTray'
import style from '../styles/ContactUs.module.scss'
import globalStyles from '../utils/globalStyles'

// need to update to React Forms
function ContactUs(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const navRoutes = ['Home', 'Services', 'Training', 'Our Team'];
  const footerRoutes = ['Back to Top', 'Home', 'About'];

  const MAX_WORD_COUNT = 150;
  const MAX_CHAR_COUNT = 1000;
  const [message, setMessage] = useState("");
  const [isDropdownEnabled, setDropdown] = useState(false);

  function countWords(str) {
    return str === "" ? 0 : str.trim().split(' ').length;
  }

  function handleMessageChange(e) {
    const value = e.target.value;
    if (value.length > MAX_CHAR_COUNT) {
      setMessage(value.substring(0, MAX_CHAR_COUNT));
    } else if (countWords(value) <= MAX_WORD_COUNT) {
      setMessage(value);
    } else {
      setMessage(value.replace(/\s$|\p{P}$/u,""));
    }
  }

  return(
    <div id="contact">
      <Header isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
      <div>
        <form className={globalStyles.txt}>
          <div>Your details</div>
          <div className={style.infoSection}>
            <label htmlFor="name">Name *</label><br/>
            <input type="text" id="name" name="name" required /><br/>
            <label htmlFor="email">Email *</label><br/>
            <input type="email" id="email" name="email" required /><br/>
            <label htmlFor="phone">Phone</label><br/>
            <input type="tel" id="phone" name="phone" /><br/>
          </div>
          <div>How can we help?</div>
          <div className={style.infoSection}>
            <label htmlFor="subject">Subject</label><br/>
            <select id="subject" name="subject">
              <option value="inquiry">I have a question</option>
              <option value="consultation">I'd like to schedule a consultation</option>
              <option value="training">I'm interested in training</option>
            </select><br/><br/>
            <input 
              type="checkbox"
              id="toggle-contact"
              name="toggle-contact"
              onClick={() => setDropdown(!isDropdownEnabled)} />
            <label htmlFor="toggle-contact">I'd like to talk to someone specifically</label><br/>
            <select id="contact" name="contact" className={ isDropdownEnabled ? null : style.disabled }>
              <option id="leasa" value="L">Contact Leasa</option>
              <option id="melissa" value="M">Contact Melissa</option>
            </select><br/><br/>
            <label htmlFor="message">Message *</label><br/>
            <textarea 
              id="message"
              type="text"
              name="message"
              placeholder="Write to us here..."
              required
              value={message}
              onChange={handleMessageChange}>
            </textarea>
            <div 
              id="char-div"
              className={countWords(message)===MAX_WORD_COUNT ? style.red : ''}> 
              {MAX_WORD_COUNT - countWords(message)} words remaining.
            </div>
            {message.length === MAX_CHAR_COUNT ? <div className={style.red}>You're at the character limit.</div> : null}
          </div>
          <div className={globalStyles.btnWrapper}>
            <button 
              className={[globalStyles.centered, style.submitBtn].join(' ')}
              type="submit">
                Submit
            </button>
          </div>
        </form>
      </div>
      <Footer routes={footerRoutes} />
      <NavTray routes={navRoutes} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default ContactUs;