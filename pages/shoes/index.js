import Head from 'next/head';
import DealCard from '../components/DealCard';
import { deals } from '../components/deals';

export default function Shoes() {
  return (
    <>
      <Head>
        <title>Cycle Deals</title>
      </Head>
      <div style={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
        Cycle Deals
      </div>
      <div style={{ display: 'flex' }}>
        <nav style={{ width: '200px', padding: '1rem', backgroundColor: '#fff3f3', minHeight: '100vh' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/cycles">Cycles</a></li>
            <li><a href="/helmets">Helmets</a></li>
            <li><a href="/shoes">Shoes</a></li>
            <li><a href="/clothing">Clothing</a></li>
            <li><a href="/accessories">Accessories</a></li>
          </ul>
        </nav>
        <main style={{ padding: '2rem', flexGrow: 1 }}>
          <h2>Top Cycling Deals</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {deals.map((deal, i) => <DealCard key={i} deal={deal} />)}
          </div>
        </main>
      </div>
    </>
  );
}