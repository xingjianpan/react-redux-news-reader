import React from 'react';
import { Link } from 'react-router';


const NewsItemLink = ({ key, link, title, category, source }) => (
  <button key={key} className="list-group-item list-group-item-action">
    <span className="categoryName" >{category}</span>
    {' '}
    <span >
      <Link to={link}>
        <span className="newsTitle">{title}</span>
      </Link>
    </span>
    {' '}
    <span className="newsSource">({source})</span>
  </button>
);

export default NewsItemLink;
