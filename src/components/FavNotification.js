import React from 'react';
import { Alert } from 'react-bootstrap';

export const FavNotification = (props) => {
  return (
    <React.Fragment>
      {props.booksfav.map((item) => (
        <Alert key={item.suggestion.id}>
          <div>
            <h6>{item.suggestion.Headline}</h6>
            <p>{item.suggestion.Description}</p>
            <div className="randomIcons">
              <span className="text-right float-end">
                <i class="fas fa-copy"></i>
              </span>
            </div>
          </div>
        </Alert>
      ))}
    </React.Fragment>
  );
};
