import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BucketList from '../components/BucketList';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";

function BucketListPage({ setListItem }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [bucketList, setBucketList] = useState([]);

    // RETRIEVE the entire list of BucketList
    const loadBucketList = async () => {
        const response = await fetch('/bucketList');
        const bucketList = await response.json();
        setBucketList(bucketList);
    } 
    

    // UPDATE a single ListItem
    const onEditListItem = async listItem => {
        setListItem(listItem);
        redirect("/update");
    }


    // DELETE a single listItem  
    const onDeleteListItem = async _id => {
        const response = await fetch(`/bucketList/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/bucketList');
            const bucketList = await getResponse.json();
            setBucketList(bucketList);
        } else {
            console.error(`Failed to delete the list item = ${_id}, status code = ${response.status}. Reload program or check that item ID is correct, and try again.`)
        }
    }

    // LOAD the bucketList
    useEffect(() => {
        loadBucketList();
    }, []);

    // DISPLAY the BucketList
    return (
        <>
            <h2><CiBoxList /> Bucket List Items</h2>
            <p>Use this page to add, edit, and delete items from your bucket list.</p>
            <Link to="/create"><MdOutlineAddBox />Add Item</Link>
            <BucketList 
                bucketList={bucketList} 
                onEdit={onEditListItem} 
                onDelete={onDeleteListItem} 
            />
        </>
    );
}

export default BucketListPage;