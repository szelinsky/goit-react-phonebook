import React, { Component } from 'react';
import Section from './section/Section';
import Phonebook from './phonebook/Phonebook';
import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';
import shortId from 'shortid';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ],
  name: '',
  filter: '',
  number: '',
  filteredArr: []
};

class App extends Component {
  state = { ...INITIAL_STATE };

  addContactWithId = () => {
    const { name, number } = this.state;
    return { name, number, id: shortId() };
  };

  preventDublication = () => {
    const {contacts, name} = this.state
    return contacts.some(elem => elem.name === name);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.preventDublication()) {
      alert('Dublication Alert');
    } else {
      this.setState(prev => {
        return {
          contacts: [...prev.contacts, this.addContactWithId()], 
          name: '', 
          number: ''
        };
      });
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  findContact = evt => {
    const { value } = evt.target;
    this.setState({
      filter: value.toLowerCase(),
      filteredArr: [...this.state.contacts.filter(elem =>
        elem.name.toLowerCase().includes(value))]
      });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(elem => elem.id !== id),
      filteredArr: prev.filteredArr.filter(elem => elem.id !== id),
    }));
  };

  render() {
    const { contacts, filter, filteredArr } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Phonebook
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={this.state.name}
            number={this.state.number}
          />
        </Section>

        <Section title="Contacts">
          <Filter findContact={this.findContact} filterValue={filter} />
          {!filter ?  
         ( <Contacts data={contacts} deleteContact={this.deleteContact} />) : (<Contacts data={filteredArr} deleteContact={this.deleteContact} /> )
          }
          {/* {console.log('filteredArr', filteredArr)} */}
          
        </Section>
      </>
    );
  }
}

export default App;