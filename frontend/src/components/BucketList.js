import React from 'react';
import ListItem from './ListItem';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function BucketList({ bucketList, onDelete, onEdit }) {
    return (
        <table id="bucketList">
            <caption>Bucket List Items</caption>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Location</th>
                    <th>Flight Hours</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {bucketList.map((listItem, i) => 
                    <ListItem 
                        listItem={listItem} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default BucketList;
