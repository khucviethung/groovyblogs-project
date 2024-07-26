import Image from "next/image";
import "./globals.detailspage.css";
import Aside from "../../component/aside/page";

export default function DetailPage() {
  return (
    <>
      {/* main content  */}
      <main
        id="contentHomepage"
        className="grid-container"
        style={{ transform: "none" }}
      >
        <div className="row parentContent">
          {/* Start Full Main Content */}
          <section className="content">
            {/* left content */}
            <div className="left-content grid-70">
              <div id="articles-of-leftcontent">
                {/* articles */}
                <article className="main-article bg-box">
                  <div className="category-overplay" />
                  {/* header */}
                  <header className="d-flex">
                    <div className="imageDetails">
                      <a href="" className="thumb img-effect">
                        <span
                          className="img-content mb-4 cover"
                          style={{
                            backgroundImage:
                              'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/light-bulb-creative-business-idea-symbol-held-by-hand_53876-127176.jpg")',
                          }}
                        ></span>
                      </a>
                    </div>
                    <div className="info-content align-items-center">
                      <div className="top">
                        <div className="tag">
                          <button className="button-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                            </svg>
                            Travel
                          </button>
                        </div>
                        <time dateTime="2022-09-25">September 25, 2022</time>
                        <div className="min-read ms-4">3 min read</div>
                      </div>
                      <h1 className="main-tittle no-margin">
                        Building your audience with subscriber signups
                      </h1>
                      <div className="d-flex last-update ">
                        <strong> Last Update </strong>: October 21, 2022
                      </div>
                    </div>
                  </header>
                  {/* post content */}
                  <section className="post-content">
                    {/* text content */}
                    <div className="text">
                      <p className="">
                        What sets Ghost apart from other products is that you
                        can publish content and grow your audience using the
                        same platform. Rather than just endlessly posting and
                        hoping someone is listening, you can track real signups
                        against your work and have them subscribe to be notified
                        of future posts. The feature that makes all this
                        possible is called Portal.
                      </p>
                      <p>
                        Portal is an embedded interface for your audience to
                        sign up to your site. It works on every Ghost site, with
                        every theme, and for any type of publisher.
                      </p>
                      <p>
                        You can customize the design, content and settings of
                        Portal to suit your site, whether you just want people
                        to sign up to your newsletter — or you&apos;re running a
                        full premium publication with user sign-ins and private
                        content.
                      </p>
                      <figure className="image-card">
                        <Image
                          className="imgCaption img-effect justify-content-center"
                          src="https://ghost.estudiopatagon.com/groovy/content/images/2022/09/bulb-sign-idea-symbol-word_53876-125397.jpg "
                          alt=""
                          width={440}
                          height={200}
                        />
                        <figcaption>Image Caption</figcaption>
                      </figure>
                      <p>
                        Once people sign up to your site, they&apos;ll receive
                        an email confirmation with a link to click. The link
                        acts as an automatic sign-in, so subscribers will be
                        automatically signed-in to your site when they click on
                        it. There are a couple of interesting angles to this:
                      </p>
                      <p>
                        Because subscribers are automatically able to sign in
                        and out of your site as registered members: You can
                        (optionally) restrict access to posts and pages
                        depending on whether people are signed-in or not. So if
                        you want to publish some posts for free, but keep some
                        really great stuff for members-only, this can be a great
                        draw to encourage people to sign up!
                      </p>
                      <p>
                        Ghost members sign in using email authentication links,
                        so there are no passwords for people to set or forget.
                        You can turn any list of email subscribers into a
                        database of registered members who can sign in to your
                        site. Like magic.
                      </p>
                      <figure className="gallery-card">
                        <div className="d-flex gallery-container">
                          <div className="d-flex row justify-content-center align-items-center">
                            <div className="col">
                              <a href="">
                                <Image
                                  src="https://ghost.estudiopatagon.com/groovy/content/images/2022/09/1920-love-to-drink-coffee-to-increase-energy.jpg"
                                  className="gallery-image-item"
                                  alt=""
                                  width={200}
                                  height={200}
                                />
                              </a>
                            </div>
                            <div className="col">
                              <a href="">
                                <Image
                                  src="https://ghost.estudiopatagon.com/groovy/content/images/2022/09/minimal-school-bell_360032-1067.jpg"
                                  className="gallery-image-item"
                                  alt=""
                                  width={200}
                                  height={200}
                                />
                              </a>
                            </div>
                            <div className="col">
                              <a href="">
                                <Image
                                  src="https://ghost.estudiopatagon.com/groovy/content/images/size/w600/2022/09/robot-hand-holding-light-bulb-ice-cream_53876-146268.jpg"
                                  className="gallery-image-item"
                                  alt=""
                                  width={200}
                                  height={200}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <figcaption>Gallery card</figcaption>
                      </figure>
                      <p>
                        Portal makes all of this possible, and it appears by
                        default as a floating button in the bottom-right corner
                        of your site. When people are logged out, clicking it
                        will open a sign-up/sign-in window. When members are
                        logged in, clicking the Portal button will open the
                        account menu where they can edit their name, email, and
                        subscription settings.
                      </p>
                      <p>
                        The floating Portal button is completely optional. If
                        you prefer, you can add manual links to your content,
                        navigation, or theme to trigger it instead.
                      </p>
                      <p>
                        Like this!
                        <a href="">Sign up here</a>
                      </p>
                      <hr />
                      <p>
                        As you start to grow your registered audience,
                        you&apos;ll be able to get a sense of who you&apos;re
                        publishing for and where those people are coming from.
                        Best of all: You&apos;ll have a straightforward,
                        reliable way to connect with people who enjoy your work.
                      </p>
                      <p>
                        Social networks go in and out of fashion all the time.
                        Email addresses are timeless.
                      </p>
                      <p>
                        Growing your audience is valuable no matter what type of
                        site you run, but if your content is your business, then
                        you might also be interested in{" "}
                        <a href="">setting up premium subscriptions.</a>
                      </p>
                    </div>
                    {/* tag bottom */}
                    <div className="tag-bottom text-center d-flex justify-content-center align-items-center">
                      <p className="small me-3">Tagged in: </p>
                      <div className="tags">
                        <button className="button-content ms-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                          </svg>
                          Travel
                        </button>
                        <button className="button-content ms-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                          </svg>   
                          Health
                        </button>
                      </div>
                    </div>
                    {/* subcribe */}
                    <div className="subcribe">
                      <div className="grid-container text-center">
                        <form action="" className="subscribe-form">
                          <h3 className="title-subcribe medium">
                            Like what you read?
                          </h3>
                          <h4 className="title-subcribe large">
                            Subscribe to our Newsletter
                          </h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="inputForm mx-auto"
                              placeholder="Enter your email address"
                              required
                            />
                            <button
                              className="submitbutton-detailspage"
                              type="submit"
                              data-title="Submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                        <p className="description">
                          Subscribe to our email newsletter and unlock access to{" "}
                          <b>members-only</b> content and{" "}
                          <b>exclusive updates.</b>
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* end of post-content */}
                </article>
                {/* end of articles */}
                {/* section about the authors */}
                <section id="authors" className="author section d-flex bg-box">
                  <h3 className=" title-authors medium">About the Author</h3>
                  {/* left content wrapper */}
                  <div className="wrapper">
                    {/* start flexbox left */}
                    <div className="d-flex">
                      <a className="author-avatar" href="">
                        <span>
                          <Image
                            className="about-jonathanImg"
                            src="https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp"
                            alt=""
                            width={200}
                            height={200}
                          />
                        </span>
                      </a>
                      {/* right of flex left */}
                      <div className="wrapper-right">
                        <h4
                          className="wrapper-text hoverTextEffect medium"
                          style={{
                            fontWeight: 800,
                            fontSize: 22,
                            letterSpacing: "0.5px",
                            lineHeight: "1.45",
                          }}
                        >
                          Jonathan Doe
                        </h4>
                        <p>Chile</p>
                        <div className="icon">
                          <span className="iconAboutMe">
                            <a href="">
                              <i className="fa-brands fa-twitter ms-2 me-3" />
                            </a>
                            <a href="">
                              <i className="fa-brands fa-facebook-f me-3" />
                            </a>
                            <a href="">
                              <i className="fa-solid fa-earth-americas me-3" />
                            </a>
                          </span>
                        </div>
                      </div>
                      {/* end of right flex left  */}
                    </div>
                    {/* end of d-flex */}
                    {/* info of left */}
                    <div className="wrapper-info">
                      <p>
                        Hello! My name is Jonathan Doe working from Chile. I
                        create some Ghost and Wordpress themes for differents
                        markets, also, i offer live support via our ticket
                        system.
                      </p>
                      <button className="wrapper-button">
                        <a
                          href=""
                          style={{
                            textDecoration: "none",
                            color: "#333",
                            fontWeight: 700,
                          }}
                        >
                          View All Articles
                        </a>
                      </button>
                    </div>
                    {/* end of info left */}
                  </div>
                  {/* end of left content wrapper */}
                  {/* right content authors*/}
                  <div className="authors-post">
                    <h4 className="authors-post-text small text-center">
                      Check latest articles from <b>this author:</b>
                    </h4>
                    {/* section 1 */}
                    <section className="d-flex featured-article">
                      <div className="d-flex info">
                        <a href="" className="">
                          <span
                            className="img-aside img-effect cover"
                            style={{
                              backgroundImage:
                                'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/light-bulb-creative-business-idea-symbol-held-by-hand_53876-127176.jpg")',
                              display: "block",
                              borderRadius: 8,
                              border: "1px solid rgb(39 39 39 / 75%)",
                            }}
                          ></span>
                          <span className="number">1</span>
                        </a>
                        <div className="right">
                          <span className="fw-bolder">
                            Building your audience with subscriber signups
                          </span>
                          <h6 className="fw-lighter ">Sep 25, 2022</h6>
                        </div>
                      </div>
                    </section>
                    {/* section 2 */}
                    <section className="d-flex featured-article">
                      <div className="d-flex info">
                        <a href="" className="">
                          <span
                            className="img-aside img-effect cover"
                            style={{
                              backgroundImage:
                                'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/08/layered-number-one-stylized-typography_53876-96387.webp")',
                              display: "block",
                              borderRadius: 8,
                              border: "1px solid rgb(39 39 39 / 75%)",
                            }}
                          ></span>
                          <span className="number">2</span>
                        </a>
                        <div className="right">
                          <span className="fw-bolder">
                            Building your audience with subscriber signups
                          </span>
                          <h6 className="fw-lighter ">Sep 25, 2022</h6>
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
                              border: "1px solid rgb(39 39 39 / 75%)",
                            }}
                          ></span>
                          <span className="number">3</span>
                        </a>
                        <div className="right">
                          <span className="fw-bolder">
                            Building your audience with subscriber signups
                          </span>
                          <h6 className="fw-lighter ">Sep 25, 2022</h6>
                        </div>
                      </div>
                    </section>
                  </div>
                  {/* end of right content authors */}
                  {/* end of section about the authors */}
                </section>
                {/* end of about the author */}
                {/* comments */}
                <div className="bg-box section">
                  <div className="comment-root">
                    {/* first line comments  */}
                    <div className="d-flex justify-content-between mb-4">
                      <h2 />
                      <span
                        className="text-comment"
                        style={{ color: "#00000080", fontSize: 16 }}
                      >
                        0 comments
                      </span>
                    </div>
                    {/* end of first line comments */}
                    {/* main comment */}
                    <div>
                      <section className="d-flex main-comment">
                        <h1
                          className="text-center"
                          style={{ fontSize: 24, fontWeight: 600 }}
                        >
                          Start the conversation
                        </h1>
                        <p style={{ marginBottom: 28 }}>
                          Become a member of{" "}
                          <span style={{ fontWeight: 500 }}>Groovy</span> to
                          start commenting.
                        </p>
                        <button
                          id="btn"
                          className="btn-comment"
                          style={{ opacity: 90 }}
                        >
                          {" "}
                          Sign up now{" "}
                        </button>
                        <p>
                          <span style={{ color: "#0006" }}>
                            Already a member?&nbsp;
                          </span>
                          <button id="btn" className="btn-signin-comment">
                            Sign in
                          </button>
                        </p>
                      </section>
                    </div>
                    {/* end of main comment */}
                  </div>
                </div>
                {/* end of comments */}
              </div>
              {/* end of articles left content */}
            </div>
            {/* end of full left content */}

            {/* aside right content */}
            <Aside />

          </section>
          {/* end of Full Main Content  */}

          {/* previous articles */}
          <section className="sibling mt-5">
            <article
              className="section bg-box d-flex align-items-center"
              style={{ width: "47.5%" }}
            >
              <a href="/" className="thumb img-effect">
                <span
                  className="img-sibling "
                  style={{
                    backgroundImage:
                      'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/08/layered-number-one-stylized-typography_53876-96387.webp")',
                  }}
                ></span>
              </a>
              {/* info-sibling */}
              <div className="info-sibling">
                <div className="tags">
                  <button className="button-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                    </svg>
                    Getting Started
                  </button>
                </div>
                <h4 className="title-sibling">
                  Far far away, behind the word mountains
                </h4>
                <div className="meta-sibling">
                  <time dateTime="2021-03-16">Mar 16, 2021</time>
                  <div className="min-read">3 min read</div>
                </div>
              </div>
              {/* end of info-sibling */}
            </article>
            {/* end of previous articles */}
          </section>
        </div>
      </main>
      {/* end of main content */}
    </>
  );
}
