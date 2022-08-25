import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './navigation.styles.scss';
import { ReactComponent as ReduLogo } from '../../assets/reduclothinglogo.svg';

const Navigation = () => {
  return (
    <Fragment>
      <nav className='navigation'>
        <Link className='logo-container' to='/'>
          <ReduLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
