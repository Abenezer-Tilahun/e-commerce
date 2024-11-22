import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa';
import { CiHome } from 'react-icons/ci';
import Fashion from '../../../assets/images/header/fashion.png';
import Electronics from '../../../assets/images/header/electronics.jpg.png';
import Bags from '../../../assets/images/header/bag.png';
import Groceries from '../../../assets/images/header/grocery-cart.png';

const Navigation = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  // Create references for the sidebar, button, and category links
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const categoryLinksRef = useRef([]);

  useEffect(() => {
    categoryLinksRef.current = categoryLinksRef.current.slice(0, 5); // Ensure correct array length
  }, []);

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current
      && !sidebarRef.current.contains(event.target)
      && buttonRef.current
      && !buttonRef.current.contains(event.target)
      && !categoryLinksRef.current.some((link) => link && link.contains(event.target))
    ) {
      setIsOpenSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const setCategoryLinkRef = (el, index) => {
    if (el) {
      categoryLinksRef.current[index] = el;
    }
  };

  // Handle category click to toggle submenu
  const handleCategoryClick = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1 d-flex align-items-center">
            <div className="catWrapper">
              <Button
                ref={buttonRef}
                className="allCatTab d-flex align-items-center justify-content-between"
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
              >
                <span className="icon1 me-2"><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ms-2"><FaAngleDown /></span>
              </Button>

              <div
                ref={sidebarRef}
                className={`sidebarNav shadow ${isOpenSidebar ? 'open' : ''}`}
              >
                <nav>
                  <ul>
                    <li>
                      <Link to="/">
                        <Button onClick={() => handleCategoryClick(0)}>Test 1</Button>
                      </Link>
                      <div className={`submenu shadow ${activeMenuIndex === 0 ? 'open' : ''}`}>
                        <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 2</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 3</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button onClick={() => handleCategoryClick(1)}>Test 2</Button>
                      </Link>
                      <div className={`submenu shadow ${activeMenuIndex === 1 ? 'open' : ''}`}>
                        <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 2</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 3</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button onClick={() => handleCategoryClick(2)}>Test 3</Button>
                      </Link>
                      <div className={`submenu shadow ${activeMenuIndex === 2 ? 'open' : ''}`}>
                        <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 2</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 3</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button onClick={() => handleCategoryClick(3)}>Test 4</Button>
                      </Link>
                      <div className={`submenu shadow ${activeMenuIndex === 3 ? 'open' : ''}`}>
                        <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 2</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 3</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button onClick={() => handleCategoryClick(4)}>Test 5</Button>
                      </Link>
                      <div className={`submenu shadow ${activeMenuIndex === 4 ? 'open' : ''}`}>
                        <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 2</Button></Link>
                        <Link to="/"><Button>Sub Menu Test 3</Button></Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline w-100">
              <li className="list-inline-item">
                <Link to="/" className="d-flex align-items-center" ref={(el) => setCategoryLinkRef(el, 0)}>
                  <Button>
                    <CiHome />
                    &nbsp;Home
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="d-flex align-items-center" ref={(el) => setCategoryLinkRef(el, 1)}>
                  <Button>
                    <img src={Fashion} alt="Fashion" className="nav-icon" />
                    <span className="ml-2">Fashion</span>
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="d-flex align-items-center" ref={(el) => setCategoryLinkRef(el, 2)}>
                  <Button>
                    <img src={Electronics} alt="Electronics" className="nav-icon" />
                    <span className="ml-2">Electronics</span>
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="d-flex align-items-center" ref={(el) => setCategoryLinkRef(el, 3)}>
                  <Button>
                    <img src={Bags} alt="Bags" className="nav-icon" />
                    <span className="ml-2">Bags</span>
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="d-flex align-items-center" ref={(el) => setCategoryLinkRef(el, 4)}>
                  <Button>
                    <img src={Groceries} alt="Groceries" className="nav-icon" />
                    <span className="ml-2">Groceries</span>
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
