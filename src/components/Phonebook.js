import React, {useState} from 'react';
import './styles/Phonebook.scss';
import Contactlists from './Contactlists.js';
import AddForm from './AddForm.js';

const Phonebook = () => {
    const [data ,updateData] = useState(require('../data/data.json'));
    const [searchedData, updateSearched] = useState(data);
    const [displayAddState, changeDisplayAddState] = useState(false);


    const handleSearchChange = (event) => {
        updateSearched(data.filter(data => data.name.toLowerCase().includes(event.target.value)));
    };

    const handleClick = (event) => {
        event.preventDefault();
        changeDisplayAddState(!displayAddState);
    }

    const handleUpdate = (newData) => {
        updateData([...data].push(newData));
    }

    return(
    <div className= "phonebook">
        <div>
            <form>
                <label>search :
                    <input type="text" name="search" onChange={handleSearchChange}/>
                </label>
                <input type="submit" value="Add" onClick={handleClick}/>
            </form>
            <Contactlists searched={searchedData}></Contactlists>
        </div>
        {displayAddState ? <AddForm updateHandler={handleUpdate}/> : ""}
    </div>
    );
}

export default Phonebook;