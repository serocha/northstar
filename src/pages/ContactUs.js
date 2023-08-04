import Header from '../components/Header'
import Footer from '../components/Footer'
import NavTray from '../components/NavTray'
import style from '../styles/contact-us.module.css'
import globalStyles from '../utils/globalStyles'

function ContactUs(props) {
  
  const navRoutes = ['Home', 'Services', 'Training', 'Our Team'];
  const footerRoutes = ['Back to Top', 'Home', 'About'];

  const maxChars = 300;
  document.getElementById('char-span').textContent = maxChars;
  const message = document.getElementById('message');

  message.addEventListener('input', (e) => {

      const remaining = maxChars - e.target.value.length; 
      if (remaining <= 0) {
          e.preventDefault();
          e.target.value = e.target.value.slice(0, maxChars);
          document.getElementById('char-div').style.color = 'red';
          document.getElementById('char-span').textContent = 0;
      } else {
          document.getElementById('char-div').style.color = 'black';
          document.getElementById('char-span').textContent = remaining;
      }
  });

  document.getElementById('subject').addEventListener('change', (e) => {
      if (e.target.value === 'training') {
          document.getElementById('contact').value = 'leasa';
          document.getElementById('toggle-contact').checked = false;
          document.getElementById('toggle-contact').disabled = true;
          document.getElementById('contact').disabled = true;
      } else {
          document.getElementById('toggle-contact').disabled = false;
      }
  });

  function toggleContact() {
    const contact = document.getElementById('contact');
    contact.disabled = !contact.disabled;
  }

  return(
    <div id="contact">
      <Header isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
      <div>
        <form className={globalStyles.txt}>
          <div>Your details</div>
          <div className={style.infoSection}>
            <label for="name">Name *</label><br/>
            <input type="text" id="name" name="name" required /><span id="name-check" /><br/>
            <label for="email">Email *</label><br/>
            <input type="email" id="email" name="email" required /><span id="email-check" /><br/>
            <label for="phone">Phone</label><br/>
            <input type="tel" id="phone" name="phone" /><br/>
          </div>
          <div>How can we help?</div>
          <div className={style.infoSection}>
            <label for="subject">Subject</label><br/>
            <select id="subject" name="subject">
              <option value="inquiry">I have a question</option>
              <option value="consultation">I'd like to schedule a consultation</option>
              <option value="training">I'm interested in training</option>
            </select><br/><br/>
            <input type="checkbox" id="toggle-contact" name="toggle-contact" onClick={toggleContact} />
            <label for="toggle-contact">I'd like to talk to someone specifically</label><br/>
            <select id="contact" name="contact" disabled>
              <option id="leasa" value="leasa">Contact Leasa</option>
              <option id="melissa" value="m">Contact Melissa</option>
            </select><br/><br/>
            <label for="message">Message *</label><br/>
            <textarea id="message" name="message" placeholder="Write to us here..." required></textarea><span id="message-check"/>
            <div id="char-div"><span id="char-span"></span> characters remaining</div>
          </div>
          <input type="submit" />
        </form>
      </div>
      <Footer routes={footerRoutes} />
      <NavTray routes={navRoutes} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default ContactUs;