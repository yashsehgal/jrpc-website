import React, { useState } from "react";
import { ReactComponent as DizzyPerson } from '../assets/dizzy.svg';

export default function Landing() {
  const [arrowLengthRef, setArrowLength] = useState(115);
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="landing-page-wrapper content-center">
          <div className="hero-section-wrapper" style={{
            textAlign: 'left',
            width: 'fit-content',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '6rem'
          }}>
            <h1 className="text-xl">
              take some time <br /> 
              to relax, you're <br />
              doing great.
            </h1>
            <h3 className="text-heading gradient-text" style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1.2rem',
              cursor: 'pointer'
            }}
              onMouseEnter={() => setArrowLength(140)}
              onMouseLeave={() => setArrowLength(115)}
            >
              Join the #Culture
              <span>
                <svg width={arrowLengthRef} height="24" viewBox="0 0 215 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.2s ease-in-out' }}>
                  <path d="M214.063 13.0607C214.649 12.4749 214.649 11.5251 214.063 10.9393L204.517 1.3934C203.931 0.807612 202.982 0.807612 202.396 1.3934C201.81 1.97918 201.81 2.92893 202.396 3.51472L210.881 12L202.396 20.4853C201.81 21.0711 201.81 22.0208 202.396 22.6066C202.982 23.1924 203.931 23.1924 204.517 22.6066L214.063 13.0607ZM0 13.5H213.002V10.5H0V13.5Z" fill="url(#paint0_linear_4_9)" />
                  <defs>
                    <linearGradient id="paint0_linear_4_9" x1="93.6241" y1="12.5041" x2="225.122" y2="12.5042" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00CB6A" />
                      <stop offset="1" stop-color="#00819D" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h3>
          </div>
          
          {/* section 01: We all feel dizzy, tired most of the times, taking breaks help. */}
          <div className="landing-page-section-01-wrapper section-content-wrapper section-content-wrapper-flex">
            <div className="landing-page-section-01-content-wrapper">
              <h3 className="text-heading heading-wrapper">We all feel dizzy, tired most of the times, taking breaks help.</h3>
              <p className="text-p paragraph-wrapper">
                Feeling tired always is getting normal
                nowadays, but it's normal. Our routines
                are not so flexible enough to manage
                time for ourselves. Start listening to your
                body and keep this #hustle balanced.
              </p>
            </div>
            <DizzyPerson style={{ width: '480px', height: 'auto' }} />
          </div>

          {/* section 02: How to manage your work-life balance. How to relax? */}
          <div className="landing-page-section-02-wrapper section-content-wrapper-flex-start">
            <div className="landing-page-section-02-content-wrapper">
              <h3 className="text-heading heading-wrapper">How to manage your work-life balance. How to relax?</h3>
              <p className="text-p paragraph-wrapper">
                Well, there’s no such #mantra to have a
                proper work-life balance, but what we
                can start doing is #analyzing our routines
                and removing tasks that can be avoided.
                Which simply means creating a #Todo list.
              </p>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}