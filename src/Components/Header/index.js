/* eslint-disable import/no-cycle */

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaRegUser } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import { useContext } from 'react';
import Logo from '../../assets/images/header/Logo.png';
import CountryDropdown from '../CountryDropdown';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';

const Header = () => {
  const context = useContext(MyContext);
  return (
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
                {/* context.countryList.length !== 0 && <CountryDropdown /> */}
                {context.countryList?.length ? <CountryDropdown /> : null}
                <SearchBox />
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
      <Navigation />
    </>
  );
};

export default Header;
