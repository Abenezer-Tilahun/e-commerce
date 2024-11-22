/* eslint-disable import/no-cycle */
import React from 'react';
import productLaptop from '../../assets/images/product/category-product-laptop.png';
import productPhone from '../../assets/images/product/category-product-phone.png';
import productWatch from '../../assets/images/product/category-product-smartwatch.png';
import laptop1 from '../../assets/images/product/product-laptop-1.png';
import laptop2 from '../../assets/images/product/product-laptop-2.png';
import laptop3 from '../../assets/images/product/product-laptop-3.png';
import laptop4 from '../../assets/images/product/product-laptop-4.png';
import phone1 from '../../assets/images/product/product-phone-1.png';
import phone2 from '../../assets/images/product/product-phone-2.png';
import phone3 from '../../assets/images/product/product-phone-3.png';
import phone4 from '../../assets/images/product/product-phone-4.png';
import watch1 from '../../assets/images/product/product-smartwatch-1.png';
import watch2 from '../../assets/images/product/product-smartwatch-2.png';
import watch3 from '../../assets/images/product/product-smartwatch-3.png';
import watch4 from '../../assets/images/product/product-smartwatch-4.png';

const Product = () => {
  const products = [
    {
      id: 1,
      imgKey: 'laptop1',
      title: 'Microsoft Surface Intel i5/i7 Laptop',
      price: 'US $349.99',
      discount: '$750',
      stock: 'In Stock',
    },
    {
      id: 2,
      imgKey: 'phone1',
      title: 'New i15 Pro Max 6.5',
      price: 'US $109.99',
      discount: '$200',
      stock: 'In Stock',
    },
    {
      id: 3,
      imgKey: 'watch1',
      title: 'Smart Watch For Men/Women',
      price: 'US $28.70',
      discount: '$60',
      stock: 'In Stock',
    },
    {
      id: 4,
      imgKey: 'laptop2',
      title: 'Microsoft Surface Intel i5/i7 Laptop',
      price: 'US $349.99',
      discount: '$750',
      stock: 'In Stock',
    },
    {
      id: 5,
      imgKey: 'phone2',
      title: 'New i15 Pro Max 6.5',
      price: 'US $109.99',
      discount: '$200',
      stock: 'In Stock',
    },
    {
      id: 6,
      imgKey: 'watch2',
      title: 'Smart Watch For Men/Women',
      price: 'US $28.70',
      discount: '$60',
      stock: 'In Stock',
    },
    {
      id: 7,
      imgKey: 'laptop3',
      title: 'Microsoft Surface Intel i5/i7 Laptop',
      price: 'US $349.99',
      discount: '$750',
      stock: 'In Stock',
    },
    {
      id: 8,
      imgKey: 'phone3',
      title: 'New i15 Pro Max 6.5',
      price: 'US $109.99',
      discount: '$200',
      stock: 'In Stock',
    },
    {
      id: 9,
      imgKey: 'watch3',
      title: 'Smart Watch For Men/Women',
      price: 'US $28.70',
      discount: '$60',
      stock: 'In Stock',
    },
    {
      id: 10,
      imgKey: 'laptop4',
      title: 'Microsoft Surface Intel i5/i7 Laptop',
      price: 'US $349.99',
      discount: '$750',
      stock: 'In Stock',
    },
    {
      id: 11,
      imgKey: 'phone4',
      title: 'New i15 Pro Max 6.5',
      price: 'US $109.99',
      discount: '$200',
      stock: 'In Stock',
    },
    {
      id: 12,
      imgKey: 'watch4',
      title: 'Smart Watch For Men/Women',
      price: 'US $28.70',
      discount: '$60',
      stock: 'In Stock',
    },
  ];

  const imageMap = {
    laptop1,
    laptop2,
    laptop3,
    laptop4,
    phone1,
    phone2,
    phone3,
    phone4,
    watch1,
    watch2,
    watch3,
    watch4,
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Sidebar Section */}
        <div className="col-md-3">
          <h4 className="mb-3">Categories</h4>
          <ul className="list-unstyled">
            <li>
              <input type="checkbox" id="laptop" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="laptop" className="ms-2">Laptop</label>
            </li>
            <li>
              <input type="checkbox" id="mobilePhone" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="mobilePhone" className="ms-2">Mobile Phone</label>
            </li>
            <li>
              <input type="checkbox" id="smartWatch" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="smartWatch" className="ms-2">Smart Watch</label>
            </li>
          </ul>

          {/* Price Filter */}
          <h4 className="mt-4 mb-3">Price, ETB</h4>
          <ul className="list-unstyled">
            <li>
              <input type="checkbox" id="under10k" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="under10k" className="ms-2">Under 10K</label>
            </li>
            <li>
              <input type="checkbox" id="10to30k" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="10to30k" className="ms-2">10 - 30K</label>
            </li>
            <li>
              <input type="checkbox" id="30to68k" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="30to68k" className="ms-2">30 - 68K</label>
            </li>
          </ul>

          {/* Brand Filter */}
          <h4 className="mt-4 mb-3">Brand</h4>
          <ul className="list-unstyled">
            <li>
              <input type="checkbox" id="samsung" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="samsung" className="ms-2">Samsung</label>
            </li>
            <li>
              <input type="checkbox" id="apple" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="apple" className="ms-2">Apple</label>
            </li>
            <li>
              <input type="checkbox" id="tecno" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="tecno" className="ms-2">Tecno</label>
            </li>
            <li>
              <input type="checkbox" id="infinix" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="infinix" className="ms-2">Infinix</label>
            </li>
          </ul>

          {/* Model Filter */}
          <h4 className="mt-4 mb-3">Model</h4>
          <ul className="list-unstyled">
            <li>
              <input type="checkbox" id="iphone13ProMax" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="iphone13ProMax" className="ms-2">iPhone 13 Pro Max</label>
            </li>
            <li>
              <input type="checkbox" id="samsungGalaxyS21" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="samsungGalaxyS21" className="ms-2">Samsung Galaxy S21</label>
            </li>
            <li>
              <input type="checkbox" id="tecnoSpark30c" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="tecnoSpark30c" className="ms-2">TECNO Spark 30C</label>
            </li>
            <li>
              <input type="checkbox" id="infinixHot50i" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="infinixHot50i" className="ms-2">Infinix Hot 50i</label>
            </li>
          </ul>

          {/* Condition Filter */}
          <h4 className="mt-4 mb-3">Condition</h4>
          <ul className="list-unstyled">
            <li>
              <input type="checkbox" id="brandNew" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="brandNew" className="ms-2">Brand New</label>
            </li>
            <li>
              <input type="checkbox" id="used" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="used" className="ms-2">Used</label>
            </li>
          </ul>
        </div>

        {/* Main Product Section */}
        <div className="col-md-9">
          {/* Electronics Cards */}
          <h3 className="text-left text-uppercase mb-4">Electronics</h3>
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="electronics-card d-flex align-items-center p-2">
                <img src={productLaptop} className="electronics-img" alt="Laptop" />
                <div className="electronics-text ms-3">
                  <h5 className="mb-0">Laptop</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="electronics-card d-flex align-items-center p-2">
                <img src={productPhone} className="electronics-img" alt="Mobile Phone" />
                <div className="electronics-text ms-3">
                  <h5 className="mb-0">Mobile Phone</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="electronics-card d-flex align-items-center p-2">
                <img src={productWatch} className="electronics-img" alt="Smart Watch" />
                <div className="electronics-text ms-3">
                  <h5 className="mb-0">Smart Watch</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="row">
            {products.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={imageMap[item.imgKey]}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="text-success">{item.stock}</p>
                    <p className="text-danger">
                      {item.price}
                      {' '}
                      <del>{item.discount}</del>
                    </p>
                    <div className="mt-auto">
                      <button type="button" className="btn btn-primary btn-sm w-100">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
