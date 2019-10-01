import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  const { headline } = props;
  const { img } = props;
  const { description } = props;
  const { url } = props
  
  return (
    <article>
      <img src={ img} alt={ description }/>
      <h1>{ headline }</h1>
      <p>{ description }</p>
      <footer><a href={ url }></a>Link To article</footer>
    </article>
  )
}

export default NewsArticle;