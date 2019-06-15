import React from 'react';
import { Link } from 'react-router-dom';
const QuestionRow = ({ title, publishedAt, url }) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className="question-card">
      <div className="question-body">
        <div className="question-details">
          <h2>{title}</h2>
          <h3>
            <span>{new Date(publishedAt).toLocaleDateString("en-US", options)}</span>
          </h3>
        </div>
      </div>
      <div className="question-footer">
        <Link to={`${url}`}>
          <button>Vote</button>
        </Link>
      </div>
    </div>
  );
}
export default QuestionRow;
