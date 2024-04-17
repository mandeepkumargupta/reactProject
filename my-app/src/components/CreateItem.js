
import React, { useState } from 'react';
import DisplayTableData from './DisplayTableData'; 
import './CreateItem.css'; 
import { MdAddBox } from "react-icons/md";

const CreateItem = () => {
  const [newItem, setNewItem] = useState({ 
    id: '',
    name: '',  
    country: '',
    email: '',
    contact: '',
    nextId:1
});




const [itemList, setItemList] = useState([]); // State to hold the list of items
const [showTable, setShowTable] = useState(false); // State to control table visibility



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  
const handleAddItem = () => {
    if (
      newItem.name.trim() &&
      newItem.country.trim() &&
      newItem.email.trim() &&
      newItem.contact.trim()
    ) {
      const newItemWithId = {
        ...newItem,
        id: newItem.nextId, // Use nextId from state for the ID
        nextId: newItem.nextId + 1, // Increment nextId for the next item
      };
      setItemList([...itemList, newItemWithId]);
      setNewItem(prevItem => ({
        id: '',
        name: '',
        country: '',
        email: '',
        contact: '',
        nextId: prevItem.nextId + 1, // Increment nextId in state
      }));
    } else {
      alert('Please enter all fields.');
    }
  };
  
 

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="input-container">
        <h3 className='custom-h3'>Add new employee:</h3>
        <div className='input-elements-div'>
            <label>Name:</label>
            <br/>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
                className="input-field"
            />
        </div>
        
        {/* <br/> */}
        <div className='input-elements-div'>
            <label>Country:</label>
            <br/>
            <input
                type="text"
                placeholder="Country"
                name="country"
                value={newItem.country}
                onChange={handleInputChange}
                className="input-field"
            />
        </div>
        
        {/* <br/> */}

        <div className='input-elements-div'>
            <label>Email Id:</label>
            <br/>
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={newItem.email}
                onChange={handleInputChange}
                className="input-field"
            />
        </div>
        
        {/* <br /> */}

        <div className='input-elements-div'>
            <label>Contact No.:</label>
            <br/>
            <input
                type="text"
                placeholder="Contact No."
                name="contact"
                value={newItem.contact}
                onChange={handleInputChange}
                className="input-field"
            />

        </div>
        
        {/* <br /> */}
        <div>
            
            
            <button onClick={handleAddItem} className="button">
            {/* <img src={customIcon} alt="Custom Icon" /> */}
                <MdAddBox className='add-icon'/>
                Add
            </button>
            <br/><br/>
        </div>
        

        

        {/* Render the DisplayTableData component */}
        <DisplayTableData
        itemList={itemList}

        setItemList={setItemList}



        showTable={showTable}
        toggleTable={toggleTable}
        />
    </div>
  );
};



export default CreateItem;
