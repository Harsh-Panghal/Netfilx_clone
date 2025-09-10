import React from 'react';

interface ContentRowProps {
  title: string;
  movies: string[];
  isLarge?: boolean;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, movies, isLarge = false }) => {
  // Duplicate movies to create a scrollable row like the original
  const duplicatedMovies = [...movies, ...movies];
  
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {duplicatedMovies.map((movie, index) => (
          <img
            key={index}
            className={`row_poster ${isLarge ? 'row_posterLarge' : ''}`}
            src={movie}
            alt={`${title} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentRow;