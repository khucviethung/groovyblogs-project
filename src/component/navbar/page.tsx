'use client'
import Image from "next/image";
import Link from "next/link";
import './globals.navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars, faCaretDown, faMagnifyingGlass, faRss, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import axios from "axios";




export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]); // State lưu api kết quả
    const [filteredResults, setFilteredResults] = useState<any[]>([]); // State để lưu trữ kết quả đã lọc
    const searchInputRef = useRef<HTMLInputElement>(null);   // sài useRef để sài DOM

    // handle toggleMenu khi reponsive mobile
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      setDropdownOpen(false);
    };
    
    // handle đóng menu khi click vào menu mới
    const closeMenu = () => {
      setMenuOpen(false);
    };
    
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    // handle khi mở modal search
    const openSearchModal = () => {
      setShowSearchModal(true);
    };

    // handle khi đóng modal search
    const closeSearchModal = () => {
      setShowSearchModal(false);
      setSearch('') // làm mới input khi đóng modal
    };

    // handle search
    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setSearch(inputValue);
    };

    // call api search
    useEffect(() => {
      // Define a function to fetch and filter data based on search input
      const fetchApiSearchResults = async () => {
        if (search.length > 0) {
          try {
            const response = await axios.get('https://656ac001dac3630cf7274458.mockapi.io/api/register/dataDriver');
            // lọc data (name) của input từ api 
            const searchFiltered = response.data.filter((item: any) => 
              item.name.toLowerCase().includes(search.toLowerCase()) 
            );

            // update lấy data và cả đã lọc 
            setSearchResults(response.data);
            setFilteredResults(searchFiltered);
          } catch (error) {
            console.error("Error fetching search results", error);
          }
        } else {
          // If input is empty, reset the search results
          setSearchResults([]);
          setFilteredResults([]);
        }
      };

      // Call the fetch function when search state changes
      fetchApiSearchResults();
    }, [search]);

    useEffect(() => {
      if (menuOpen) {
        document.body.classList.add('nav-menu-open');
      } else {
        document.body.classList.remove('nav-menu-open');
      }
    }, [menuOpen]);
    
    useEffect(() => {
      if (showSearchModal && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [showSearchModal]);

    return (
      <>
        <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        <header className="grid-menu-container">
          <div className="box-menu my-auto mx-auto">
            <div className="hamburger-menu" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>
            <div className="logo mx-auto">
              <Link href="/">
                <Image
                  className="img-menu"
                  src="https://ghost.estudiopatagon.com/groovy/content/images/2022/08/logo-groovy-1.png"
                  alt="logo"
                  width={170}
                  height={45}
                />
              </Link>
            </div>
            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
              <ul className="menu my-auto">
                <li className="nav-home"><Link href="/">Home</Link></li>
                <li className="nav-membership"><Link href="/membership">Membership</Link></li>
                <li className="nav-style-guide"><Link href="/styleguide">Style Guide ✨</Link></li>
                <li className="nav-tag"><Link href="/tag">#Tag</Link></li>
                <li className="nav-more menu-dropdown" onClick={toggleDropdown}>
                  <Link href="#">More <FontAwesomeIcon icon={faCaretDown} /></Link>
                  <ul className={`sub-menu ${dropdownOpen ? 'open' : ''}`}>
                    <li><Link href="#">Home - Masonry</Link></li>
                    <li><Link href="#">Vertical Post (default)</Link></li>
                    <li><Link href="#">Classic Post</Link></li>
                    <li><Link href="#">Fullwidth Post</Link></li>
                    <li><Link href="#">No Sidebar Post</Link></li>
                    <li><Link href="#">Test Only Post</Link></li>
                    <li><Link href="#">Meet the Authors</Link></li>
                    <li><Link href="#">Single Author Page</Link></li>
                    <li><Link href="#">404 Page</Link></li>
                    <li><Link href="#">Home Demo</Link></li>
                  </ul>
                </li>
                <li className="nav-search">
                  <Link href="#" onClick={openSearchModal}><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                </li>
                <li className="nav-login"><Link href="/signin" className="signinButton">Sign In</Link></li>
              </ul>
            </nav>
            <div className="social-button fill-color">
              <Link href="https://www.facebook.com/ghost" className="facebook"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link href="https://x.com/tryghost" className="twitter"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link href="https://www.instagram.com/estudiopatagon/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="https://ghost.estudiopatagon.com/groovy/rss/" className="rss"><FontAwesomeIcon icon={faRss} /></Link>
            </div>
            <div className="nav-search-mobile">
              <Link href="#" onClick={openSearchModal}><FontAwesomeIcon icon={faMagnifyingGlass}/></Link>
            </div>
          </div>
        </header>

        <Modal show={showSearchModal} onHide={closeSearchModal} className="modal-search-show my-5">
          <Form className="input-search-show">
              {/* form-control */}
              <Form.Control
                type="search"
                className="custom-modal-input"
                placeholder="🔎 Search posts, tags & authors"
                value={search}
                onChange={handleSearch}
                ref={searchInputRef}
              />
          </Form>

              {/* render search  */}
            {filteredResults.length > 0  && (
                <ul className="search-results">
                  <strong className="title-result text-center mt-2 fs-5">Results found:</strong>
                  {filteredResults.map((result, index) => (
                    <li key={index} className="show-item-search">
                      <Link 
                        href={`/navbar/${result.id}`} 
                        className="name-search" 
                        onClick={closeSearchModal}>
                      </Link>
                        <div className="number-post-result" style={{opacity:0.5}}>
                          Number post: <strong>#{result.numberpost}</strong>
                        </div>
                        <div className="name-result">
                          <strong >Name:</strong> <span>{result.name}</span>
                        </div>
                        <div className="city-result">
                          <strong >City:</strong> <span>{result.city}</span>
                        </div>
                        <div className="post-result" style={{ opacity: 0.5 }}>
                          #Post: {result.post}
                        </div>
                        <hr />
                    </li>
                  ))}
                </ul>
              )}
              {/* render khi ko có kết quả tìm thấy  */}
            {search.length > 0 && filteredResults.length === 0 && (
              <p className="no-results text-center mt-3">  No matches found  </p>
            )}

        </Modal>
      </>
    );
}
