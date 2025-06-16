export default function DealCard({ deal }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', margin: '1rem', backgroundColor: '#f0f8ff' }}>
      <img src={deal.image} alt={deal.name} style={{ maxWidth: '100%', height: '150px', objectFit: 'contain' }} />
      <h3>{deal.name}</h3>
      <p style={{ color: 'red', fontWeight: 'bold' }}>{deal.discount}</p>
      <p>{deal.price}</p>
      <p style={{ fontSize: '0.8rem', color: '#666' }}>{deal.expiry}</p>
      <a href={deal.link} target="_blank" rel="noreferrer">
        <button style={{ marginTop: '0.5rem', padding: '0.4rem 0.8rem', backgroundColor: '#ff3b3f', color: 'white', border: 'none', borderRadius: '5px' }}>
          View Deal
        </button>
      </a>
    </div>
  );
}