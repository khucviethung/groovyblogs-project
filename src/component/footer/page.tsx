'use client'
import Image from "next/image";
import './globals.footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return(
    <>
        {/* Footer */}
        <footer className="footer container-fluid mx-auto">
            <div className="content-1 grid-container grid-large">
            {" "}
            {/* content 1 */}
            <div className="row d-flex justify-content-center ">
                <article className="footerItem col mt-5 grid-25 col-lg-3 col-md-6 col-sm-12 mb-5">
                <Image
                    className="mb-5"
                    src="https://ghost.estudiopatagon.com/groovy/content/images/2022/08/logo-groovy-1.png"
                    alt=""
                    width={170}
                    height={45}
                />
                <p>
                    A super modern theme following the latest trends with premium
                    Membership and fully compatible with Ghost.
                </p>
                <p>
                    Check more themes like this on{" "}
                    <a
                    className="text-decoration-none text-dark"
                    href="estudiodivatagon.com"
                    >
                    <b>estudiodivatagon.com</b>
                    </a>{" "}
                </p>
                </article>
                <article className="footerItem col grid-25 col-lg-3 col-md-6 col-sm-12">
                <h4 className="titleFooter w-50 p-1 ms-3 text-center fw-bolder">
                    Latest Articles
                </h4>
                <div className="grid-25 mt-4">
                    {/* section 1 */}
                    <section className="d-flex featured-article mb-3">
                    <div className="d-flex info">
                        <a href="" className="">
                        <span
                            className="img-aside img-effect cover"
                            style={{
                            backgroundImage:
                                'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/light-bulb-creative-business-idea-symbol-held-by-hand_53876-127176.jpg")',
                            display: "block",
                            borderRadius: 8,
                            border: "1px solid rgb(39 39 39 / 75%)"
                            }}
                        ></span>
                        <span className="number">1</span>
                        </a>
                        <div className="right underline-effect">
                        <a className="fw-bolder">
                            Building your audience with subscriber signups
                        </a>
                        <h6 className="fw-lighter ">Sep 25, 2022</h6>
                        </div>
                    </div>
                    </section>
                    {/* section 2 */}
                    <section className="d-flex featured-article mb-3">
                    <div className="d-flex info">
                        <a href="" className="">
                        <span
                            className="img-aside img-effect cover"
                            style={{
                            backgroundImage:
                                'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/08/layered-number-one-stylized-typography_53876-96387.webp")',
                            display: "block",
                            borderRadius: 8,
                            border: "1px solid rgb(39 39 39 / 75%)"
                            }}
                        ></span>
                        <span className="number">2</span>
                        </a>
                        <div className="right underline-effect">
                        <a className="fw-bolder">
                            Far far away, behind the word mountains
                        </a>
                        <h6 className="fw-lighter ">Mar 16, 2021</h6>
                        </div>
                    </div>
                    </section>
                    {/* section 3 */}
                    <section className="d-flex featured-article">
                    <div className="d-flex info">
                        <a href="" className="">
                        <span
                            className="img-aside img-effect cover"
                            style={{
                            backgroundImage:
                                'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/various-types-pumpkins-arranged-height-food-gravity-concept-autumn-halloween-theme_492182-203-1.jpg")',
                            display: "block",
                            borderRadius: 8,
                            border: "1px solid rgb(39 39 39 / 75%)"
                            }}
                        ></span>
                        <span className="number">3</span>
                        </a>
                        <div className="right underline-effect">
                        <a className="fw-bolder">
                            Selling memberships with recurring revenue
                        </a>
                        <h6 className="fw-lighter ">Mar 16, 2021</h6>
                        </div>
                    </div>
                    </section>
                </div>
                </article>
                <article className="footerItem col grid-25 col-lg-3 col-md-6 col-sm-12">
                <h4 className="titleFooter w-50 p-1 ms-3 text-center fw-bolder">
                    Tag Cloud
                </h4>
                <div className="tagCloud row mx-auto mt-4">
                    <div className="d-inline-flex text-dark flex-wrap">
                    <button className="p-2 ps-3 pe-3">
                        <i className="fa-regular fa-circle-dot" /> Getting Started
                    </button>
                    <button className="p-2 ps-3 pe-3">
                        <i className="fa-regular fa-circle-dot" /> Health
                    </button>
                    </div>
                    <div className="d-inline-flex text-dark flex-wrap">
                    <button className="p-2 ps-3 pe-3">
                        <i className="fa-regular fa-circle-dot" /> Lifestyle
                    </button>
                    <button className="p-2 ps-3 pe-3">
                        <i className="fa-regular fa-circle-dot" /> Music
                    </button>
                    </div>
                    <div className="d-inline-flex text-dark flex-wrap">
                    <button className="p-2 ps-3 pe-3">
                        <i className="fa-regular fa-circle-dot" /> Technology
                    </button>
                    <button className="p-2 ps-3 pe-3">
                        <i className="fa-regular fa-circle-dot" /> Travel
                    </button>
                    </div>
                </div>
                </article>
                <article className="footerItem col grid-25 col-lg-3 col-md-6 col-sm-12">
                <h4 className="titleFooter w-50 p-1 ms-3 text-center fw-bolder">
                    Follow Me!
                </h4>
                <div className="row mx-auto mt-4 ">
                    <h6 className="icon fw-bolder"><span className='icon-right-3 '><FontAwesomeIcon icon={faFacebookF} /></span>  Facebook </h6>
                    <h6 className="icon fw-bolder"><span className='icon-right-3'><FontAwesomeIcon icon={faTwitter} /></span>  Twitter </h6>
                    <h6 className="icon fw-bolder"><span className='icon-right-3'><FontAwesomeIcon icon={faInstagram} /></span>  Instagram </h6>
                    <h6 className="icon fw-bolder"><span className='icon-right-3'><FontAwesomeIcon icon={faRss} /></span>  RSS </h6>
                </div>
                </article>
            </div>
            </div>
            <div className="content-2 subcribe subscribeFooter grid-container grid-large text-center">
            {" "}
            {/* content 2 */}
            <div className="grid-small">
                <form action="" className="subscribe-form">
                <h4 className="titleForm">Subscribe to our Newsletter</h4>
                <div className="form-group d-flex justify-content-center mt-3">
                    <input
                    type="email"
                    name="email"
                    className="inputForm mx-auto"
                    placeholder="Enter your email address"
                    required
                    />
                    <button className="submitButton" type="submit" data-title="Submit">
                    Submit
                    </button>
                </div>
                <span className="subscribe-decoration" ></span>
                </form>
                <p className="description mt-4 text-center">
                Subscribe to our email newsletter and unlock access to
                <b> members-only </b>
                content and
                <b> exclusive updates. </b>
                </p>
            </div>
            </div>
            <nav className="second-nav grid-container grid-small">
            {" "}
            {/* content 3 */}
            <ul className="menuFooter text-center" style={{ listStyle: "none" }}>
                <li>
                <a href="">Terms &amp; Conditions</a>
                </li>
                <li>
                <span>|</span>
                <a href="">Faq</a>
                </li>
                <li>
                <span>|</span>
                <a href="">Privacy Policy</a>
                </li>
            </ul>
            </nav>
            <p className="published text-center">
            {" "}
            {/* content 4 */}
            Published with
            <a
                href=""
                className="fw-bold"
                style={{ textDecoration: "none", color: "black" }}
            >
                Ghost
            </a>
            &amp;
            <a
                href=""
                className="fw-bold"
                style={{ textDecoration: "none", color: "black" }}
            >
                EstudioPatagon
            </a>
            </p>
            {/*end footer  */}
        </footer>
        {/* end of footer content */}
        
    </>

    )
}