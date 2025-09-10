import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';

// Import movie images
const largeMovies = [
  '/images/large-movie1.jpg',
  '/images/large-movie2.jpg',
  '/images/large-movie3.jpg',
  '/images/large-movie4.jpg',
  '/images/large-movie5.jpg',
  '/images/large-movie6.jpg',
  '/images/large-movie7.jpg',
  '/images/large-movie8.jpg',
];

const smallMovies = [
  '/images/small-movie1.jpg',
  '/images/small-movie2.jpg',
  '/images/small-movie3.jpg',
  '/images/small-movie4.jpg',
  '/images/small-movie5.jpg',
  '/images/small-movie6.jpg',
  '/images/small-movie7.jpg',
  '/images/small-movie8.jpg',
];

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
      <Navigation />
      <Hero />
      <ContentRow title="Featured Originals" movies={largeMovies} isLarge />
      <ContentRow title="Trending Now" movies={smallMovies} />
      <ContentRow title="Top Rated" movies={smallMovies} />
      <ContentRow title="Action Movies" movies={smallMovies} />
      <ContentRow title="Comedy Movies" movies={smallMovies} />
      <ContentRow title="Horror Movies" movies={smallMovies} />
      <ContentRow title="Romance Movies" movies={smallMovies} />
      <ContentRow title="Documentaries" movies={smallMovies} />
    </div>
  );
}

export default App;