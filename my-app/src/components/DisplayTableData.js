import React, { useState } from 'react';
import './DisplayTableData.css'; 
import { MdDeleteForever,MdEdit,MdSaveAs } from "react-icons/md";


const DisplayTableData = ({ itemList,setItemList, showTable, toggleTable }) => {

    const [editItem, setEditItem] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({
    id: '',
    name: '',
    country: '',
    email: '',
    contact: '',
  });


  const [deleteItemId, setDeleteItemId] = useState(null); // State to store the ID of the item to be deleted

  const handleEdit = (item) => {
    setEditItem(item.id);
    setUpdatedItem({ ...item });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedList = itemList.map((item) =>
      item.id === updatedItem.id ? updatedItem : item

      
    );
    setEditItem(null);
    setUpdatedItem({ id: '', name: '', country: '', email: '', contact: '' });
    setItemList(updatedList);

  };


  const handleDeleteItem = (id) => {
    setDeleteItemId(id); // Set the ID of the item to be deleted
  };

  const handleConfirmDelete = () => {
    const updatedList = itemList.filter((item) => item.id !== deleteItemId);
    setItemList(updatedList);
    setDeleteItemId(null); // Reset deleteItemId state after deletion
  };

 

  return (
    <div  className="table-container">
      
     
     
      
        <div>
          <h3 className='custom-h3'>Employees:</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Country</th>
                <th>Email</th>
                <th>Contact</th>


                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {itemList.map((item) => (
                <tr key={item.id}>
                  <td>{editItem === item.id ? <input type="text" value={updatedItem.id} disabled /> : item.id}</td>
                  <td>
                    {editItem === item.id ? (
                      <input
                        type="text"
                        name="name"
                        value={updatedItem.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {editItem === item.id ? (
                      <input
                        type="text"
                        name="country"
                        value={updatedItem.country}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.country
                    )}
                  </td>
                  <td>
                    {editItem === item.id ? (
                      <input
                        type="email"
                        name="email"
                        value={updatedItem.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td>
                    {editItem === item.id ? (
                      <input
                        type="text"
                        name="contact"
                        value={updatedItem.contact}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.contact
                    )}
                  </td>
                  <td>
                    {editItem === item.id ? (
                    
                      <MdSaveAs onClick={handleUpdate} className='save-icon'/>
                    ) : (
                    
                      <MdEdit onClick={() => handleEdit(item)} className='edit-icon'/>
                      
                    )}
                    <MdDeleteForever onClick={() => handleDeleteItem(item.id)} className='delete-icon'/>
                  </td>
                  
                
                </tr>
              ))}
            </tbody>
          </table>

           
        </div>
        
      {deleteItemId && (
  <div className="popup">
    <h3>Confirmation</h3>
    <p>Are you sure you want to delete this item?</p>
    <div className="button-container">
      <button onClick={handleConfirmDelete} className="confirm-button">Yes</button>
      <button onClick={() => setDeleteItemId(null)} className="cancel-button">Cancel</button>
    </div>
  </div>
)}

      
    </div>
  );
};

export default DisplayTableData;
