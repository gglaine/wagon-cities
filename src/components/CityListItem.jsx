import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const CityListItem = (props) => {
   return(

    <div className="list-group-item">
      <div className="city-name">
      {props.name}
      </div>
      <div className="city-name">
      {props.address}
      </div>
    </div>
  );
}

export default CityListItem
