import React from 'react';

const Phonebook = ({ handleSubmit, handleChange , number, name}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Name</label>
    </div>
    <div>
      <input type="text" name="name" onChange={handleChange} value={name}/>
    </div>

    <div>
      <label>Number</label>
    </div>
    <div>
      <input type="text" name="number" onChange={handleChange} value={number}/>
    </div>
    <p>
      <button type="submit">Add contact</button>
    </p>
  </form>
);

export default Phonebook;
