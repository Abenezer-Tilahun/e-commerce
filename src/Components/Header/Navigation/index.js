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

const Navigation = () => (
  <nav>
    <div className="container">
      <div className="row">
        <div className="col-sm-3 navPart1">
          <Button className="allCatTab align-items-center">
            <span className="icon1 mr-2">
              {' '}
              <IoIosMenu />
            </span>
            <span className="text">
              ALL CATEGORIES
            </span>
            <span className="icon2 ml-2">
              {' '}
              <FaAngleDown />
            </span>
          </Button>
        </div>
        <div className="col-sm-9 navPart2 d-flex align-items-center">
          <ul className="list list-inline w-100">
            <li className="list-inline-item">
              <Link to="/" className="d-flex align-items-center">
                <CiHome />
                &nbsp;Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/" className="d-flex align-items-center">
                <img src={Fashion} alt="Fashion" className="nav-icon" />
                <span className="ml-2">Fashion</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/" className="d-flex align-items-center">
                <img src={Electronics} alt="Electronics" className="nav-icon" />
                <span className="ml-2">Electronics</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/" className="d-flex align-items-center">
                <img src={Bags} alt="Bags" className="nav-icon" />
                <span className="ml-2">Bags</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/" className="d-flex align-items-center">
                <img src={Groceries} alt="Groceries" className="nav-icon" />
                <span className="ml-2">Groceries</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
