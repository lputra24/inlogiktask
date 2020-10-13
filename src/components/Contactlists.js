import React, {useState} from 'react';
import './styles/Contactlists.scss';
import Contact from './Contact.js';

const Contactlists= (props) => {

    
    return(
        <div>
                {props.searched.map((data,index)=><Contact key={index} name={data.name} phone={data.phone} email={data.email}/>)}
        </div>
    );
}

export default Contactlists;