import React, { useEffect, useState }  from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import './header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>('');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <nav className='header__main-conatiner'>
      <span className='header__main-container__title'>
        <Link to={ROUTES.HOME.path}>Movies DB</Link>
      </span>
      <ul className='header__main-conatiner__list-container'>
        {Object.values(ROUTES).map(route => (
          <li key={route.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={route.path} 
              className={location.pathname === route.path ? 'header__main-conatiner__list-container__element--active' : ''}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
