import React, { useEffect, useState }  from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import { HamburguerButton } from '../HamburguerButton';
import classNames from 'classnames';
import './Header.css';

/**
 * Header component for navigation inside the page.
 */
const Header: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const mainConatinerClasses = classNames('header__main-conatiner', {
    'header__main-conatiner--hidden': isHidden,
  });

  const lowerConatinerClasses = classNames('header__lower-conatiner', {
    'header__lower-conatiner--hidden': isHidden,
  });

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <nav className='sticky top-0 z-50 flex flex-col'>
      <div className={mainConatinerClasses}>
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
        <div className='md:hidden'>
          <HamburguerButton 
            onClick={() => {setIsHidden(!isHidden)}}
          />
        </div>
      </div>
      <div className={lowerConatinerClasses}>
        <ul className='header__main-conatiner__list-container--lower'>
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
      </div>
    </nav>
  );
};

export default Header;
