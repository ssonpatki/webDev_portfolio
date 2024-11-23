import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";


export const EditItemPageTable = ({ listItemToEdit }) => {
 
    const [itemName, setItemName]       = useState(listItemToEdit.itemName);
    const [location, setLocation]         = useState(listItemToEdit.location);
    const [flightHours, setFlightHours] = useState(listItemToEdit.flightHours);
    const [date, setDate] = useState(listItemToEdit.date);
    
    const redirect = useNavigate();

    const editListItem = async () => {
        const response = await fetch(`/bucketList/${listItemToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                itemName: itemName, 
                location: location, 
                flightHours: flightHours,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Item successfully edited!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit item: ${response.status}. ${errMessage.Error}. Try again and make sure all fields are completed correctly.`);
        }
        redirect("/bucketList");
    }

    return (
        <>
        <article>
            <h2>Edit a list item</h2>
            <p>Use this page to edit the item that you have selected.</p>
            <table id="bucketList">
                <caption>Which list item are you adding?</caption>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Location</th>
                        <th>Flight Hours</th>
                        <th>Date</th>
                        <th><Link to="/create"><MdOutlineAddBox /></Link>New</th>
                    </tr>
                </thead>
                <tbody>
                    
                <tr>
                    <td><label htmlFor="item">Item Name</label>
                        <input
                            type="text"
                            placeholder="Name of Item"
                            value={itemName}
                            onChange={e => setItemName(e.target.value)} 
                            id="item" />
                    </td>

                    <td><label htmlFor="location">Location</label>
                        <input
                            type="text"
                            placeholder="Location of the item"
                            value={location}
                            onChange={e => setLocation(e.target.value)} 
                            id="location" />
                    </td>

                    <td><label htmlFor="hours">Flight Hours</label>
                        <input
                            type="number"
                            value={flightHours}
                            placeholder="Total hours to location"
                            onChange={e => setFlightHours(e.target.value)} 
                            id="hours" />
                    </td>

                    <td><label htmlFor="date">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label htmlFor="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editListItem}
                            id="submit"
                        ><FaRegCheckSquare /></button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditItemPageTable;