import React from 'react';
import './tutorial.css';

const tutorials = [
  {
    id: 1,
    image: require('./img5.jpeg'),
    name: 'Tutorial 1',
    description: 'Tutorial 1',
    rating: 4.5,
    username: ' ',
  },
  {
    id: 2,
    image: require('./img6.jpeg'),
    name: 'Tutorial 2',
    description: 'Tutorial 2',
    rating: 3.8,
    username: ' ',
  },
  {
    id:3,
    image:require('./img1.jpeg'),
    name:'Tutorial 3',
    description:'Tutorial 3',
    rating :5,
    username:' ',

  }
];

function Featuredtutorials() {
  return (
    <div className="featured-tutorials">
      <h1 className='heading'>Featured tutorials</h1>
      <div className="tutorial-list">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="tutorial">
            <img src={tutorial.image} alt={tutorial.name} className="tutorial-image" />
            <h3 className="tutorial-name">{tutorial.name}</h3>
            <p className="tutorial-description">{tutorial.description}</p>
            <div className="tutorial-details">
              <span className="tutorial-rating">★ {tutorial.rating}</span>
              <span className="tutorial-username">username: {tutorial.username}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-button">See All tutorials</button>
    </div>
  );
}

export default Featuredtutorials;