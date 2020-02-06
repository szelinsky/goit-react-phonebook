import React from 'react';

const Contacts = ({ data, deleteContact }) => (
  <ul>
    {data.map(elem => (
      <li key={elem.id}>
        {elem.name} {elem.number}{' '}
        <button type="button" onClick={() => (deleteContact(elem.id))}> 
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default Contacts;

//onClick сразу срабатывает без колбека
