import React, {useState} from 'react';
import './styles/AddForm.scss';

const AddForm = (props) => {
    const [name, changeName] = useState("");
    const [phone, changePhone] = useState("");
    const [email, changeEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }

    return(
        <form className="form" onSubmit={handleSubmit}> 
            <label>
                Contact
            </label>
            <label>
                Name: 
                <input type="text" value={name} onChange={event=>changeName(event.target.value)}/>
            </label>
            <label>
                Phone: 
                <input type="tel" value={phone} onChange={event=>changePhone(event.target.value)}/>
            </label>
            <label>
                Email: 
                <input type="email" value={email} onChange={event=>changeEmail(event.target.value)}/>
            </label>
            <input type="submit" value="Save"/>
        </form>
    );
}

export default AddForm;