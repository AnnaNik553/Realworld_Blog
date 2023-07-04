import { useSelector } from 'react-redux'

import ArticleBase from '../ArticleBase'

import './ArticleShort.scss'

const ArticleShort = ({ slug }) => {
  const article = useSelector((state) => state.articles.articles.find((a) => a.slug === slug))
  const { body, ...data } = article

  return <ArticleBase {...data} />
}

export default ArticleShort
