'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import './globals.authors.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";import 'bootstrap/dist/css/bootstrap.min.css';


export default function AuthorsCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);      // selector tới DOM của phần tử div,kiểu giá trị là Div element
    const prevBtnRef = useRef<HTMLButtonElement>(null);     // handle prevbtn với init là null,kiểu giá trị là Button element
    const nextBtnRef = useRef<HTMLButtonElement>(null);     // handle nextbtn với init là null,kiểu giá trị là Button element

    // handle carousel
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // lỗi SSR nếu nhập trực tiếp boostrap(carousel) thì sẽ lỗi,nên ta phải import để nó Nhập Động
            // khi đó nhập động sẽ được sử dụng cho các thư viện của bên thứ ba tương tác với DOM 
            // để tránh các sự cố kết xuất phía máy chủ (SSR).
            import("bootstrap/js/dist/carousel").then((moduleCarousel) => {
            const Carousel = moduleCarousel.default
            
            // selector tới carousel cần DOM
            const selectorCarousel = carouselRef.current ;
            if (!selectorCarousel) return;
            
            // handle carousel default của nó 
            const handleCarousel = new Carousel(selectorCarousel, {
                interval: false,     // chặn k cho carousel chạy
            });

            // handle chức năng prev next
            const handlePrev = () => handleCarousel.prev();
            const handleNext = () => handleCarousel.next();

            // handle sự kiện click vào nút
            prevBtnRef.current?.addEventListener('click', handlePrev);
            nextBtnRef.current?.addEventListener('click', handleNext);

            return () => {
                prevBtnRef.current?.removeEventListener('click', handlePrev);
                nextBtnRef.current?.removeEventListener('click', handleNext);
            };
            }) 
        }
    }, []);

    return(
        <>
            {/* Authors */}
            {/* navigation prev next */}
            <section className="authors">
                <h3 className="meetTheAuthor title bordered justify-content-center align-items-center">
                Meet the Authors
                </h3>
                <div className="navigation-container">
                <button id="prev-btn" className="nav-btn me-3 fs-2" ref={prevBtnRef}>
                    <span className="p-3"><FontAwesomeIcon icon={faArrowLeft} /></span>
                </button>
                <button id="next-btn" className="nav-btn fs-2" ref={nextBtnRef}>
                    <span className="p-3"><FontAwesomeIcon icon={faArrowRight} /></span>               
                </button>
                </div>
                <div className="carousel">
                    <div className="slick-list">
                        <div
                            id="carouselInterval"
                            className="carousel slide my-auto"
                            // data-bs-ride="carousel"
                            data-bs-interval ="false"   // dừng carousel
                            ref={carouselRef}
                        >
                        <div className="carousel-inner p-1 mx-0">
                            <section className="carousel-item active">
                            <div className="itemCarousel row">
                                <article className="col">
                                    <a href="#">
                                        <Image
                                        src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp"
                                        className="ImageAuthors d-block w-100 h-100"
                                        alt="Slide 1"
                                        title="Acticle: 5"
                                        width={214}
                                        height={270}
                                        />
                                    </a>
                                    <h4 className="nameOfAuthors w-75 mx-auto">Jonathan Doe</h4>
                                </article>
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/malheureuse-jeune-femme-afro-americaine-regarde-ses-ongles-veut-faire-nouvelle-manucure-vetue-vetements-elegants_273609-46283.jpg"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 2"
                                    title="Acticle: 3"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">Mary Buzard</h4>
                                </article>
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/studio-portrait-young-african-american-man-posing-studio-background-looking-into-camera-with-shocked-facial-expression_295783-16901.jpg"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 3"
                                    title="Acticle: 3"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">James Brawson</h4>
                                </article>
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2023/11/bel-homme-europeen-joyeux-sourit-agreablement-garde-mains-ecouteurs-stereo-sans-fil-expression-visage-optimiste-aime-ecouter-musique-pendant-poses-temps-libre-interieur-concept-passe-temps_273609-56815--1-.webp"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 4"
                                    title="Acticle: 2"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">Joseph Fracis</h4>
                                </article>
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/smiling-girl-holding-flowerpoint-glass-water-purple-background-high-quality-photo_144627-75115.webp"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 5"
                                    title="Acticle: 1"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">
                                    Brenda Hitchell
                                </h4>
                                </article>
                            </div>
                            </section>
                            <section className="carousel-item ">
                            <div className="itemCarousel row">
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/horizontal-shot-upbeat-dark-haired-woman-uses-headphones-moves-body-enjoys-new-playlist-cheerful-expression-likes-tune-wears-yellow-jacket-smiles-broadly-has-fun_273609-54580-2.jpg"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 6"
                                    title="Acticle: 1"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">Emily Allen</h4>
                                </article>
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 7"
                                    title="Acticle: 5"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">Jonathan Doe</h4>
                                </article>
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/malheureuse-jeune-femme-afro-americaine-regarde-ses-ongles-veut-faire-nouvelle-manucure-vetue-vetements-elegants_273609-46283.jpg"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 8"
                                    title="Acticle: 3"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">Mary Buzard</h4>
                                </article>
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/studio-portrait-young-african-american-man-posing-studio-background-looking-into-camera-with-shocked-facial-expression_295783-16901.jpg"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 9"
                                    title="Acticle: 3"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">James Brawson</h4>
                                </article>
                                <article className="col">
                                <a href="#">
                                    <Image
                                    src="https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2023/11/bel-homme-europeen-joyeux-sourit-agreablement-garde-mains-ecouteurs-stereo-sans-fil-expression-visage-optimiste-aime-ecouter-musique-pendant-poses-temps-libre-interieur-concept-passe-temps_273609-56815--1-.webp"
                                    className="ImageAuthors d-block w-100 h-100"
                                    alt="Slide 10"
                                    title="Acticle: 2"
                                    width={214}
                                    height={270}
                                    />
                                </a>
                                <h4 className="nameOfAuthors w-75 mx-auto">Joseph Fracis</h4>
                                </article>
                            </div>
                            </section>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of authors */}
        </>
    )
}