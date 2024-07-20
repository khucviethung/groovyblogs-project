import Link from 'next/link'
import './globals.signin.css'
export default function SignIn()  {
    return(
    <>
        {/* main content  */}
        <main
            id="page"
            className="grid-container grid-small"
            style={{ transform: "none" }}
        >
            {/* start header */}
            <header className="section underline-effect">
            <nav>
                <Link href="/" className="title small">
                Go back to home
                </Link>
            </nav>
            </header>
            <div className="subcribe bg-box">
            <div className="grid-container grid-small grid-parent text-center">
                <h4 className="title large">
                Welcome back to <span>Groovy</span>
                </h4>
                <p>Thoughts, stories and ideas.</p>
                <form action="" className="subcribe-form">
                <div className="form-group">
                    <input
                    type="email"
                    className="inputbox large"
                    placeholder="Enter your email address"
                    />
                    <button className="submit">Send Login Link</button>
                </div>
                <br />
                <p className="np-bottom">
                    Don&apos;t have an account yet?
                    <a href="" className="fw-bold">
                    Sign up
                    </a>
                </p>
                </form>
            </div>
            </div>
            {/* end full */}
        </main>
        {/* end of main content */}
    </>

    )
}