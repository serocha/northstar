import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import style from '../styles/Footer.module.scss';

function Footer(props) {

  const rendered = props.routes.map(route => {
    var reference;
    switch (route) {
      case 'Back to Top':
        reference = <HashLink className={style.footerLink} smooth to="#top">{route}</HashLink>;
        break;
      case 'Home':
        reference = <Link className={style.footerLink} to="/#home">{route}</Link>;
        break;
      case 'About':
        reference = <Link className={style.footerLink} to="/about">{route}</Link>;
        break;
      case 'Contact Us':
        reference = <Link className={style.footerLink} to="/contact">{route}</Link>;
        break;
      default:
    }
    return (
      <div key={route} className={style.footerLinkWrapper}>
        {reference}
      </div>
    );
  });
  
  return(
    <footer className={style.footer}>
      <div className={style.footerLinks}>
        {rendered}
      </div>
      <div className={style.footerNotes}>
        <p>Copyright © 2023 North Star Counseling - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;