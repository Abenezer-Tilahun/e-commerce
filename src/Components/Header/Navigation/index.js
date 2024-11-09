import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa';
import { CiHome } from 'react-icons/ci';
import Fashion from '../../../assets/images/fashion.png';
import Electronics from '../../../assets/images/electronics.jpg.png';
import Bags from '../../../assets/images/bag.png';
import Groceries from '../../../assets/images/grocery-cart.png';

const Navigation = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  // Create references for the sidebar, button, and category links
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const categoryLinksRef = useRef([]);

  // Store the category link references properly (avoid directly assigning inside JSX)
  useEffect(() => {
    categoryLinksRef.current = categoryLinksRef.current.slice(0, 5); // Ensure correct array length
  }, []);

  // Close the sidebar when clicking outside of it, but not on category links
  const handleClickOutside = (event) => {
    // Check if the click is outside the sidebar and button
    if (
      sidebarRef.current
      && !sidebarRef.current.contains(event.target)
      && buttonRef.current
      && !buttonRef.current.contains(event.target)
      && !categoryLinksRef.current.some((link) => link && link.contains(event.target))
    ) {
      setIsOpenSidebar(false); // Close the sidebar
    }
  };

  // Add event listener for clicks outside the sidebar
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Assign refs to the category links after render (not directly inside JSX)
  const setCategoryLinkRef = (el, index) => {
    if (el) {
      categoryLinksRef.current[index] = el;
    }
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1 d-flex align-items-center">
            <div className="catWrapper">
              {/* Toggle Sidebar Visibility */}
              <Button
                ref={buttonRef}
                className="allCatTab d-flex align-items-center justify-content-between"
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
              >
                <span className="icon1 me-2"><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ms-2"><FaAngleDown /></span>
              </Button>

              {/* Sidebar Navigation */}
              <div
                ref={sidebarRef}
                className={`sidebarNav shadow ${isOpenSidebar ? 'open' : ''}`}
              >
                <ul>
                  <li>
                    <Link to="/"><Button onClick={() => setActiveMenuIndex(activeMenuIndex === 0 ? null : 0)}>Test 1</Button></Link>
                    <div className={`submenu shadow ${activeMenuIndex === 0 ? 'show' : ''}`}>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/"><Button onClick={() => setActiveMenuIndex(activeMenuIndex === 1 ? null : 0)}>Test 2</Button></Link>
                    <div className={`submenu shadow ${activeMenuIndex === 1 ? 'show' : ''}`}>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/"><Button onClick={() => setActiveMenuIndex(activeMenuIndex === 2 ? null : 0)}>Test 3</Button></Link>
                    <div className={`submenu shadow ${activeMenuIndex === 2 ? 'show' : ''}`}>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/"><Button onClick={() => setActiveMenuIndex(activeMenuIndex === 3 ? null : 0)}>Test 4</Button></Link>
                    <div className={`submenu shadow ${activeMenuIndex === 3 ? 'show' : ''}`}>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/"><Button onClick={() => setActiveMenuIndex(activeMenuIndex === 4 ? null : 0)}>Test 5</Button></Link>
                    <div className={`submenu shadow ${activeMenuIndex === 4 ? 'show' : ''}`}>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                      <Link to="/"><Button>Sub Menu Test 1</Button></Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline w-100">
              <li className="list-inline-item">
                <Link
                  to="/"
                  className="d-flex align-items-center"
                  ref={(el) => setCategoryLinkRef(el, 0)}
                >
                  <Button>
                    <CiHome />
                    &nbsp;Home
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                  <Link to="/"><Button>Test 3</Button></Link>
                  <Link to="/"><Button>Test 4</Button></Link>
                  <Link to="/"><Button>Test 5</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/"
                  className="d-flex align-items-center"
                  ref={(el) => setCategoryLinkRef(el, 1)}
                >
                  <Button>
                    <img src={Fashion} alt="Fashion" className="nav-icon" />
                    <span className="ml-2">Fashion</span>
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                  <Link to="/"><Button>Test 3</Button></Link>
                  <Link to="/"><Button>Test 4</Button></Link>
                  <Link to="/"><Button>Test 5</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/"
                  className="d-flex align-items-center"
                  ref={(el) => setCategoryLinkRef(el, 2)}
                >
                  <Button>
                    <img src={Electronics} alt="Electronics" className="nav-icon" />
                    <span className="ml-2">Electronics</span>
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                  <Link to="/"><Button>Test 3</Button></Link>
                  <Link to="/"><Button>Test 4</Button></Link>
                  <Link to="/"><Button>Test 5</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/"
                  className="d-flex align-items-center"
                  ref={(el) => setCategoryLinkRef(el, 3)}
                >
                  <Button>
                    <img src={Bags} alt="Bags" className="nav-icon" />
                    <span className="ml-2">Bags</span>
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                  <Link to="/"><Button>Test 3</Button></Link>
                  <Link to="/"><Button>Test 4</Button></Link>
                  <Link to="/"><Button>Test 5</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/"
                  className="d-flex align-items-center"
                  ref={(el) => setCategoryLinkRef(el, 4)}
                >
                  <Button>
                    <img src={Groceries} alt="Groceries" className="nav-icon" />
                    <span className="ml-2">Groceries</span>
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Test 1</Button></Link>
                  <Link to="/"><Button>Test 2</Button></Link>
                  <Link to="/"><Button>Test 3</Button></Link>
                  <Link to="/"><Button>Test 4</Button></Link>
                  <Link to="/"><Button>Test 5</Button></Link>
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
