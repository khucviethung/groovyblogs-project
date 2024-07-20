import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './globals.aside.css'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas, faRss } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Aside() {
    return (
      <>
        {/* aside right content */}
        <aside id="sidebar" className="grid-30">
          <div className="stickyAside">
            {/* content 1 right */}
            <article className="bg-box grid-25 sticky-item title bordered widget-aside">
              <div className="widget-content mt-4">
                <h4 className="titleRight">About Me</h4>
                {/* avatar */}
                <div className="avatar">
                  <Link href="" className="imgAboutMe img-effect thumb-avatar">
                    <span
                      className="cover"
                      style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                    >
                    </span>
                  </Link>
                </div>
                {/* info right */}
                <div className="info">
                  <h4 className="name-aboutme underline-effect no-margin">
                    <Link href="">Jonathan Doe</Link>
                  </h4>
                  <p className="founder">Chile</p>
  
                  <div className="social iconAboutMe">
                    <Link href="" className='ms-2 me-3'><FontAwesomeIcon icon={faTwitter} /></Link>
                    <Link href="" className='me-3'><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link href="" className='me-3'><FontAwesomeIcon icon={faEarthAmericas} /></Link>
                  </div>
                </div>
                {/* end of info right */}
  
                {/* end of avatar */}
                <p className="text-about-me">Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for different markets, also, I offer live support via our ticket system.
                </p>
              </div>
              {/* end of widget-content */}
  
            </article>
            {/* content 2 right */}
            <article className="bg-box grid-25 sticky-item title bordered widget-aside">
              <h4 className="titleRight">Featured Articles</h4>
              {/* feature  1 */}
              <section className="d-flex featured-article mt-4">
                <div className="d-flex info">
                  <Link href="" className="">
                    <span
                      className="img-aside img-effect cover"
                      style={{
                        backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/light-bulb-creative-business-idea-symbol-held-by-hand_53876-127176.jpg")',
                        display: 'block',
                        borderRadius: '8px',
                        border: '1px solid rgba(39, 39, 39, 0.75)',
                      }}
                    >
                    </span>
                    <span className="number">1</span>
                  </Link>
                  <div className="right underline-effect">
                    <Link href={''} className="fw-bolder">Building your audience with subscriber signups</Link>
                    <h6 className="fw-light">Sep 25, 2022</h6>
                  </div>
                </div>
              </section>
              {/* feature 2 */}
              <section className="d-flex featured-article">
                <div className="d-flex info">
                  <Link href="" className="">
                    <span
                      className="img-aside img-effect cover"
                      style={{
                        backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/various-types-pumpkins-arranged-height-food-gravity-concept-autumn-halloween-theme_492182-203-1.jpg")',
                        display: 'block',
                        borderRadius: '8px',
                        border: '1px solid rgba(39, 39, 39, 0.75)',
                      }}
                    >
                    </span>
                    <span className="number">2</span>
                  </Link>
                  <div className="right underline-effect">
                    <Link href={''} className="fw-bolder">Building your audience with subscriber signups</Link>
                    <h6 className="fw-light">Sep 25, 2022</h6>
                  </div>
                </div>
              </section>
              {/* feature 3 */}
              <section className="d-flex featured-article">
                <div className="d-flex info">
                  <Link href="" className="">
                    <span
                      className="img-aside img-effect cover"
                      style={{
                        backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/illustration-yellow-blue-sneaker-sticker-cartoon_518759-157.jpg")',
                        display: 'block',
                        borderRadius: '8px',
                        border: '1px solid rgba(39, 39, 39, 0.75)',
                      }}
                    >
                    </span>
                    <span className="number">3</span>
                  </Link>
                  <div className="right underline-effect">
                    <Link  href='' className="fw-bolder">Building your audience with subscriber signups</Link>
                    <h6 className="fw-light">Sep 25, 2022</h6>
                  </div>
                </div>
              </section>
            </article>
            {/* content 3 right */}
            <article className="bg-box grid-25 sticky-item title bordered">
              <h4 className="titleRight">Follow Me!</h4>
              <div className="row mt-4 mx-auto ">
                <h6 className="icon fw-bolder"><span className='icon-right-3 '><FontAwesomeIcon icon={faFacebookF} /></span>  Facebook </h6>
                <h6 className="icon fw-bolder"><span className='icon-right-3'><FontAwesomeIcon icon={faTwitter} /></span>  Twitter </h6>
                <h6 className="icon fw-bolder"><span className='icon-right-3'><FontAwesomeIcon icon={faInstagram} /></span>  Instagram </h6>
                <h6 className="icon fw-bolder"><span className='icon-right-3'><FontAwesomeIcon icon={faRss} /></span>  RSS </h6>
              </div>
            </article>
            {/* content 4 right */}
            <article className="bg-box grid-25 sticky-item title bordered">
              <h4 className="titleRight">Tag Cloud</h4>
              <div className="tagCloud row mt-4 mx-auto">
                <div className="d-inline-flex text-dark">
                  <button className="p-2 ps-3 pe-3">Getting Started</button>
                  <button className="p-2 ps-3 pe-3">Health</button>
                </div>
                <div className="d-inline-flex text-dark">
                  <button className="p-2 ps-3 pe-3">Lifestyle</button>
                  <button className="p-2 ps-3 pe-3">Music</button>
                </div>
                <div className="d-inline-flex text-dark">
                  <button className="p-2 ps-3 pe-3">Technology</button>
                  <button className="p-2 ps-3 pe-3">Travel</button>
                </div>
              </div>
            </article>
          </div>
        </aside>
        {/* end of aside content */}
      </>
    );
  }
  