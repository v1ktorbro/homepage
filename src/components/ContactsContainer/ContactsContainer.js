import './ContactsContainer.css';
import React from 'react';
import CurrentDataInfoContext from '../../context/CurrentDataInfoContext';
import ContactElementContainer from '../ContactElementContainer/ContactElementContainer';

function ContactsContainer() {
  const pageDataInfo = React.useContext(CurrentDataInfoContext);
  
  return (
    <div className='contacts-container'>
      <h2 className='contacts-container__title'>Contacts:&nbsp;</h2>
      <ul className='contacts-container__list'>
        {pageDataInfo.contacts.map((contact, index) => {
          return (
            <ContactElementContainer 
              key={index}
              data={contact}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ContactsContainer;