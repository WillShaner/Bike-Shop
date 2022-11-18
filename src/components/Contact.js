import React from 'react';
import CONTACTS from '../data/contact';
import '../style/Contact.css';

function ContactItem(props) {
  const { contact } = props;
  const { image, link } = contact;
  return (
    <div className="contact-img ">
      <a href={link}>{image}</a>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-container">
      <h3>Follow Us:</h3>
      <div className="contact-logos">
        {CONTACTS.map((CONTACT) => (
          <ContactItem key={CONTACT.id} contact={CONTACT} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
