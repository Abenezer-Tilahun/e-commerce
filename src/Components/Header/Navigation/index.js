import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa';
import { CiHome } from 'react-icons/ci';
import Fashion from '../../../assets/images/fashion.png';
import Electronics from '../../../assets/images/electronics.jpg.png';
import Bags from '../../../assets/images/bag.png';
import Groceries from '../../../assets/images/grocery-cart.png';
// import Beauty from '../../assets/images/Beauty.png';

const Navigation = () => {
  const [isopenSidebarVal, setisOpenSidebarVal] = useState(true);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1  d-flex align-items-center">
            <div className="catWrapper">
              <Button className="allCatTab d-flex align-items-center justify-content-between" onClick={() => setisOpenSidebarVal(!isopenSidebarVal)}>
                <span className="icon1 me-2"><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ms-2"><FaAngleDown /></span>
              </Button>

              <div className={`sidebarNav shadow  ${isopenSidebarVal === true ? 'open' : ''}`}>
                <ul>
                  <li><Link to="/"><Button>Test 1</Button></Link></li>
                  <li><Link to="/"><Button>Test 2</Button></Link></li>
                  <li><Link to="/"><Button>Test 3</Button></Link></li>
                  <li><Link to="/"><Button>Test 4</Button></Link></li>
                  <li><Link to="/"><Button>Test 5</Button></Link></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline w-100">
              <li className="list-inline-item">
                <Link to="/" className="d-flex align-items-center">
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
                <Link to="/" className="d-flex align-items-center">
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
                <Link to="/" className="d-flex align-items-center">
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
                <Link to="/" className="d-flex align-items-center">
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
                <Link to="/" className="d-flex align-items-center">
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
