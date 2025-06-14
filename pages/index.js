import Head from 'next/head';

const products = [
  {
    name: "RockBros Cycling Sunglasses",
    price: 19.99,
    prime: true,
    rating: 4.5,
    reviews: 1342,
    image: "https://m.media-amazon.com/images/I/61WbL6Fv9qL._AC_SL1500_.jpg",
    link: "https://www.amazon.co.uk/dp/B09DL7NN59?tag=pkaff-21"
  },
  {
    name: "Giro Register MIPS Helmet",
    price: 59.95,
    prime: true,
    rating: 4.6,
    reviews: 2123,
    image: "https://m.media-amazon.com/images/I/81Q7uEZxEXL._AC_SL1500_.jpg",
    link: "https://www.amazon.co.uk/dp/B08F2YN6Y6?tag=pkaff-21"
  },
  {
    name: "Garmin Edge 530 GPS",
    price: 229.99,
    prime: false,
    rating: 4.7,
    reviews: 798,
    image: "https://m.media-amazon.com/images/I/71Uwo9fKJPL._AC_SL1500_.jpg",
    link: "https://www.amazon.co.uk/dp/B07G2X3ZDL?tag=pkaff-21"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Cycling Deals UK</title>
        <meta name="description" content="Live cycling product comparisons from Amazon" />
      </Head>
      <main style={{ fontFamily: 'Arial, sans-serif', background: '#fff', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111' }}>Amazon-Style Cycling Deals</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          {products.map((product, i) => (
            <div key={i} style={{ border: '1px solid #ddd', borderRadius: '6px', padding: '1rem', background: '#fefefe' }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: '180px', objectFit: 'contain' }} />
              <h2 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '1rem 0 0.5rem' }}>{product.name}</h2>
              <p style={{ margin: '0.25rem 0' }}>£{product.price.toFixed(2)}</p>
              <p style={{ margin: '0.25rem 0', color: '#555' }}>
                ⭐ {product.rating} ({product.reviews} reviews)
              </p>
              {product.prime && <p style={{ color: '#0073b1', fontWeight: 'bold' }}>Prime Eligible</p>}
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <button style={{
                  marginTop: '1rem',
                  backgroundColor: '#ffa41c',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  color: '#111',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Buy Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}