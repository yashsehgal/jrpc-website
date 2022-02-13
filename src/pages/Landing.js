import React, { useState } from "react";

// images imported as react-components
import DizzyPerson from '../assets/dizzy.svg';
import BalancedWorkspace from "../assets/balanced-workspace.svg";
import GamingPeople from "../assets/gaming-people.svg";
import Organized from "../assets/organized.svg";

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
              See the stories.
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
            <img src={DizzyPerson} style={{ width: '480px', height: 'auto' }} alt="dizzy-person" />
          </div>

          {/* section 02: How to manage your work-life balance. How to relax? */}
          <div className="landing-page-section-02-wrapper section-content-wrapper section-content-wrapper-flex-start">
            <div className="landing-page-section-02-content-wrapper">
              <h3 className="text-heading heading-wrapper">How to manage your work-life balance. How to relax?</h3>
              <p className="text-p paragraph-wrapper">
                Well, there's no such #mantra to have a
                proper work-life balance, but what we
                can start doing is #analyzing our routines
                and removing tasks that can be avoided.
                Which simply means creating a #Todo list.
              </p>
              <h3 className="text-heading heading-wrapper">.continuing</h3>
              <p className="text-p paragraph-wrapper">
                Talking about todo lists, there're many
                task management apps that you can use
                in order to keep a track of your routine.
                #Notion is the best one that I know.
              </p>
            </div>
            <img src={BalancedWorkspace} style={{ width: '480px', height: 'auto' }} alt="balanced-workspace" />
          </div>

          {/* section 03: What actually happens? Things we really need to avoid. */}
          <div className="landing-page-section-03 section-content-wrapper">
            <div className="landing-page-section-03__layer-top-wrapper section-content-wrapper-flex">
              <div className="landing-page-section-03-content-wrapper">
                <h3 className="text-heading heading-wrapper">What actually happens? Things we really need to avoid.</h3>
                <p className="text-p paragraph-wrapper">
                  Our working hours are increasing due
                  to increasing distractions. Checking
                  Twitter, Instagram and other notifications,
                  chatting with friends in middle of something,
                  watching trailer reactions on YouTube. All this
                  collectively increases your work hours & you
                  feel you're tired when it's about actual work. 
                </p>
              </div>
              <img src={GamingPeople} style={{ width: '480px', height: 'auto' }} alt="gaming-people" />
            </div>
            <div className="landing-page-section-03__layer-bottom-wrapper" style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: '2.4rem',
              justifyContent: 'space-around'
            }}>
              <div className="continuing-block-content">
                <h3 className="text-heading heading-wrapper">.continuing</h3>
                <p className="text-p paragraph-wrapper">
                  #Forest is one of the finest apps
                  for productivity. It blocks apps and links
                  when you’re working and is easy to use.
                </p>
              </div>
              <div className="more-to-it-block-content">
                <h3 className="text-heading heading-wrapper">.more to it</h3>
                <p className="text-p paragraph-wrapper">
                  Working 6-7 hours straight is not important,
                  but quality hours are the ones that get count.
                  If you get free early, you’ll be able to get time
                  for yourself.
                </p>
              </div>
            </div>
          </div>

          {/* section 04: congratulations section +100000000 points */}
          <div className="landing-page-section-04 section-content-wrapper section-content-wrapper-flex">
            <div className="landing-page-section-04-content-wrapper">
              <h1 className="text-lg heading-wrapper" style={{ width: '18ch' }}>
                Now, I am making
                sure that you’ve
                started managing
                your routine.
              </h1>
              <h3 className="text-heading gradient-text" style={{ marginBottom: '0px', marginTop: '6px' }}>
                Give yourself +10000000 points,
              </h3>
              <h3 className="text-heading gradient-text" style={{ marginTop: '0px' }}>
                You're great.
              </h3>
            </div>
            <img src={Organized} style={{ width: '380px', height: 'auto' }} alt="organized" />
          </div>

          {/* CTA for Hashtag */}
          <div className="landing-page-cta-section section-content-wrapper" style={{ textAlign: 'center' }}>
            <h1 className="text-lg">
              Be a part of <span className="gradient-text">#justrelaxpeople</span>
            </h1>
          </div>

          {/* section 05: queries & solutions wrapper */}
          <div className="landing-page-secion-05 section-content-wrapper">
            <div className="landing-page-section-05__layer-01 section-content-wrapper-flex-start">
              <div className="solution-01-content-wrapper">
                <h3 className="text-heading heading-wrapper">Now you might have some time for yourself, you’d love to do these things 😍</h3>
                <p className="text-p paragraph-wrapper">
                  These are the things that you already know
                  but it’s just to remind you that you need to
                  do these things as well 🙃
                </p>
                <p className="text-p paragraph-wrapper">
                  Things like Cooking food, cleaning desks,
                  flowering plants, reading books, doing things
                  that quickly changes your mindstate are
                  really effective for having a productive day.
                </p>
              </div>
              <div className="solution-02-content-wrapper">
                <h3 className="text-heading heading-wrapper">Don’t forget to take care of
                  your health. More sitting means more cardio. Make it a rule. 💯</h3>
                <p className="text-p paragraph-wrapper">
                  Moving body is good for your mind, it
                  helps to be more productive. Also, keeps
                  the senses active and make you feel more
                  motivated.
                </p>
              </div>
            </div>
            <div className="landing-page-section-05__layer-01 section-content-wrapper-flex-start">
              <div className="solution-03-content-wrapper">
                <h3 className="text-heading heading-wrapper">One day prior for your self-care routine. Eat well, enjoy and don’t work at all.</h3>
                <p className="text-p paragraph-wrapper">
                  Set atleast one or atmost 2 days per week
                  prior, for your self-care routine. Sleep a little-bit
                  more than your usual routine, enjoy your morning
                  bath, do things that you don’t usually get time for,
                  have a heavy breakfast, catch up with your friends,
                  go somewhere out, eat good food at a good place,
                  maybe exchange books over a meet, maybe meet
                  your girlfriend (if you’ve one 🙃), Shop for yourself,
                  Have a great dinner, be grateful that for everything
                  you’re able to do, maybe end up your day by watching
                  a great movie (I personally like Marvel movies).
                </p>
              </div>
              <div className="solution-04-content-wrapper">
                <h3 className="text-heading heading-wrapper">Hope you liked reading the
                  previous paragraph, It meant
                  to be that Soothing. So your day in a life will be 😇</h3>
                <p className="text-p paragraph-wrapper">
                  Try following these things and make a
                  clean and healthy routine for yourself.
                  Work Hard, Party Hard, Rest Hard.
                </p>
                <p className="text-p paragraph-wrapper">
                  Life’s beautiful, enjoy it to the fullest.
                </p>
              </div>
            </div>
          </div>

          {/* section 06: CTA Suggestions section */}
          <div className="landing-page-section-06 section-content-wrapper">
            <div className="landing-page-section-06__layer-01-content-wrapper section-content-wrapper-flex-start">
              <div className="suggestion-01-content-wrapper">
                <h3 className="text-heading heading-wrapper">
                  Capture your workspace and
                  note down your experiences.
                  daily.
                </h3>
              </div>
              <div className="suggestion-02-content-wrapper">
                <h3 className="text-heading heading-wrapper">
                  Share your experiences &
                  growth on Twitter with <span className="gradient-text"> #justrelaxpeople</span>
                </h3>
              </div>
            </div>
            <div className="landing-page-section-06__layer-01-content-wrapper section-content-wrapper-flex-start">
              <div className="suggestion-03-content-wrapper">
                <h3 className="text-heading heading-wrapper">
                  Don’t forget. This site is more
                  like a reminder to follow a healthy
                  lifestyle with some tips and methods.
                  We beileve that these would be
                  helpful for you. <span className="gradient-text">Keep Relaxing!</span>
                </h3>
              </div>
              <div className="suggestion-04-content-wrapper">
                <h3 className="text-heading heading-wrapper">
                  {/* nothing as of now */}
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}