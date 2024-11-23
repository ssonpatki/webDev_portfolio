import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";


function ListItem({ listItem, onEdit, onDelete }) {
    return (
        <tr>
            <td>{listItem.itemName}</td>
            <td>{listItem.location}</td>
            <td>{listItem.flightHours}</td>
            <td>{listItem.date.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><IoMdRemoveCircleOutline  onClick={() => onDelete(listItem._id)} /></td>
            <td><FaEdit onClick={() => onEdit(listItem)} /></td>
        </tr>
    );
}

export default ListItem;