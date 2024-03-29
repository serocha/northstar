import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import style from '../styles/components/Header.module.scss';

function Header(props) {
  const logo = require('../assets/logo.png');
  const rendered = props.navRoutes.map(route => {
    let ref;
    if (route.isHashLink) {
      ref = <HashLink smooth to={route.to}>{route.content.toLowerCase()}</HashLink>
    } else {
      ref = <Link to={route.to}>{route.content.toLowerCase()}</Link>
    }
    return (
      <div key={route.content} className={style.headerLink}>
        {ref}
      </div>
    );
  });

  return(
    <header id="top" className={style.header}>
      <div>
        <Link style={{cursor: 'default', display: 'contents'}} to='/'>
          <img className={style.headerLogo} src={logo} alt="Logo" />
        </Link>
      </div>
      <div id="nav-links" className={style.headerLinks}>
        {rendered}
      </div>
      <div id="nav-open-btn" className={style.headerMenuIcon} onClick={props.toggleTray}>
        <svg viewBox="0 -1 20 20" version="1.1" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchtype="MSPage"> <g id="Icon-Set" sketchtype="MSLayerGroup" transform="translate(-210.000000, -887.000000)" fill="#000000"> <path d="M229,895 L211,895 C210.448,895 210,895.448 210,896 C210,896.553 210.448,897 211,897 L229,897 C229.552,897 230,896.553 230,896 C230,895.448 229.552,895 229,895 L229,895 Z M229,903 L211,903 C210.448,903 210,903.448 210,904 C210,904.553 210.448,905 211,905 L229,905 C229.552,905 230,904.553 230,904 C230,903.448 229.552,903 229,903 L229,903 Z M211,889 L229,889 C229.552,889 230,888.553 230,888 C230,887.448 229.552,887 229,887 L211,887 C210.448,887 210,887.448 210,888 C210,888.553 210.448,889 211,889 L211,889 Z" id="hamburger" sketchtype="MSShapeGroup"> </path> </g> </g> </g></svg>
      </div>
    </header>
  );
}

export default Header;