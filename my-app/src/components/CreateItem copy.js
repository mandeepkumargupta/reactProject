// CreateItem.js
import React, { useState } from 'react';
import itemsData from '../data'; // Import your data from data.js
import DisplayTableData from './DisplayTableData'; // Import the new component
import './CreateItem.css'; // Import the CSS file

const CreateItem = () => {
  const [newItem, setNewItem] = useState({ 
    id: '',
    name: '', 
   // description: '', 
    country: '',
    email: '',
    contact: '',
});

const [itemList, setItemList] = useState([]); // State to hold the list of items
const [showTable, setShowTable] = useState(false); // State to control table visibility



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  /*
  const handleAddItem = () => {
    if (newItem.name.trim() && newItem.description.trim()) {
      const newItemWithId = { ...newItem, id: itemsData.length + 1 };
      itemsData.push(newItemWithId);
      setNewItem({ name: '', description: '' });
    } else {
      alert('Please enter both name and description.');
    }
  };
*/
const handleAddItem = () => {
    if (
      newItem.name.trim() &&
      //newItem.description.trim() &&
      newItem.country.trim() &&
      newItem.email.trim() &&
      newItem.contact.trim()
    ) {
      const newItemWithId = { ...newItem, id: itemsData.length + 1 };
      //itemsData.push(newItemWithId);
      setItemList([...itemList, newItemWithId]);
      setNewItem({ name: '', country: '', email: '', contact: '' });
    } else {
      alert('Please enter all fields.');
    }
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="input-container">
      <h2>Add New Item</h2>
      <label>Name:</label><br/>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newItem.name}
        onChange={handleInputChange}
        className="input-field"
      />
      <br/>
      <label>Country</label><br/>
      <input
        type="text"
        placeholder="Country"
        name="country"
        value={newItem.description}
        onChange={handleInputChange}
        className="input-field"
      />
      <br/>
      <label>Email id</label><br/>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={newItem.email}
        onChange={handleInputChange}
        className="input-field"
      />
      <br />
      <label>Contact No</label><br/>
      <input
        type="text"
        placeholder="Contact No"
        name="contact"
        value={newItem.contact}
        onChange={handleInputChange}
        className="input-field"
      />
      <br />
      <button onClick={handleAddItem} className="button">Add Item</button>
      <br/><br/>

      

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
