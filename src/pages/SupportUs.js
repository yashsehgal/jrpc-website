import React from "react";
import Button from "../components/Button";

export default function SupportUs() {
  return(
    <React.Fragment>
      <div className="support-us-page">
        <div className="support-us-page-wrapper content-center">
          <div className="hero-section-wrapper" style={{
            textAlign: 'left',
            width: 'fit-content',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '6rem'
          }}>
            <h1 className="text-xl">
              We are <span className="gradient-text">#relaxed</span> to see <br /> 
              you supporting us
            </h1>
            <p className="text-p paragraph-wrapper">
              ℹ️ We support that you want to support us, as of now the payment services are under-development.
            </p>
          </div>
          <div className="payment-methods section-content-wrapper" style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            rowGap: '1.2rem',
            marginTop: '8rem'
          }}>
            <div className="paypal-content-wrapper">
              <h3 className="text-heading heading-wrapper">
                Support us through PayPal
              </h3>
              <p className="text-p paragraph-wrapper">
                You can pay in any currency. Dolar ($) and INR(Rupees) are suggested.
              </p>
              <Button>Proceed via PayPal</Button>
            </div>
            <div className="razorpay-content-wrapper">
              <h3 className="text-heading heading-wrapper">
                Support us through Razorpay
              </h3>
              <p className="text-p paragraph-wrapper">
                You can pay in any currency. INR(Rupees) are suggested.
              </p>
              <Button>Proceed via Razorpay</Button>
            </div>
            <div className="bmac-content-wrapper">
              <h3 className="text-heading heading-wrapper">
                Support us by buying a cup of coffee
              </h3>
              <p className="text-p paragraph-wrapper">
                You can buy us a coffee, pizza, beer. anything!
              </p>
              <Button>Buy us something</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}