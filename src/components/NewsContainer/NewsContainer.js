import React from 'react';
import './NewsContainer.css';
import local from '../../data/local';
import NewsArticle from '../NewsArticle/NewsArticle';


const NewsContainer = () => {
  const localNews = local.map(article => {
    return <NewsArticle key={article.id} headline={article.headline} description={article.description} img={article.img} url={article.url}/>
  })
  return(
    <main>{localNews}</main>
  )
}

export default NewsContainer;