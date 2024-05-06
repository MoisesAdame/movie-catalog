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
          <li key={ROUTES.HOME.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.HOME.path} 
              className={location.pathname === ROUTES.HOME.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.HOME.name}
            </Link>
          </li>
          <li key={ROUTES.POPULAR.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.POPULAR.path} 
              className={location.pathname === ROUTES.POPULAR.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.POPULAR.name}
            </Link>
          </li>
          <li key={ROUTES.TOP_RATED.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.TOP_RATED.path} 
              className={location.pathname === ROUTES.TOP_RATED.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.TOP_RATED.name}
            </Link>
          </li>
          <li key={ROUTES.NOW_PLAYING.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.NOW_PLAYING.path} 
              className={location.pathname === ROUTES.NOW_PLAYING.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.NOW_PLAYING.name}
            </Link>
          </li>
          <li key={ROUTES.MY_FAVORITES.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.MY_FAVORITES.path} 
              className={location.pathname === ROUTES.MY_FAVORITES.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.MY_FAVORITES.name}
            </Link>
          </li>
        </ul>
        <div className='md:hidden'>
          <HamburguerButton 
            onClick={() => {setIsHidden(!isHidden)}}
          />
        </div>
      </div>
      <div className={lowerConatinerClasses}>
        <ul className='header__main-conatiner__list-container--lower'>
          <li key={ROUTES.HOME.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.HOME.path} 
              className={location.pathname === ROUTES.HOME.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.HOME.name}
            </Link>
          </li>
          <li key={ROUTES.POPULAR.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.POPULAR.path} 
              className={location.pathname === ROUTES.POPULAR.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.POPULAR.name}
            </Link>
          </li>
          <li key={ROUTES.TOP_RATED.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.TOP_RATED.path} 
              className={location.pathname === ROUTES.TOP_RATED.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.TOP_RATED.name}
            </Link>
          </li>
          <li key={ROUTES.NOW_PLAYING.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.NOW_PLAYING.path} 
              className={location.pathname === ROUTES.NOW_PLAYING.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.NOW_PLAYING.name}
            </Link>
          </li>
          <li key={ROUTES.MY_FAVORITES.path} className='header__main-conatiner__list-container__element'>
            <Link 
              to={ROUTES.MY_FAVORITES.path} 
              className={location.pathname === ROUTES.MY_FAVORITES.path ? 'header__main-conatiner__list-container__element--active' : ''}>
                {ROUTES.MY_FAVORITES.name}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
