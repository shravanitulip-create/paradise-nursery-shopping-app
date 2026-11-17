
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

// Plant product data
const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying Plants',
    price: 299,
    description: 'A low-maintenance plant that helps purify indoor air.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Air Purifying Plants',
    price: 399,
    description: 'An elegant plant with beautiful white flowers.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 3,
    name: 'Areca Palm',
    category: 'Air Purifying Plants',
    price: 499,
    description: 'A tropical plant that adds freshness to your home.',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400'
  },
  {
    id: 4,
    name: 'Spider Plant',
    category: 'Air Purifying Plants',
    price: 249,
    description: 'A beautiful and easy-to-grow indoor plant.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 5,
    name: 'Rubber Plant',
    category: 'Air Purifying Plants',
    price: 449,
    description: 'A decorative plant with attractive glossy leaves.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f2360af3e4?w=400'
  },
  {
    id: 6,
    name: 'Boston Fern',
    category: 'Air Purifying Plants',
    price: 349,
    description: 'A lush green fern perfect for indoor spaces.',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
  },

  // Aromatic Plants
  {
    id: 7,
    name: 'Lavender',
    category: 'Aromatic Plants',
    price: 299,
    description: 'A fragrant plant known for its calming aroma.',
    image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400'
  },
  {
    id: 8,
    name: 'Rosemary',
    category: 'Aromatic Plants',
    price: 199,
    description: 'An aromatic herb useful for cooking and decoration.',
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400'
  },
  {
    id: 9,
    name: 'Mint',
    category: 'Aromatic Plants',
    price: 149,
    description: 'A refreshing herb with a pleasant fragrance.',
    image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400'
  },
  {
    id: 10,
    name: 'Jasmine',
    category: 'Aromatic Plants',
    price: 349,
    description: 'A flowering plant with sweet-smelling blossoms.',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400'
  },
  {
    id: 11,
    name: 'Lemon Balm',
    category: 'Aromatic Plants',
    price: 199,
    description: 'A fragrant herb with refreshing lemon-like leaves.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f0?w=400'
  },
  {
    id: 12,
    name: 'Basil',
    category: 'Aromatic Plants',
    price: 179,
    description: 'A popular aromatic herb for kitchens and gardens.',
    image: 'https://images.unsplash.com/photo-1603905179139-5e0b5d4f7a1c?w=400'
  },

  // Succulents and Cacti
  {
    id: 13,
    name: 'Aloe Vera',
    category: 'Succulents and Cacti',
    price: 199,
    description: 'A hardy succulent with thick, fleshy leaves.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f2360af3e4?w=400'
  },
  {
    id: 14,
    name: 'Echeveria',
    category: 'Succulents and Cacti',
    price: 149,
    description: 'A beautiful rosette-shaped ornamental succulent.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 15,
    name: 'Jade Plant',
    category: 'Succulents and Cacti',
    price: 249,
    description: 'A popular succulent with thick green leaves.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f2360af3e4?w=400'
  },
  {
    id: 16,
    name: 'Golden Barrel Cactus',
    category: 'Succulents and Cacti',
    price: 299,
    description: 'A compact cactus with a distinctive round shape.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 17,
    name: 'Haworthia',
    category: 'Succulents and Cacti',
    price: 179,
    description: 'A small decorative succulent ideal for desks.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 18,
    name: 'Zebra Cactus',
    category: 'Succulents and Cacti',
    price: 199,
    description: 'A compact succulent with striking striped leaves.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  }
];

// Navigation bar
export function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 5%',
      backgroundColor: '#245c35',
      color: 'white',
      flexWrap: 'wrap',
      gap: '15px'
    }}>
      <h2>🌿 Paradise Nursery</h2>

      <div style={{
        display: 'flex',
        gap: '25px',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>

        <Link to="/plants" style={{ color: 'white', textDecoration: 'none' }}>
          Plants
        </Link>

        <Link to="/cart" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

// Product listing component
function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const categories = [
    'Air Purifying Plants',
    'Aromatic Plants',
    'Succulents and Cacti'
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      <Navbar />

      <div style={{
        padding: '30px 5%',
        backgroundColor: '#f5f8f2',
        minHeight: '100vh'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#245c35',
          marginBottom: '10px'
        }}>
          Our Houseplant Collection
        </h1>

        <p style={{
          textAlign: 'center',
          marginBottom: '35px',
          color: '#555'
        }}>
          Discover beautiful plants and bring nature into your home!
        </p>

        {categories.map((category) => (
          <section key={category} style={{
            marginBottom: '45px'
          }}>
            <h2 style={{
              color: '#245c35',
              borderBottom: '2px solid #8caf75',
              paddingBottom: '10px',
              marginBottom: '20px'
            }}>
              {category}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '25px'
            }}>
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div key={plant.id} style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      padding: '15px',
                      boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                      textAlign: 'center'
                    }}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />

                      <h3 style={{ margin: '15px 0 8px' }}>
                        {plant.name}
                      </h3>

                      <p style={{
                        color: '#666',
                        fontSize: '14px',
                        minHeight: '42px'
                      }}>
                        {plant.description}
                      </p>

                      <h3 style={{ color: '#245c35' }}>
                        ₹{plant.price}
                      </h3>

                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                        style={{
                          backgroundColor: isAdded ? '#999' : '#388e3c',
                          color: 'white',
                          border: 'none',
                          padding: '11px 20px',
                          borderRadius: '6px',
                          cursor: isAdded ? 'not-allowed' : 'pointer',
                          marginTop: '10px',
                          width: '100%'
                        }}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
