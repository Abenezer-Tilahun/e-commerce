import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { CiHome } from 'react-icons/ci';
import Fashion from '../../assets/images/header/fashion.png';
import Electronics from '../../assets/images/header/electronics.jpg.png';
import Bags from '../../assets/images/header/bag.png';
import Groceries from '../../assets/images/header/grocery-cart.png';
import Beauty from '../../assets/images/header/Beauty.png';

const categories = [
  { name: 'Fashion', icon: Fashion },
  { name: 'Electronics', icon: Electronics },
  { name: 'Bags', icon: Bags },
  { name: 'Groceries', icon: Groceries },
  { name: 'Beauty', icon: Beauty },
];

const CategoryCard = ({ icon, name }) => (
  <div className="category-card">
    <img src={icon} alt={name} />
    <p>{name}</p>
  </div>
);

CategoryCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const CategoryList = () => (
  <>
    <h4 className="featured-categories">Featured Categories</h4>
    <div className="categories">
      {categories.map((category) => (
        <CategoryCard key={category.name} {...category} />
      ))}
    </div>
  </>
);

export default CategoryList;
