/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Link from "next/link"
import './globals.articles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 4; // Số lượng bài viết trên mỗi trang

export default function ArticleContent() {
    const [articles, setArticles] = useState<Element[]>([]); // Mảng các bài viết
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại là 1
    const [totalPages, setTotalPages] = useState(0); // Tổng số trang
    const pageInfo = `Page ${currentPage} of ${totalPages}`; // Thông tin về trang hiện tại và tổng số trang
    
    const activeItemPage = (page: number) => {
        articles.forEach((item: any, index: number) => {
            const start = (page - 1) * ITEMS_PER_PAGE;
            const end = page * ITEMS_PER_PAGE;
            if (index >= start && index < end) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    const handleChangePage = () => {
        const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
        setCurrentPage(nextPage);
        activeItemPage(nextPage); // Cập nhật trang hiển thị là trang kế tiếp
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    useEffect(() => {
        // Khởi tạo hoặc tải dữ liệu giả
        const articleElements = document.querySelectorAll('#articles-of-leftcontent article');
        const articlesArray = Array.from(articleElements);
        setArticles(articlesArray);
        setTotalPages(Math.ceil(articlesArray.length / ITEMS_PER_PAGE));
    }, []);

    // useEffect chạy khi nào articles,ITEMS_PER_PAGE thay đổi => chạy hàm activeItemPage
    useEffect(() => {
        // Hiển thị các bài viết đầu tiên khi khởi động
        activeItemPage(currentPage);
    }, [articles, ITEMS_PER_PAGE]);
    

    return(
        <>
            {/* left content */}
            <div className="left-content grid-70">
                <div id="articles-of-leftcontent">
                    {/* content 1 */}
                    <article className="bg-box grid-100" data-page="1">
                        <div className="d-flex flex-column flex-md-row mx-auto justify-content-center align-items-center">
                            <div className="img-article mb-3 mb-md-0">
                                <Link href="" className="thumb img-effect">
                                    <span className="img-content mb-4 cover" 
                                    style= {{
                                        backgroundImage:'url(https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/light-bulb-creative-business-idea-symbol-held-by-hand_53876-127176.jpg)'
                                    }}
                                    >
                                    </span>
                                </Link>
                            </div>
                            <div className="cmt-content mb-3 mb-md-0">
                                <Link href="" className="cmt-item" title="Go to comments">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" >
                                        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="info-article">
                                <div className="d-flex flex-md-row text-dark justify-content-between align-items-center mb-3 mb-md-0">  
                                    <button className="button-content mb-2 mb-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                                        </svg>                                                Travel 
                                    </button>
                                    <div className="meta-info">September 25, 2022</div>
                                    <div className="meta-info">3 min read</div>
                                </div>
                                <div className="mt-3 underline-effect">
                                    <Link href="/details-page" className="text-left-content">Building your audience with subscriber signups</Link>
                                </div>
                                <div className="mt-3">
                                    <span className="mini-text">
                                        How Ghost allows you to turn anonymous readers into an audience of active 
                                        subscribers, so you know what working and what isn....
                                    </span>
                                </div>
                                <div className="meta-bottom d-flex flex-md-row justify-content-between align-items-center">
                                    <Link className="button-content-active mb-2 mb-md-0" href="/details-page">Continue Reading <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    <Link href="" className="author-article d-flex align-items-center">
                                        <span className="img-author img-effect cover" 
                                        style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                                        ></span>
                                        <span>Jonathan Doe</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="category-overplay"></div>
                    </article>
                    {/* content 2 */}
                    <article className="bg-box grid-100" data-page="1">
                        <div className="d-flex flex-column flex-md-row mx-auto justify-content-center align-items-center">
                            <div className="img-article mb-3 mb-md-0">
                                <Link href="" className="thumb img-effect">
                                    <span className="img-content mb-4 cover" 
                                    style= {{
                                        backgroundImage:'url(https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/08/layered-number-one-stylized-typography_53876-96387.webp)'
                                    }}
                                    >
                                    </span>
                                </Link>
                            </div>
                            <div className="cmt-content mb-3 mb-md-0">
                                <Link href="" className="cmt-item" title="Go to comments">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="info-article">
                                <div className="d-flex flex-md-row text-dark justify-content-between align-items-center mb-3 mb-md-0">  
                                    <button className="button-content mb-2 mb-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                                        </svg>   
                                        Getting Started 
                                    </button>
                                    <div className="meta-info">March 16, 2021</div>
                                    <div className="meta-info">3 min read</div>
                                </div>
                                <div className="mt-3 underline-effect">
                                    <Link href="/details-page" className="text-left-content ">Far far away, behind the word mountains</Link>
                                </div>
                                <div className="mt-3">
                                    <span className="mini-text">
                                        Hey there, welcome to your new home on the web! Unlike social networks, this one is all yours. 
                                        Publish your work on a custom domain,...
                                    </span>
                                </div>
                                <div className="meta-bottom d-flex flex-md-row justify-content-between align-items-center">
                                    <Link className="button-content-active mb-2 mb-md-0" href="/details-page">Continue Reading <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    <Link href="" className="author-article d-flex align-items-center">
                                        <span className="img-author img-effect cover" 
                                        style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                                        ></span>
                                        <span >Jonathan Doe</span>
                                    </Link>
                            </div>
                            </div>
                        </div>
                        <div className="category-overplay"></div>
                    </article>
                    {/* content 3 */}
                    <article className="bg-box grid-100" data-page="1">
                        <div className="d-flex flex-column flex-md-row mx-auto justify-content-center align-items-center">
                            <div className="img-article mb-3 mb-md-0">
                                <Link href="" className="thumb img-effect">
                                    <span className="img-content mb-4 cover" 
                                    style= {{
                                        backgroundImage:'url(https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/various-types-pumpkins-arranged-height-food-gravity-concept-autumn-halloween-theme_492182-203-1.jpg)'
                                    }}
                                    >
                                    </span>
                                </Link>
                            </div>
                            <div className="cmt-content svg-double mb-3 mb-md-0 ">
                                <Link href="" className="cmt-item" title="Go to comments"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"></path>
                                    </svg>
                                </Link>
                                <Link href="" className="cmt-item" title="Premium article">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={256} height={256} viewBox="0 0 256 256" xmlSpace="preserve">
                                        <defs></defs>
                                        <g
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 0,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "none",
                                        opacity: 1
                                        }}
                                        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                                        >
                                        <path
                                        d="M 45 86.971 c -2.844 -23.399 -7.225 -45.143 -14.318 -63.967 c -10.227 -1.759 -20.455 -1.759 -30.682 0 L 45 86.971 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(98,180,216)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 59.318 23.004 c -10.502 -0.846 -20.296 -1.065 -28.636 0 L 45 86.971 C 51.205 66.148 55.929 44.809 59.318 23.004 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(122,204,232)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 45 86.971 l 14.318 -63.967 c 9.461 -1.818 19.738 -1.701 30.682 0 L 45 86.971 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(163,221,235)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 17.107 3.029 c 6.365 6.953 11.384 13.691 13.574 19.975 H 0 L 17.107 3.029 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(122,204,232)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 45 3.029 c -3.957 7.983 -8.417 15.149 -14.318 19.975 L 17.107 3.029 H 45 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(98,180,216)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 59.318 23.004 C 56.207 15.526 51.071 9.047 45 3.029 L 30.682 23.004 H 59.318 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(164,220,239)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 59.318 23.004 c 6.348 -5.561 10.221 -12.501 13.137 -19.975 H 45 L 59.318 23.004 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(195,231,246)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <polygon
                                        points="59.32,23 90,23 72.45,3.03 "
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(229,241,247)",
                                        opacity: 1
                                        }}
                                        transform="  matrix(1 0 0 1 0 0) "
                                        />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                            <div className="info-article">
                                <div className="d-flex flex-md-row text-dark justify-content-between align-items-center mb-3 mb-md-0">  
                                    <button className="button-content mb-2 mb-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                                        </svg>   
                                        Health 
                                    </button>
                                    <div className="meta-info">March 16, 2021</div>
                                    <div className="meta-info">1 min read</div>
                                </div>
                                <div className="mt-3 underline-effect">
                                    <Link href="/details-page" className="text-left-content">Selling memberships with recurring revenue</Link>
                                </div>
                                <div className="mt-3">
                                    <span className="mini-text">
                                        For creators and aspiring entrepreneurs looking to generate a sustainable recurring revenue
                                        stream from their creative work, Ghost has built-in payments allowing you to create...
                                    </span>
                                </div>
                                <div className="meta-bottom d-flex flex-md-row justify-content-between align-items-center">
                                    <Link className="button-content-active mb-2 mb-md-0" href="/details-page">Continue Reading <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    <Link href="" className="author-article d-flex align-items-center">
                                        <span className="img-author img-effect cover" 
                                       style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                                        ></span>
                                        <span >Jonathan Doe</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="category-overplay"></div>
                    </article>
                    {/* content 4 */}
                    <article className="bg-box grid-100" data-page="1">
                        <div className="d-flex flex-column flex-md-row mx-auto justify-content-center align-items-center">
                            <div className="img-article mb-3 mb-md-0">
                                <Link href="" className="thumb img-effect">
                                    <span className="img-content mb-4 cover" 
                                    style= {{
                                        backgroundImage:'url(https://ghost.estudiopatagon.com/groovy/content/images/size/w950h500/2022/08/hand-drawing-illustration-successful-concept_53876-36763-1.jpg)'
                                    }}
                                    >
                                    </span>
                                </Link>
                            </div>
                            <div className="cmt-content svg-double mb-3 mb-md-0">
                                <Link href="" className="cmt-item" title="Go to comments">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"></path>
                                    </svg>
                                </Link>
                                <Link href="" className="cmt-item" title="Members article">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="info-article">
                                <div className="d-flex flex-md-row text-dark justify-content-between align-items-center mb-3 mb-md-0">  
                                    <button className="button-content mb-2 mb-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                                        </svg>   
                                        Technology 
                                    </button>
                                    <div className="meta-info">March 16, 2021</div>
                                    <div className="meta-info">3 min read</div>
                                </div>
                                <div className="mt-3 underline-effect">
                                    <Link href="/details-page" className="text-left-content ">Customizing your brand and design settings</Link>
                                </div>
                                <div className="mt-3">
                                    <span className="mini-text">
                                        As discussed in the introduction post, one of the best things about
                                        Ghost is just how much you can customize to turn your site into something unique....
                                    </span>
                                </div>
                                <div className="meta-bottom d-flex flex-md-row justify-content-between align-items-center">
                                    <Link className="button-content-active mb-2 mb-md-0" href="/details-page">Continue Reading <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    <Link href="" className="author-article d-flex align-items-center">
                                        <span className="img-author img-effect cover" 
                                        style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                                        ></span>
                                        <span >Jonathan Doe</span>
                                    </Link>
                                </div>
                            </div>
                        </div>  
                        <div className="category-overplay"></div> 
                    </article>
                    {/* content 5 */}
                    <article className="bg-box grid-100" data-page="2">
                        <div className="d-flex flex-column flex-md-row mx-auto justify-content-center align-items-center">
                            <div className="img-article mb-3 mb-md-0">
                                <Link href="" className="thumb img-effect">
                                    <span className="img-content mb-4 cover" 
                                    style= {{
                                        backgroundImage:'url(https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/08/layered-number-one-stylized-typography_53876-96387.webp)'
                                    }}
                                    >
                                    </span>
                                </Link>
                            </div>
                            <div className="cmt-content mb-3 mb-md-0">
                                <Link href="" className="cmt-item" title="Go to comments">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="info-article">
                                <div className="d-flex flex-md-row text-dark justify-content-between align-items-center mb-3 mb-md-0">  
                                    <button className="button-content mb-2 mb-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                                        </svg>   
                                        Getting Started 
                                    </button>
                                    <div className="meta-info">March 16, 2021</div>
                                    <div className="meta-info">3 min read</div>
                                </div>
                                <div className="mt-3 underline-effect">
                                    <Link href="/details-page" className="text-left-content ">Far far away, behind the word mountains</Link>
                                </div>
                                <div className="mt-3">
                                    <span className="mini-text">
                                        Hey there, welcome to your new home on the web! Unlike social networks, this one is all yours. 
                                        Publish your work on a custom domain,...
                                    </span>
                                </div>
                                <div className="meta-bottom d-flex flex-md-row justify-content-between align-items-center">
                                    <Link className="button-content-active mb-2 mb-md-0" href="/details-page">Continue Reading <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    <Link href="" className="author-article d-flex align-items-center">
                                        <span className="img-author img-effect cover" 
                                        style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                                        ></span>
                                        <span >Jonathan Doe</span>
                                    </Link>
                            </div>
                            </div>
                        </div>
                        <div className="category-overplay"></div>
                    </article>
                    {/* content 6 */}
                    <article className="bg-box grid-100" data-page="2">
                        <div className="d-flex flex-column flex-md-row mx-auto justify-content-center align-items-center">
                            <div className="img-article mb-3 mb-md-0">
                                <Link href="" className="thumb img-effect">
                                    <span className="img-content mb-4 cover" 
                                    style= {{
                                        backgroundImage:'url(https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/various-types-pumpkins-arranged-height-food-gravity-concept-autumn-halloween-theme_492182-203-1.jpg)'
                                    }}
                                    >
                                    </span>
                                </Link>
                            </div>
                            <div className="cmt-content svg-double mb-3 mb-md-0">
                                <Link href="" className="cmt-item" title="Go to comments"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"></path>
                                    </svg>
                                </Link>
                                <Link href="" className="cmt-item" title="Premium article">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={256} height={256} viewBox="0 0 256 256" xmlSpace="preserve">
                                        <defs></defs>
                                        <g
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 0,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "none",
                                        opacity: 1
                                        }}
                                        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                                        >
                                        <path
                                        d="M 45 86.971 c -2.844 -23.399 -7.225 -45.143 -14.318 -63.967 c -10.227 -1.759 -20.455 -1.759 -30.682 0 L 45 86.971 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(98,180,216)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 59.318 23.004 c -10.502 -0.846 -20.296 -1.065 -28.636 0 L 45 86.971 C 51.205 66.148 55.929 44.809 59.318 23.004 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(122,204,232)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 45 86.971 l 14.318 -63.967 c 9.461 -1.818 19.738 -1.701 30.682 0 L 45 86.971 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(163,221,235)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 17.107 3.029 c 6.365 6.953 11.384 13.691 13.574 19.975 H 0 L 17.107 3.029 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(122,204,232)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 45 3.029 c -3.957 7.983 -8.417 15.149 -14.318 19.975 L 17.107 3.029 H 45 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(98,180,216)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 59.318 23.004 C 56.207 15.526 51.071 9.047 45 3.029 L 30.682 23.004 H 59.318 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(164,220,239)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <path
                                        d="M 59.318 23.004 c 6.348 -5.561 10.221 -12.501 13.137 -19.975 H 45 L 59.318 23.004 z"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(195,231,246)",
                                        opacity: 1
                                        }}
                                        transform=" matrix(1 0 0 1 0 0) "
                                        strokeLinecap="round"
                                        />
                                        <polygon
                                        points="59.32,23 90,23 72.45,3.03 "
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(229,241,247)",
                                        opacity: 1
                                        }}
                                        transform="  matrix(1 0 0 1 0 0) "
                                        />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                            <div className="info-article">
                                <div className="d-flex flex-md-row text-dark justify-content-between align-items-center mb-3 mb-md-0">  
                                    <button className="button-content mb-2 mb-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                                        </svg>   
                                        Health 
                                    </button>
                                    <div className="meta-info">March 16, 2021</div>
                                    <div className="meta-info">1 min read</div>
                                </div>
                                <div className="mt-3 underline-effect">
                                    <Link href="/details-page" className="text-left-content">Selling memberships with recurring revenue</Link>
                                </div>
                                <div className="mt-3">
                                    <span className="mini-text">
                                        For creators and aspiring entrepreneurs looking to generate a sustainable recurring revenue
                                        stream from their creative work, Ghost has built-in payments allowing you to create...
                                    </span>
                                </div>
                                <div className="meta-bottom d-flex flex-md-row justify-content-between align-items-center">
                                    <Link className="button-content-active mb-2 mb-md-0" href="/details-page">Continue Reading <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    <Link href="" className="author-article d-flex align-items-center">
                                        <span className="img-author img-effect cover" 
                                       style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                                        ></span>
                                        <span >Jonathan Doe</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="category-overplay"></div>
                    </article>
                    {/* content 7 */}
                    <article className="bg-box grid-100" data-page="2">
                        <div className="d-flex flex-column flex-md-row mx-auto justify-content-center align-items-center">
                            <div className="img-article mb-3 mb-md-0">
                                <Link href="" className="thumb img-effect">
                                    <span className="img-content mb-4 cover" 
                                    style= {{
                                        backgroundImage:'url(https://ghost.estudiopatagon.com/groovy/content/images/size/w950h500/2022/08/hand-drawing-illustration-successful-concept_53876-36763-1.jpg)'
                                    }}
                                    >
                                    </span>
                                </Link>
                            </div>
                            <div className="cmt-content svg-double mb-3 mb-md-0">
                                <Link href="" className="cmt-item" title="Go to comments">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"></path>
                                    </svg>
                                </Link>
                                <Link href="" className="cmt-item" title="Members article">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="info-article">
                                <div className="d-flex flex-md-row text-dark justify-content-between align-items-center mb-3 mb-md-0">  
                                    <button className="button-content mb-2 mb-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                                        </svg>   
                                        Technology 
                                    </button>
                                    <div className="meta-info">March 16, 2021</div>
                                    <div className="meta-info">3 min read</div>
                                </div>
                                <div className="mt-3 underline-effect">
                                    <Link href="/details-page" className="text-left-content ">Customizing your brand and design settings</Link>
                                </div>
                                <div className="mt-3">
                                    <span className="mini-text">
                                        As discussed in the introduction post, one of the best things about
                                        Ghost is just how much you can customize to turn your site into something unique....
                                    </span>
                                </div>
                                <div className="meta-bottom d-flex flex-md-row justify-content-between align-items-center">
                                    <Link className="button-content-active mb-2 mb-md-0" href="/details-page">Continue Reading <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    <Link href="" className="author-article d-flex align-items-center">
                                        <span className="img-author img-effect cover" 
                                        style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                                        ></span>
                                        <span >Jonathan Doe</span>
                                    </Link>
                                </div>
                            </div>
                        </div>  
                        <div className="category-overplay"></div> 
                    </article>
                    {/* content 8 */}
                    <article className="bg-box grid-100" data-page="2">
                        <div className="d-flex flex-column flex-md-row mx-auto justify-content-center align-items-center">
                            <div className="img-article mb-3 mb-md-0">
                                <Link href="" className="thumb img-effect">
                                    <span className="img-content mb-4 cover" 
                                    style= {{
                                        backgroundImage:'url(https://ghost.estudiopatagon.com/groovy/content/images/size/w450h550/2022/09/light-bulb-creative-business-idea-symbol-held-by-hand_53876-127176.jpg)'
                                    }}
                                    >
                                    </span>
                                </Link>
                            </div>
                            <div className="cmt-content mb-3 mb-md-0">
                                <Link href="" className="cmt-item" title="Go to comments">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" >
                                        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="info-article">
                                <div className="d-flex flex-md-row text-dark justify-content-between align-items-center mb-3 mb-md-0">  
                                    <button className="button-content mb-2 mb-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
                                        </svg>                                                Travel 
                                    </button>
                                    <div className="meta-info">September 25, 2022</div>
                                    <div className="meta-info">3 min read</div>
                                </div>
                                <div className="mt-3 underline-effect">
                                    <Link href="/details-page" className="text-left-content">Building your audience with subscriber signups</Link>
                                </div>
                                <div className="mt-3">
                                    <span className="mini-text">
                                        How Ghost allows you to turn anonymous readers into an audience of active 
                                        subscribers, so you know what working and what isn....
                                    </span>
                                </div>
                                <div className="meta-bottom d-flex flex-md-row justify-content-between align-items-center">
                                    <Link className="button-content-active mb-2 mb-md-0" href="/details-page">Continue Reading <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    <Link href="" className="author-article d-flex align-items-center">
                                        <span className="img-author img-effect cover" 
                                        style={{ backgroundImage: 'url("https://ghost.estudiopatagon.com/groovy/content/images/size/w300h300/2023/11/young-happy-smiling-african-american-guy-yellow-hoodie-heard-very-funny-joke-laughed_295783-2454--1-.webp")' }}
                                        ></span>
                                        <span>Jonathan Doe</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="category-overplay"></div>
                    </article>
                </div>
        
                {/* page navigation */}
                <nav className="pageNavigation mt-5 mb-5">
                    <div id="pagination-controls" className="d-flex justify-content-center align-items-center">
                        <span id="page-info">{pageInfo}</span>
                        <button id="buttonNavigation" className="pagination-button" onClick={handleChangePage}>
                            {currentPage === totalPages ? 'Previous' : 'Next'}
                        </button>
                    </div>
                </nav>
            </div>
            {/* end of left-content */}
        </>
    )
}