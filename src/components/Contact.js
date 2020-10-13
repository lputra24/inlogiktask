import React, {useState} from 'react';
import './styles/Contact.scss';

const Contact = (props) => {
    return(
        <div className="contact">
            <div className="contact__name">{props.name}</div>
            {props.phone ? <a className="contact__phone" href="./#">phone</a> : "" }
            {props.email ? <a className="contact__email" href="./#">email</a> : "" }
        </div>
    );
}

export default Contact;