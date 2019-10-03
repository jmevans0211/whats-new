import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';


const NewsContainer = (props) => {
  const news = props.data.map(article => {
    return <NewsArticle key={article.id} headline={article.headline} description={article.description} img={article.img} url={article.url}/>
  })
  return(
    <main>{news}</main>
  )
}

export default NewsContainer;