import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import style from '../styles/components/Footer.module.scss';

function Footer(props) {

  const rendered = props.footerRoutes.map(route => {
    let ref;
    if (route.isHashLink) {
      ref = <HashLink className={style.footerLink} smooth to={route.to}>{route.content}</HashLink>
    } else {
      ref = <Link className={style.footerLink} to={route.to}>{route.content}</Link>
    }
    return (
      <div key={route.content} className={style.footerLinkWrapper}>
        {ref}
      </div>
    );
  });
  
  return(
    <footer className={style.footer}>
      <div className={style.footerLinks}>
        {rendered}
      </div>
      <div className={style.footerLine} />
      <div className={style.footerNotes}>
        <p>Copyright © 2023 North Star Counseling - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;