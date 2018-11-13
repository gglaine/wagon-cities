import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const ActiveCity = (props) => {
   return(

    <div className="active-city">
      {props.name}
    </div>
  );
}

export default ActiveCity
