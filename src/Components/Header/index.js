import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import Logo from '../../assets/images/Logo.png';
import CountryDropdown from '../CountryDropdown';

const Header = () => (
  <>
    <header className="headerWrapper">
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center">
            Due to the
            <b> COVID 19 </b>
            epidemic, orders may be processed with a slight delay
          </p>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to="/"><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              <CountryDropdown />
              {/* Header Search start Here */}
              <div className="headerSearch ml-3 mr-3">
                <input type="text" placeholder="Search for Products..." />
                <Button className="searchBtn"><IoSearch /></Button>
              </div>
              {/* Header Search ends Here */}

              <div className="part3 d-flex align-items-center ml-auto">
                <Button className="circle mr-3"><FaRegUser /></Button>
                <div className="ml-auto cartTab d-flex align-items-center">
                  <span className="price">ETB 2500</span>
                  <div className="position-relative ml-2">
                    <Button className="circle"><BsBag /></Button>
                    <span className="count d-flex align-items-center justify-content-center">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
