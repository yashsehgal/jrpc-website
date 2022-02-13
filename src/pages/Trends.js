import React, { useState } from 'react'

export default function Trends() {
  const [testTweetRef] = useState([
    {  
      username: 'johndoe', 
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!' 
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },{  
      username: 'johndoe', 
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!' 
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },{  
      username: 'johndoe', 
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!' 
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },{  
      username: 'johndoe', 
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!' 
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },{  
      username: 'johndoe', 
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!' 
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },{  
      username: 'johndoe', 
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!' 
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    }, {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    },
    {
      username: 'johndoe',
      tweetContent: 'I have recently taken my #justrelaxpeople challenge. I will be managing my routines from today onwards. Excited!'
    }
  ]);

  return (
    <React.Fragment>
      <div className="trends-page">
        <div className="trends-page-wrapper content-center">
          <div className="hero-section-wrapper" style={{
            textAlign: 'left',
            width: 'fit-content',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '6rem'
          }}>
            <h1 className="text-xl">
              See the trends.
            </h1>
          </div>

          <div className="tweets-container section-content-wrapper" style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            rowGap: '1.2rem'
          }}>
            {testTweetRef.map((tweet, index) => (
              <div className="tweet-block" key={index}>
                <h3 className='tweet-username text-heading' style={{ fontSize: '24px' }}>
                  @{tweet.username}
                </h3>
                <p className='tweet-content text-p paragraph-wrapper'>
                  {tweet.tweetContent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}