import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact_class';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: {contact.name}
            </h2>
            <h2>
                Apellido: {contact.surname}
            </h2>
            <h2>
                Correo: {contact.email}
            </h2>
            <h2>
                Conectado: {contact.online ? 'En línea':'No disponible'}
            </h2>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
