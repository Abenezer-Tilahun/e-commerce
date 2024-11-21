/* eslint-disable import/no-cycle */
import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
Transition.displayName = 'Transition'; // Adding displayName

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);

  // const [countryList, setcountryList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const context = useContext(MyContext);

  const selectCountry = (country) => {
    setselectedTab(country); // Highlight the selected country
    context.setselectedCountry(country); // Update the selected country in context
    setIsOpenModal(false); // Close the modal
  };

  useEffect(() => {
    setFilteredList(context.countryList);
  }, [context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    const list = context.countryList.filter((item) => item.country.toLowerCase().includes(keyword));
    setFilteredList(list);
  };

  const getDisplayName = () => {
    if (context.selectedCountry === '') {
      return 'Select a Location';
    }
    if (context.selectedCountry.length > 10) {
      return `${context.selectedCountry.substr(0, 10)}...`;
    }
    return context.selectedCountry;
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{getDisplayName()}</span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>

      <Dialog open={isOpenModal} className="locationModal" onClose={() => setIsOpenModal(false)} TransitionComponent={Transition}>
        <h4 className="mb-0">Choose Your Delivery Location</h4>
        <p>Enter Your Address and We will specify the offer for your area.</p>
        <Button className="closeBtn" onClick={() => setIsOpenModal(false)}><MdClose /></Button>
        <div className="headerSearch w-100">
          <Button className="searchBtn"><IoSearch /></Button>
          <input type="text" placeholder="Search Your Area..." onChange={filterList} />
        </div>
        <ul className="countryList mt-3">
          {filteredList.length !== 0 ? (
            filteredList.map((item) => (
              <li key={item.country}>
                <Button
                  onClick={() => selectCountry(item.country)}
                  className={`${selectedTab === item.country ? 'active' : ''}`}
                >
                  {item.country}
                </Button>
              </li>
            ))
          ) : (
            <li>No results found.</li>
          )}
          {
          /*
          <li><Button onClick={() => setIsOpenModal(true)}>Harar</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Hawassa</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Addis Ababa</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Bahir Dar</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Jijiga</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Hosaina</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Wolaita Sodo</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Mekele</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Bonga</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Gambela</Button></li>
          <li><Button onClick={() => setIsOpenModal(true)}>Semera</Button></li>
          */
          }
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
