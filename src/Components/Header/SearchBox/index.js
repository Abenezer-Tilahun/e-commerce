import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';

const SearchBox = () => (
  <div className="headerSearch ml-3 mr-3">
    <input type="text" placeholder="Search for Products..." />
    <Button className="searchBtn"><IoSearch /></Button>
  </div>
);
export default SearchBox;
