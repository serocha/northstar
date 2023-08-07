import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import style from '../styles/NavTray.module.scss';

function NavTray(props) {

  const rendered = props.routes.map(route => {
    var reference;

    switch (route) {
      case 'Home':
        reference = (
          <Link to='/' onClick={props.toggleTray}>
            {route}  
          </Link>);
        break;
      case 'Contact Us':
        reference = (
          <Link to='/contact' onClick={props.toggleTray}>
            {route}  
          </Link>);
        break;
      case 'Our Team':
        reference = (
          <Link to='/about' onClick={props.toggleTray}>
            {route}  
          </Link>);
        break;
      default: 
        reference = (
          <HashLink smooth to={'/#' + route.toLowerCase()} onClick={props.toggleTray}>
            {route}  
          </HashLink>);
    }

    return (
      <div key={route} className={style.navItem}>
        {reference}
      </div>
    );
  });

  return(
    <nav id="nav-tray" className={[style.navTray, !props.isTrayOpen ? style.navHide : ''].join(" ")}>
      <div className={style.navTrayTop}>
        <svg id='nav-close' className={style.navCloseBtn} onClick={props.toggleTray} width="64px" height="64px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>
      </div>
      <div className={style.navItems}>
        {rendered}
      </div>
    </nav>
  );
};

export default NavTray;