import React, {Component} from 'react';
import CityListItem from './CityListItem.jsx';

const CityList = (props) => {
  return(
    <div className="cities" >
      {
        props.cities.map((city) => {
        return <CityListItem
                  key={city.name}
                  name={city.name}
                  address={city.address}
                />;
        console.log(props)
        })
      }
    </div>
  );
}

export default CityList
