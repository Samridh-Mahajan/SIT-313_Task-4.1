import React from 'react';
import './articles.css';

const articles = [
  {
    id: 1,
    image: require('./img2.jpeg'),
    name: 'Article 1',
    description: 'Article 1',
    rating: 4.5,
    author: 'Author 1',
  },
  {
    id: 2,
    image: require('./img3.jpeg'),
    name: 'Article 2',
    description: 'Article 2',
    rating: 3.8,
    author: 'Author 2',
  },
  {
    id:3,
    image:require('./img4.jpeg'),
    name:'Article 3',
    description:'Article 3',
    rating :5,
    author:'Author 3',

  }
];

function FeaturedArticles() {
  return (
    <div className="featured-articles">
      <h1 className='heading'>Featured Articles</h1>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.name} className="article-image" />
            <h3 className="article-name">{article.name}</h3>
            <p className="article-description">{article.description}</p>
            <div className="article-details">
              <span className="article-rating">★ {article.rating}</span>
              <span className="article-author">Author: {article.author}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-button">See All Articles</button>
    </div>
  );
}

export default FeaturedArticles;