import React from "react";

export default function UnderDevelopment() {
  return (
    <React.Fragment>
      <div className="under-development-page">
        <div className="under-development-page-wrapper content-center">
          <div className="hero-section-wrapper" style={{
            textAlign: 'left',
            width: 'fit-content',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '6rem'
          }}>
            <h1 className="text-xl">
              This page is under design <br /> and development
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}