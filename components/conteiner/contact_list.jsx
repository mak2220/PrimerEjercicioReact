import React from 'react';
import { Contact } from '../../models/contact_class';
import ContactComponent  from '../pure/contact';




const ContactListComponent = () => {

    const defaultContact = new Contact('Marcos', 'Berta', 'marcos@coder', true)

    return (
    <div>
        <div>
            <h1>Your Contact</h1>
        </div>
        <ContactComponent contact={defaultContact} ></ContactComponent>
    </div>
    )
}



export default ContactListComponent;

