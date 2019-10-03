import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  const { headline } = props;
  const { img } = props;
  const { description } = props;
  const { url } = props

  return (
    <article>
      <img src={ img } alt={ description }/>
      <h1>{ headline }</h1>
      <p>{ description }</p>
      <footer><a href={ url }>Link To article</a></footer>
    </article>
  )
}

export default NewsArticle;