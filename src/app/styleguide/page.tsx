'use client'
import Image from "next/image";
import './globals.styleguide.css'
import { useEffect, useRef, useState } from "react";

export default function StyleguidePage() {
    const [showContentToggle1,setShowContentToggle1] = useState(false);
    const [showContentToggle2,setShowContentToggle2] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [copy,setCopy] = useState('')
    const audioRef = useRef<HTMLAudioElement>(null);        // sài useRef vì thao tác với DOM
    const seekSliderRef = useRef<HTMLInputElement>(null);
    const volumeSliderRef = useRef<HTMLInputElement>(null);

    // toggle show content
    const handleToogle = (toggleNumber: number) => {
        if (toggleNumber === 1) {
            setShowContentToggle1(!showContentToggle1);
        } else if (toggleNumber === 2) {
            setShowContentToggle2(!showContentToggle2);
        }
    };

    // play pause music button
    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();  // Nếu âm thanh đang phát, tạm dừng âm thanh
            } else {
                audio.play();   // Nếu âm thanh đang tạm dừng, phát âm thanh
            }
            setIsPlaying(!isPlaying);   // Chuyển đổi trạng thái isPlaying ( bắt buộc phải có )
        }
    };

    // tua nhạc
    const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        const newTime = (newValue / 100) * (audioRef.current?.duration || 0); 
    
        if (audioRef.current && isFinite(newTime)) {
            audioRef.current.currentTime = newTime;
        }else {
            console.error('Cannot seek audio: Invalid time or audio reference.');
        }
    };

    // volume
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (audioRef.current) {
            audioRef.current.volume = newValue / 100;
            setVolume(newValue);
            setIsMuted(newValue === 0);
        }
    };

    // mute
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // tốc độ phát
    const changePlaybackRate = () => {
        if (audioRef.current) {
            let newRate = 1;
            if (playbackRate === 1) {
                newRate = 1.5;
            } else if (playbackRate === 1.5) {
                newRate = 2;
            } else if (playbackRate === 2) {
                newRate = 1;
            }
            audioRef.current.playbackRate = newRate;
            setPlaybackRate(newRate);
        }
    };


    // copy
    const handleCopy = () => {
        const htmlCssContent = document.getElementById('htmlCssContent');
        if (htmlCssContent) {
            const textToCopy = htmlCssContent.innerText;

            navigator.clipboard.writeText(textToCopy).then(() => {
                console.log('Text copied to clipboard');
                // Optionally update button text to "Copied"
                setCopy('Copied');

                // Reset button text after 4 seconds
                setTimeout(() => {
                    setCopy('Copy')
                }, 4000);
            }).catch(err => {
                console.error('Error copying text: ', err);
                // Handle error
            });
        }
    }

    useEffect(() => {
        const audio = audioRef.current;
        const seekSlider = seekSliderRef.current;
        const volumeSlider = volumeSliderRef.current;

        if (!audio || !seekSlider || !volumeSlider) return;

        const updateDuration = () => {
            if (audio.duration) {
                setDuration(formatTime(audio.duration));
            }
        };

        const updateCurrentTime = () => {
            setCurrentTime(formatTime(audio.currentTime));
            seekSlider.value = String((audio.currentTime / audio.duration) * 100);
        };

        const formatTime = (seconds: number): string => {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        };

        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('timeupdate', updateCurrentTime);

        return () => {
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('timeupdate', updateCurrentTime);
        };
    }, [isPlaying]);


    return(
    <>
        {/* main content  */}
        <main id="page" className="grid-container" style={{ transform: "none" }}>
            {/* start */}
            <article className="full-content">
            {/* image */}
            <section className="featured-image cover">
                <Image
                src="https://ghost.estudiopatagon.com/groovy/content/images/2022/09/1920-love-to-drink-coffee-to-increase-energy-5.jpg"
                alt=""
                className="img-full"
                width={1198}
                height={500}
                />
                <div className="info">
                <h1 className="title-info large ">Style Guide</h1>
                </div>
            </section>
            {/* post content */}
            <section className="content" style={{ marginTop: 50 }}>
                <div className="left-content">
                <article className="main-article bg-box">
                    <section className="post">
                    {/* start text */}
                    <div className="text">
                        {/* style heading */}
                        <h1 id="typography">Typography</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Curabitur quam augue, vehicula quis, tincidunt vel, varius
                        vitae, nulla. Sed convallis orci. Duis libero orci, pretium a,
                        convallis quis, pellentesque a, dolor. Curabitur vitae nisi
                        non dolor vestibulum consequat.
                        </p>
                        <h1 id="level-1-heading">Level 1 Heading</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Curabitur quam augue, vehicula quis, tincidunt vel, varius
                        vitae, nulla.
                        </p>
                        <h2 id="level-2-heading">Level 2 Heading</h2>
                        <p>
                        Proin vestibulum. Ut ligula. Nullam sed dolor id odio volutpat
                        pulvinar.
                        </p>
                        <h3 id="level-3-heading">Level 3 Heading</h3>
                        <p>
                        Sed sodales lorem a ipsum suscipit gravida. Ut fringilla
                        placerat arcu. Phasellus imperdiet.
                        </p>
                        <h3 id="an-unordered-list">An Unordered List</h3>
                        <ul style={{listStyle:'inherit'}}>
                            <li>Vestibulum in mauris semper tortor interdum ultrices.</li>
                            <li>
                                Sed vel lorem et justo laoreet bibendum. Donec dictum.
                            </li>
                            <li>
                                Etiam massa libero, lacinia at, commodo in, tincidunt a,
                                purus.
                            </li>
                            <li>Praesent volutpat eros quis enim blandit tincidunt.</li>
                            <li>
                                Aenean eu libero nec lectus ultricies laoreet. Donec rutrum,
                                nisi vel egestas ultrices, ipsum urna sagittis libero, vitae
                                vestibulum dui dolor vel velit. Quotes
                            </li>
                        </ul>
                        {/* quotes */}
                        <h3 id="quotes">Quotes</h3>
                        <blockquote className="blockquote">
                        Proin vestibulum. Ut ligula. Nullam sed dolor id odio volutpat
                        pulvinar. Integer a leo. In et eros at neque pretium sagittis.
                        Sed sodales lorem a ipsum suscipit gravida. Ut fringilla
                        placerat arcu. Phasellus imperdiet. Mauris ac justo et turpis
                        pharetra vulputate.
                        </blockquote>
                        <p>
                        Sed sodales lorem a ipsum suscipit gravida. Ut fringilla
                        placerat arcu. Phasellus imperdiet.
                        </p>
                        {/* callout */}
                        <h3 id="callouts">Callouts</h3>
                        <div
                        className="d-flex callout-card"
                        style={{ background: "rgb(33 172 232 / 12%)" }}
                        >
                        <div className="callout-emoji">💡</div>
                        <div className="callout-text">
                            <h4>Sometimes you might want to put your site </h4>
                            behind closed doors If you&apos;ve got a publication that you
                            don&apos;t want the world to see yet because it&apos;s not ready to
                            launch, you can hide your
                            <strong> Ghost site </strong>
                            behind a simple shared pass-phrase.
                        </div>
                        </div>
                        <div
                        className="d-flex callout-card"
                        style={{ background: "rgb(240 165 15 / 13%)" }}
                        >
                        <div className="callout-emoji">💪</div>
                        <div className="callout-text">
                            We&apos;ve crammed the
                            <strong> most important information </strong>
                            to help you get started with Ghost into this one post.
                        </div>
                        </div>
                        <div
                        className="d-flex callout-card"
                        style={{ background: "rgb(52 183 67 / 12%)" }}
                        >
                        <div className="callout-emoji">✔️</div>
                        <div className="callout-text">
                            To continue
                            <strong> reading this article, </strong>
                            upgrade your account to get full access.
                        </div>
                        </div>
                        {/* toggle card */}
                        <h3 id="toggles">Toggles</h3>
                        <div className="toggle-card" >
                        <div
                            className="d-flex toggle-heading justify-content-between"
                            data-toggle-close="close"
                        >
                            <h4>Why you might want to put your site live?</h4>
                            <button className="toggle-card-icon" id="button-toggle" onClick={() => handleToogle(1)}>
                            <svg
                                id="Regular"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className={showContentToggle1 ? 'open': ''}
                            >
                                <path
                                className="cls-1"
                                d="M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311"
                                />
                            </svg>
                            </button>
                        </div>
                        <div
                            className="toggle-content"
                            id="show-content"
                            style={{ display: showContentToggle1 ? 'block' : 'none' }}
                        >
                            <p>
                            <strong>Sometimes you might want to put your site </strong>
                            behind closed doors If you&apos;ve got a publication that you
                            don&apos;t want the world to see yet because it&apos;s not ready to
                            launch, you can hide your
                            <strong> Ghost site </strong>
                            behind a simple shared pass-phrase.
                            </p>
                        </div>
                        </div>
                        <div className="toggle-card">
                        <div
                            className="d-flex toggle-heading justify-content-between"
                            data-toggle-close="close"
                        >
                            <h4>
                            Why you need to upgrade your account to get full access?
                            </h4>
                            <button className="toggle-card-icon" id="button-toggle-2" onClick={() => handleToogle(2)}>
                            <svg
                                id="Regular"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className={showContentToggle2 ? 'open': ''}

                            >
                                <path
                                className="cls-1"
                                d="M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311"
                                />
                            </svg>
                            </button>
                        </div>
                        <div
                            className="toggle-content"
                            id="show-content-2"
                            style={{ display: showContentToggle2 ? 'block' : 'none' }}
                        >
                            <p>
                            Sed sodales lorem a ipsum suscipit gravida. Ut fringilla
                            placerat arcu. Phasellus imperdiet. Sed sodales lorem a
                            ipsum suscipit gravida. Ut fringilla placerat arcu.
                            Phasellus imperdiet.
                            </p>
                        </div>
                        </div>
                        <p style={{ paddingTop: 8, marginBottom: 24 }}>
                        Aenean eu libero nec lectus ultricies laoreet. Donec rutrum,
                        nisi vel egestas ultrices, ipsum urna sagittis libero, vitae
                        vestibulum dui dolor vel velit.
                        </p>
                        {/* bookmark */}
                        <h3 id="bookmarks">Bookmarks</h3>
                        <figure className="bookmark-card">
                        <a href="" className="d-flex">
                            <div className=" bookmark-content">
                            <div className="bookmark-title">
                                WordPress Themes &amp; Website Templates from
                                ThemeForest
                            </div>
                            <div className="bookmark-description">
                                Discover 1000s of premium WordPress themes &amp; website
                                templates, including multipurpose and responsive
                                Bootstrap templates, email templates &amp; HTML
                                templates.
                            </div>
                            <div className="bookmark-meta">
                                <Image
                                src="https://assets.shopfront.envato-static.com/icons/themeforest.net/apple-touch-icon-144x144-precomposed.png"
                                alt=""
                                className="bookmark-icon"
                                width={243}
                                height={155}
                                />
                                <span style={{ opacity: ".7" }}>ThemeForest</span>
                            </div>
                            </div>
                            <div className="d-flex bookmark-thumbnail">
                            <Image
                                src="https://assets.shopfront.envato-static.com/images/meta/logos/themeforest.png"
                                alt=""
                                width={243}
                                height={155}
                            />
                            </div>
                        </a>
                        </figure>
                        <figure className="bookmark-card">
                        <a href="" className="d-flex">
                            <div className=" bookmark-content">
                            <div className="bookmark-title">
                                Mars is the fourth planet from the Sun - Breek
                            </div>
                            <div className="bookmark-description">
                                Mars is the fourth planet from the Sun and the
                                second-smallest planet in the Solar System after Mercury
                                . In English, Mars carries a name of...{" "}
                            </div>
                            <div className="bookmark-meta">
                                <Image
                                src="http://estudiopatagon.com/themes/wordpress/breek/wp-content/themes/breek/favicon.png"
                                alt=""
                                className="bookmark-icon"
                                width={243}
                                height={155}
                                />
                                <span style={{ opacity: ".7" }}>Breek</span>
                                <span style={{ fontWeight: 400, opacity: ".7" }}>
                                Steven Kotchen
                                </span>
                            </div>
                            </div>
                            <div className="d-flex bookmark-thumbnail">
                            <Image
                                src="http://estudiopatagon.com/themes/wordpress/breek/wp-content/uploads/2019/06/480016-PGKTGR-852-1024x683.jpg"
                                alt=""
                                width={243}
                                height={155}
                            />
                            </div>
                        </a>
                        <figcaption
                            style={{
                            textAlign: "center",
                            fontSize: "90%",
                            opacity: ".75",
                            marginTop: 5
                            }}
                        >
                            Bookmark with caption
                        </figcaption>
                        </figure>
                        {/* galleries */}
                        <h3 id="galleries">Galleries</h3>
                        <figure className="gallery-card">
                        <div className="d-flex gallery-container">
                            <div className="d-flex gallery-row">
                            <div
                                className="gallery-image img-effect"
                                style={{ flex: "1.50101 1 0%" }}
                            >
                                <a href="">
                                <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w1000/2022/09/top-view-smartphone-with-keyboard-charger_23-2149404178-1.jpg"
                                    alt=""
                                    width={266}
                                    height={177}
                                />
                                </a>
                            </div>
                            <div
                                className="gallery-image img-effect"
                                style={{ flex: "1.50352 1 0%" }}
                            >
                                <a href="">
                                <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w1000/2022/09/1920-love-to-drink-coffee-to-increase-energy-6.jpg"
                                    alt=""
                                    width={266}
                                    height={177}
                                />
                                </a>
                            </div>
                            <div
                                className="gallery-image img-effect"
                                style={{ flex: "1 1 0%" }}
                            >
                                <a href="">
                                <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w1000/2022/09/minimal-school-bell_360032-1067-3.jpg"
                                    alt=""
                                    width={176}
                                    height={176}
                                />
                                </a>
                            </div>
                            </div>
                        </div>
                        <figcaption
                            style={{
                            textAlign: "center",
                            fontSize: "90%",
                            opacity: ".75",
                            marginTop: 5
                            }}
                        >
                            Gallery Caption
                        </figcaption>
                        </figure>
                        {/* product card */}
                        <h3 id="product-card">Product Card</h3>
                        <p>
                        The product card will help you to link any product with a
                        small rating and optionally a button if needed.
                        </p>
                        <div className="d-flex product-card">
                        <div className="d-grid product-card-container">
                            <Image
                            src="https://ghost.estudiopatagon.com/groovy/content/images/2022/09/01_maktub_wp.png"
                            alt=""
                            style={{ gridColumn: "1/3", justifySelf: "center" }}
                            width={507}
                            height={285}
                            />
                            <div
                            className="product-card-title-container"
                            style={{ gridColumn: "1/2" }}
                            >
                            <h4 className="product-card-title">
                                Maktub - Lightweight Theme
                            </h4>
                            </div>
                            <div className="d-flex product-card-rating">
                            <span className="product-card-rating-star">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                >
                                <path d="M12.729,1.2l3.346,6.629,6.44.638a.805.805,0,0,1,.5,1.374l-5.3,5.253,1.965,7.138a.813.813,0,0,1-1.151.935L12,19.934,5.48,23.163a.813.813,0,0,1-1.151-.935L6.294,15.09.99,9.837a.805.805,0,0,1,.5-1.374l6.44-.638L11.271,1.2A.819.819,0,0,1,12.729,1.2Z" />
                                </svg>
                            </span>
                            <span className="product-card-rating-star">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                >
                                <path d="M12.729,1.2l3.346,6.629,6.44.638a.805.805,0,0,1,.5,1.374l-5.3,5.253,1.965,7.138a.813.813,0,0,1-1.151.935L12,19.934,5.48,23.163a.813.813,0,0,1-1.151-.935L6.294,15.09.99,9.837a.805.805,0,0,1,.5-1.374l6.44-.638L11.271,1.2A.819.819,0,0,1,12.729,1.2Z" />
                                </svg>
                            </span>
                            <span className="product-card-rating-star">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                >
                                <path d="M12.729,1.2l3.346,6.629,6.44.638a.805.805,0,0,1,.5,1.374l-5.3,5.253,1.965,7.138a.813.813,0,0,1-1.151.935L12,19.934,5.48,23.163a.813.813,0,0,1-1.151-.935L6.294,15.09.99,9.837a.805.805,0,0,1,.5-1.374l6.44-.638L11.271,1.2A.819.819,0,0,1,12.729,1.2Z" />
                                </svg>
                            </span>
                            <span className="product-card-rating-star">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                >
                                <path d="M12.729,1.2l3.346,6.629,6.44.638a.805.805,0,0,1,.5,1.374l-5.3,5.253,1.965,7.138a.813.813,0,0,1-1.151.935L12,19.934,5.48,23.163a.813.813,0,0,1-1.151-.935L6.294,15.09.99,9.837a.805.805,0,0,1,.5-1.374l6.44-.638L11.271,1.2A.819.819,0,0,1,12.729,1.2Z" />
                                </svg>
                            </span>
                            <span className="product-card-rating-star">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                >
                                <path d="M12.729,1.2l3.346,6.629,6.44.638a.805.805,0,0,1,.5,1.374l-5.3,5.253,1.965,7.138a.813.813,0,0,1-1.151.935L12,19.934,5.48,23.163a.813.813,0,0,1-1.151-.935L6.294,15.09.99,9.837a.805.805,0,0,1,.5-1.374l6.44-.638L11.271,1.2A.819.819,0,0,1,12.729,1.2Z" />
                                </svg>
                            </span>
                            </div>
                            <div
                            className="product-card-description"
                            style={{ gridColumn: "1/3" }}
                            >
                            <p>
                                <strong>Maktub</strong>
                                is a super modern Blog focused on
                                <strong>high speed</strong>
                                and nice effects, the theme fits perfectly any kind of
                                blog specially personal, photography, travel or
                                biography blogs. It is
                                <strong>super light</strong>, this
                                <strong>fast theme</strong>
                                was made with multiple techniques to achieve
                                <strong>excellent Scores on Google.</strong>
                            </p>
                            </div>
                            <a
                            href=""
                            className="product-card-btn-purchase product-card-btn-active"
                            >
                            <span>Purchase this theme</span>
                            </a>
                        </div>
                        {/* end of d-grid product card */}
                        </div>
                        {/* end of d-flex product card */}
                        {/* self hosted file */}
                        <h3 id="self-hosted-file">Self Hosted File</h3>
                        <div className="d-flex file-card">
                        <a href="" className="d-flex file-card-container">
                            <div className="d-flex file-card-content">
                            <div className="file-card-title">Banner 240x400</div>
                            <div className="file-card-caption">
                                A custom banner created for Maktub theme.
                            </div>
                            <div className="file-card-meta">
                                <div className="file-card-filename">
                                banner-240x400.png
                                </div>
                                <div className="file-card-filesize">10 KB</div>
                            </div>
                            </div>
                            <div className="file-card-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <defs>
                                <style
                                    dangerouslySetInnerHTML={{
                                    __html:
                                        ".a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}"
                                    }}
                                />
                                </defs>
                                <title>download-circle</title>
                                <polyline
                                className="a"
                                points="8.25 14.25 12 18 15.75 14.25"
                                />
                                <line className="a" x1={12} y1="6.75" x2={12} y2={18} />
                                <circle className="a" cx={12} cy={12} r="11.25" />
                            </svg>
                            </div>
                        </a>
                        </div>
                        <p>
                        Proin vestibulum. Ut ligula. Nullam sed dolor id odio volutpat
                        pulvinar. Integer a leo.
                        </p>
                        {/* self hosted audio */}
                        <h3 id="self-hosted-audio">Self Hosted Audio</h3>
                        <div className="d-flex audio-card">
                        {/* <img src="" alt="" class="audio-thumbnail"> */}
                        <div className="d-flex audio-thumbnail placeholder">
                            <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.5 15.33a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM15 13.83a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.486 6.81A2.25 2.25 0 0 1 17.25 9v5.579a.75.75 0 0 1-1.5 0v-5.58a.75.75 0 0 0-.932-.727.755.755 0 0 1-.059.013l-4.465.744a.75.75 0 0 0-.544.72v6.33a.75.75 0 0 1-1.5 0v-6.33a2.25 2.25 0 0 1 1.763-2.194l4.473-.746Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 1.5a.75.75 0 0 0-.75.75v19.5a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V5.133a.75.75 0 0 0-.225-.535l-.002-.002-3-2.883A.75.75 0 0 0 18 1.5H3ZM1.409.659A2.25 2.25 0 0 1 3 0h15a2.25 2.25 0 0 1 1.568.637l.003.002 3 2.883a2.25 2.25 0 0 1 .679 1.61V21.75A2.25 2.25 0 0 1 21 24H3a2.25 2.25 0 0 1-2.25-2.25V2.25c0-.597.237-1.169.659-1.591Z"
                            />
                            </svg>
                        </div>
                        <div className="audio-player-container">
                            <audio
                                src="https://filesamples.com/samples/audio/mp3/sample1.mp3"
                                preload="metadata"
                                id="audio"
                                ref={audioRef}
                            />
                            <div className="audio-title">Audio sample</div>
                            <div className="d-flex audio-player">
                            <button className="d-flex audio-play-icon" id="play-button" onClick={handlePlayPause}> 
                                { isPlaying ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <rect x={3} y={1} width={7} height={22} rx="1.5" ry="1.5" />
                                    <rect x={14} y={1} width={7} height={22} rx="1.5" ry="1.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z" />
                                    </svg>
                                }
                            </button>
                            <span className="audio-current-time" id="current-time">
                                {currentTime}
                            </span>
                            <div className="audio-time">
                                /
                                <span className="audio-duration" id="duration">
                                    {duration}
                                </span>
                            </div>
                            <input
                                type="range"
                                className="audio-seek-slider"
                                id="seek-slider"
                                max={100}
                                defaultValue={0}
                                onChange={handleSeekChange}
                                ref={seekSliderRef}
                            />
                            <button className="audio-playback-rate" id="playback-rate" onClick={changePlaybackRate}>
                                {playbackRate}x
                            </button>
                            <button className="audio-unmute-icon" id="unmute-button" onClick={toggleMute}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                >
                                <path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z" />
                                </svg>
                            </button>
                            <button className="audio-mute-icon audio-hide" id="mute-button" onClick={toggleMute}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                >
                                <path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z" />
                                </svg>
                            </button>
                            <input
                                type="range"
                                className="audio-volume-slider"
                                id="volume-slider"
                                max={100}
                                defaultValue={volume}
                                onChange={handleVolumeChange}
                                ref={volumeSliderRef}
                            />
                            <span className="audio-volume">{volume}%</span>
                            </div>
                        </div>
                        </div>
                        <p>
                        Sed sodales lorem a ipsum suscipit gravida. Ut fringilla
                        placerat arcu. Phasellus imperdiet.
                        </p>
                        {/* Syntax highlight */}
                        <h3 id="syntax-highlight">Syntax Highlight</h3>
                        {/* html1 */}
                        <div className="code-toolbar">
                        <pre className="language-html" id="htmlCssContent">
                            {"                                            "}
                            <code className=" language-html">
                            <span className="token doctype">
                                &lt;!DOCTYPE html&gt;
                            </span>
                            {"\n"}
                            {"                                            "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>html
                                </span>{" "}
                                <span className="token attr-name">lang</span>
                                <span className="token attr-value">
                                <span className="token punctuation">=</span>
                                <span className="token punctuation">&quot;</span>en
                                <span className="token punctuation">&quot;</span>
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                            "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>head
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                              "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>meta
                                </span>{" "}
                                <span className="token attr-name">charset</span>
                                <span className="token attr-value">
                                <span className="token punctuation">=</span>
                                <span className="token punctuation">&quot;</span>utf-8
                                <span className="token punctuation">&quot;</span>
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                              "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>title
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;/</span>title
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                              "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>link
                                </span>{" "}
                                <span className="token attr-name">rel</span>
                                <span className="token attr-value">
                                <span className="token punctuation">=</span>
                                <span className="token punctuation">&quot;</span>stylesheet
                                <span className="token punctuation">&quot;</span>
                                </span>{" "}
                                <span className="token attr-name">href</span>
                                <span className="token attr-value">
                                <span className="token punctuation">=</span>
                                <span className="token punctuation">&quot;</span>
                                css/style.css
                                <span className="token punctuation">&quot;</span>
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                            "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;/</span>head
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                            "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>body
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                              "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>header
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;/</span>header
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                              "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>div
                                </span>{" "}
                                <span className="token attr-name">role</span>
                                <span className="token attr-value">
                                <span className="token punctuation">=</span>
                                <span className="token punctuation">&quot;</span>main
                                <span className="token punctuation">&quot;</span>
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;/</span>div
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                              "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>footer
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;/</span>footer
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                              "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;</span>script
                                </span>{" "}
                                <span className="token attr-name">src</span>
                                <span className="token attr-value">
                                <span className="token punctuation">=</span>
                                <span className="token punctuation">&quot;</span>
                                js/script.js
                                <span className="token punctuation">&quot;</span>
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                            "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;/</span>body
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                            "}
                            <span className="token tag">
                                <span className="token tag">
                                <span className="token punctuation">&lt;/</span>html
                                </span>
                                <span className="token punctuation">&gt;</span>
                            </span>
                            {"\n"}
                            {"                                            "}
                            </code>{" "}
                            {"\n"}
                            {"                                        "}
                        </pre>
                        <div className="toolbar">
                            <div className="toolbar-item">
                            <span>HTML</span>
                            </div>
                            <div className="toolbar-item" id="copyButton">
                            <a href="" onClick={handleCopy}>Copy</a>
                            </div>
                        </div>
                        </div>
                        {/* html2 */}
                        <div className="code-toolbar">
                        <pre className="language-css" id="htmlCssContent">
                            {"                                            "}
                            <code className=" language-css">
                            <span className="token selector">body</span>{" "}
                            <span className="token punctuation">{"{"}</span>
                            {"\n"}
                            {"                                                "}
                            <span className="token property">margin</span>
                            <span className="token punctuation">:</span> 0
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"                                                "}
                            <span className="token property">font-family</span>
                            <span className="token punctuation">:</span>{" "}
                            <span className="token string">&quot;Helvetica Neue&quot;</span>,
                            Helvetica, Arial, sans-serif
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"                                                "}
                            <span className="token property">font-size</span>
                            <span className="token punctuation">:</span> 13px
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"                                                "}
                            <span className="token property">line-height</span>
                            <span className="token punctuation">:</span> 18px
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"                                                "}
                            <span className="token property">color</span>
                            <span className="token punctuation">:</span> #333333
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"                                                "}
                            <span className="token property">background-color</span>
                            <span className="token punctuation">:</span> #ffffff
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"                                              "}
                            <span className="token punctuation">{"}"}</span>
                            {"\n"}
                            {"                                              "}
                            {"\n"}
                            {"                                              "}
                            <span className="token selector">a</span>{" "}
                            <span className="token punctuation">{"{"}</span>
                            {"\n"}
                            {"                                                "}
                            <span className="token property">color</span>
                            <span className="token punctuation">:</span> #0088cc
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"                                                "}
                            <span className="token property">text-decoration</span>
                            <span className="token punctuation">:</span> none
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"                                              "}
                            <span className="token punctuation">{"}"}</span>
                            {"\n"}
                            {"                                              "}
                            </code>
                            {"\n"}
                            {"                                        "}
                        </pre>
                        <div className="toolbar">
                            <div className="toolbar-item">
                            <span>CSS</span>
                            </div>
                            <div className="toolbar-item" id="copyButton">
                            <a href="" onClick={handleCopy}>Copy</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* end of text */}
                    </section>
                    {/* end of post */}
                </article>
                </div>
            </section>
            </article>
            {/* end */}
        </main>
        {/* end of main content */}
    </>

    )
}