import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import { MdReportGmailerrorred } from 'react-icons/md';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found-content">
        <MdReportGmailerrorred className="error" />
        <h3>404</h3>
        <h4>Sorry, we couldn&apos;t find this page</h4>
        <p>How did you even get here?</p>
        <Link to="/">back to home</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
