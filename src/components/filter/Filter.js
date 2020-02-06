import React from 'react';

const Filter = ({ findContact, filterValue }) => (
  <div>
    Find contacts by name <input type="text" onChange={findContact} value={filterValue}/>
  </div>
);

export default Filter;
