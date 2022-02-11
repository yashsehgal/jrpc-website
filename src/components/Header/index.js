import React, { useState } from 'react';
import './header-styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [headerOptionsRef] = useState([
    { value: 'see the trends', route: '/trends' },
    { value: 'the culture', route: '/culture' },
    { value: 'support us', route: '/support' }
  ]);
  return (
    <React.Fragment>
      <header className='header-container'>
        <div className='header-wrapper content-center'>
          <Link to="/">just relax <span className='gradient-text'>people.</span></Link>
          <div className="header-options-wrapper">
            <ul className="header-options-list">
              {headerOptionsRef.map((option, index) => (
                <li className='header-option' key={index}>
                  <Link to={option.route}>
                    {option.value}.
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}