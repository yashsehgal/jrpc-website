import React, { useState } from "react";
import { Link } from "react-router-dom";
import './footer-styles.css';

export default function Footer() {
  const [footerOptionsRef] = useState([
    { value: 'stories', route: '/stories' },
    { value: 'twitter', route: '/twitter' },
    { value: 'support us', route: '/support' },
    { value: 'merches', route: '/merches' }
  ])
  return (
    <React.Fragment>
      <footer className="footer-container section-content-wrapper">
        <div className="footer-wrapper content-center section-content-wrapper-flex">
          <div className="footer-options-wrapper">
            <ul className="footer-options-list">
              {footerOptionsRef.map((option, index) => (
                <li className='footer-option text-p' key={index}>
                  <Link to={option.route}>
                    {option.value}.
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-p" style={{ color: '#d4d4d4', textAlign: 'right' }}>
            designed + developed with <br />
            a relaxed mind
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}