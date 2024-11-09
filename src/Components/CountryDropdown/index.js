import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
Transition.displayName = 'Transition'; // Adding displayName

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Select a Location</span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>

      <Dialog open={isOpenModal} className="locationModal" onClose={() => setIsOpenModal(false)} TransitionComponent={Transition}>
        <h4 className="mb-0">Choose Your Delivery Location</h4>
        <p>Enter Your Address and We will specify the offer for your area.</p>
        <Button className="closeBtn" onClick={() => setIsOpenModal(false)}><MdClose /></Button>
        <div className="headerSearch w-100">
          <Button className="searchBtn"><IoSearch /></Button>
          <input type="text" placeholder="Search Your Area..." />
        </div>
        <ul className="countryList mt-3">
          <li><Button onClick={() => setIsOpenModal(true)}>Dire Dawa</Button></li>
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
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
