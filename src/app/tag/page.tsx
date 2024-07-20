import Home from "../page";
import './globals.tag.css'

export default function TagPage() {
    return(
        <>
          {/* main content  */}
            {/* tag */}
            <div className="tag-description bg-box grid-medium ">
              <div className="left grid-35">
                <b>Category: </b>
                <h1 className="titleTag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-hexagon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"
                    />
                  </svg>
                  Getting started
                </h1>
                <div className="total" style={{ marginTop: 10 }}>
                  8 <span className="">Articles</span>
                </div>
              </div>
              <div className="right grid-65">
                <p>
                  Sometimes you might want to put your site behind closed doors If
                  you&apos;ve got a publication that you don&apos;t want the world to see yet
                  because it&apos;s not ready to launch, you can hide your Ghost site behind
                  a simple shared pass-phrase.
                </p>
              </div>
              <div className="category-overplay" />
            </div>
            {/* Home component */}
            <Home/>
          {/* end of main content */}
        </>

    )
}