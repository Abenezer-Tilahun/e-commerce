import React from 'react';
import phone from '../../assets/images/feature-phone.png';
import watch from '../../assets/images/fature-watch.png';
import camera from '../../assets/images/feature-camera.png';
import inviteimage from '../../assets/images/Playstation.png';

const FeaturedProducts = () => {
  const products = [
    {
      name: 'Samsung Galaxy S24 Ultra',
      image: phone,
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Smart Watches for Women Android & iPhone',
      image: watch,
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Nikon D7500 20.3MP DSLR Camera',
      image: camera,
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <p>Do not miss the current offers until the end of March</p>
      <div className="feature-product-grid">
        {products.map((product) => (
          <div key={product.name} className="feature-product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="feature-product-grid-invite">
        <img src={inviteimage} alt={inviteimage} />
        <button type="button" className="cta-btn">Invite And Win &rarr;</button>
      </div>

    </section>
  );
};

export default FeaturedProducts;
