import React from 'react';
import './SinglePrice.css';

const SinglePrice = () => {
  return (
    <section className='single-price'>
      <div className='single-price__top-wrapper'>
        <h1 className='single-price__title'>Join our community</h1>
        <h2 className='single-price__subtitle'>
          30-day, hassle-free money back guarantee
        </h2>
        <p className='single-price__text'>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className='single-price__bottom-wrapper'>
        <div className='single-price__subscribe'>
          <h2 className='single-price__subtitle white'>Monthly Subscription</h2>
          <p className='single-price__details'>
            <span className='single-price__details-price'>$29 </span> per month
          </p>
          <p className='single-price__full-access'>
            Full access for less than $1 a day
          </p>
          <button className='single-price__signup'>Sign up</button>
        </div>
        <div className='single-price__whyus'>
          <h2 className='single-price__subtitle white'>Why Us</h2>
          <ul className='single-price__list'>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SinglePrice;
