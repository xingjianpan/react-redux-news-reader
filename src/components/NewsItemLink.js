import React from 'react';
import { Link } from 'react-router';


const NewsItemLink = ({ key, link, title, category }) => (
  <button  key={key} className="list-group-item list-group-item-action">
    <span className="categoryName" >{category}</span>
    {' '}
    <span >
      <Link to={link}>
        {title}
      </Link>
    </span>
  </button>
);

export default NewsItemLink;
