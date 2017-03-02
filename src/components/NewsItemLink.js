import React from 'react';
import { Link } from 'react-router';


const NewsItemLink = ({ key, link, title, category }) => (
  <div key={key} className="list-group-item list-group-item-action">
    <span className="categoryName" >{category}</span>
    {' '}
    <span >
      <Link to={link}>
        {title}
      </Link>
    </span>


  </div>
);

export default NewsItemLink;
