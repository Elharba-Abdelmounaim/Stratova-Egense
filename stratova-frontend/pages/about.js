import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Stratova Egense</h1>
        <p>This is the homepage of the company portfolio.</p>
      </main>
      <Footer />
    </div>
  );
}

