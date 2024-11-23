// Controllers for the Bucket List Collection

import 'dotenv/config';
import express from 'express';
import * as bucketList from './bucket-list-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/bucketList', (req,res) => { 
    bucketList.createListItem(
        req.body.itemName, 
        req.body.location, 
        req.body.flightHours,
        req.body.date,
        )
        .then(listItem => {
            console.log(`"${listItem.itemName}" was added to Cluster0 - bucket list collection..`);
            res.status(201).json(listItem);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to create the list item. Try again and make sure all fields are completed correctly. ' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/bucketList', (req, res) => {
    bucketList.retrieveBucketList()
        .then(bucketList => { 
            if (bucketList !== null) {
                console.log(`All items were retrieved from Cluster0 - bucket list collection.`);
                res.json(bucketList);
            } else {
                res.status(404).json({ Error: 'No items are found in Cluster0 - bucket list collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve Cluster0 - bucket list collection. Reload program and try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/bucketList/:_id', (req, res) => {
    bucketList.retrieveListItemByID(req.params._id)
    .then(listItem => { 
        if (listItem !== null) {
            console.log(`"${listItem.itemName}" was retrieved from Cluster0 - bucket list collection., based on its ID.`);
            res.json(listItem);
        } else {
            res.status(404).json({ Error: 'There was no bucket list item found with provided ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve Cluster0 - bucket list collection. Reload program and try again.' });
    });

});


// UPDATE controller ************************************
app.put('/bucketList/:_id', (req, res) => {
    bucketList.updateListItem(
        req.params._id, 
        req.body.itemName, 
        req.body.location, 
        req.body.flightHours,
        req.body.date,
    )
    .then(listItem => {
        console.log(`"${listItem.itemName}" was updated.`);
        res.json(listItem);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to update the list item. Ensure all fields are completed correctly and item ID is accurate.' });
    });
});


// DELETE Controller ******************************
app.delete('/bucketList/:_id', (req, res) => {
    bucketList.deleteListItemById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} list item was deleted.`);
                res.status(200).send({ Success: 'List item has been successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'There was no bucket list item found with provided ID.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete the list item. Reload program and try again..' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});