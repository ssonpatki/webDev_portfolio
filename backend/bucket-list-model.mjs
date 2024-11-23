// Models for the Bucket List Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Failed to connect to the MongoDB database due to a connection error.' });
    } else  {
        console.log('Success: Connected to the MongoDB database.');
    }
});

// SCHEMA: Define the collection's schema.
const listItemSchema = mongoose.Schema({
	itemName:  { type: String, required: true },
	location:  { type: String, required: true },
    flightHours:{ type: Number, required: true },
    date:{type: Date, default: Date.now},
});

// Compile the model from the schema 
// by defining the collection name "bucketList".
const bucketList = mongoose.model('Bucket List', listItemSchema);


// CREATE model *****************************************
const createListItem = async (itemName, location, flightHours, date) => {
    const listItem = new bucketList({ 
        itemName: itemName,      
	    location: location,
        flightHours: flightHours,
        date: date,
    });
    return listItem.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveBucketList = async () => {
    const query = bucketList.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveListItemByID = async (_id) => {
    const query = bucketList.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteListItemById = async (_id) => {
    const result = await bucketList.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateListItem = async (_id, itemName, location, flightHours, date) => {
    const result = await bucketList.replaceOne({_id: _id }, {
        itemName: itemName,      
	    location: location,
        flightHours: flightHours,
        date: date,
    });
    return { 
        _id: _id, 
        itemName: itemName,      
	    location: location,
        flightHours: flightHours,
        date: date,
    }
}

// EXPORT the variables for use in the controller file.
export { createListItem, retrieveBucketList, retrieveListItemByID, updateListItem, deleteListItemById }