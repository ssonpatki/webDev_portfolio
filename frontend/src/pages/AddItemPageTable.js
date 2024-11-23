import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddItemPageTable = () => {

    const [itemName, setItemName]       = useState('');
    const [location, setLocation]         = useState('');
    const [flightHours, setFlightHours] = useState('');
    const [date, setDate] = useState(new Date());
    
    const redirect = useNavigate();

    const addListItem = async () => {
        const newListItem = { itemName, location, flightHours, date };
        const response = await fetch('/bucketList', {
            method: 'post',
            body: JSON.stringify(newListItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Item successfully added!`);
        } else {
            alert(`Failed to add item = ${response.status}. Try again and make sure all fields are completed correctly.`);
        }
        redirect("/bucketList");
    };


    return (
        <>
        <article>
            <h2>Add a List Item</h2>
            <p>Use this form to add a new item to your bucket list.</p>
            
            <table id="bucketList">
                <caption>Which list item are you adding?</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Hours</th>
                        <th>Date</th>
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
                            placeholder="Location of item"
                            value={location}
                            onChange={e => setLocation(e.target.value)} 
                            id="location" />
                    </td>

                    <td><label htmlFor="hours">Flight Hours</label>
                        <input
                            type="number"
                            value={flightHours}
                            placeholder="Total hours to location."
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
                            onClick={addListItem}
                            id="submit"
                        >
                        Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddItemPageTable;