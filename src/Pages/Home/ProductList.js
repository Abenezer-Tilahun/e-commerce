import React from 'react';
import joystick from '../../assets/images/home/joy-stick.png';
import Tv from '../../assets/images/home/tv-1.png';
import jacket from '../../assets/images/home/jacket-1.png';
import laptop from '../../assets/images/home/laptop-1.png';
import bag from '../../assets/images/home/bag-1.png';
import loation from '../../assets/images/home/beauty-1.png';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'EvoFox Elite Ops Wired Gamepad',
      price: 999,
      oldPrice: 1799,
      image: joystick,
      discount: 40,
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      name: 'IPS LCD Gaming Monitor',
      price: 1200,
      oldPrice: 1990,
      image: Tv,
      discount: 40,
      rating: 4.8,
      reviews: 88,
    },
    {
      id: 3,
      name: 'The North Face Hydrenalite Jacket',
      price: 432,
      oldPrice: 959,
      image: jacket,
      discount: 40,
      rating: 4.7,
      reviews: 88,
    },
    {
      id: 4,
      name: 'ASUS ROG Strix G15 2021 Gaming Laptop',
      price: 900,
      oldPrice: 1500,
      image: laptop,
      discount: 40,
      rating: 4.9,
      reviews: 88,
    },
    {
      id: 5,
      name: 'AAPX1 Gucci Designer Leather Handbag',
      price: 950,
      oldPrice: 2400,
      image: bag,
      discount: 40,
      rating: 4.6,
      reviews: 88,
    },
    {
      id: 6,
      name: 'Curology Acne Skin Care',
      price: 52,
      oldPrice: 99,
      image: loation,
      discount: 40,
      rating: 4.8,
      reviews: 88,
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="discount">
            {product.discount}
            %
          </div>
          <img src={product.image} alt={product.name} className="productlist-image" style={{ backgroundImage: `url(${product.image})` }} />
          <h3>{product.name}</h3>
          <div className="pricing">
            <span className="price">
              $
              {product.price}
            </span>
            <span className="old-price">
              $
              {product.oldPrice}
            </span>
          </div>
          <div className="rating">
            <span>
              ⭐
              {product.rating}
            </span>
            {' '}
            (
            {product.reviews}
            {' '}
            reviews)
          </div>
          <button type="button" className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
