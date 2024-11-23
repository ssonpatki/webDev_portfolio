'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const nodemailer = require('nodemailer');
const products = require('./products.js').products;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

let htmlTop = `
<!DOCTYPE html>
<html>
<head>
 <meta name=’robots’ content=’noindex, nofollow’>
 <meta charset='utf-8'>
 <meta http-equiv='X-UA-Compatible' content='IE=edge'>
 <title>Siya Sonpatki</title>
 <meta name='viewport' content='width=device-width, initial-scale=1'>
 <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
 <script src='main.js'></script>
 <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
 <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
 <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
 <link rel="manifest" href="/site.webmanifest">
 </head>
<body>
 <main>
    <header>
        <h1>Service Details</h1>
    </header>
    <nav>
     <a href="index.html">Home</a>
     <a href="contact.html">Contact</a>
     <a href="gallery.html">Gallery</a>
     <a href="order.html">Order</a>
    </nav>
<main>
`;

let htmlBottom = `
</main>
<footer>
    <p> We appreciate you utilizing our services! Please don't hesitate to 
    reach out if you have any questions or concerns. We hope you return soon.</p>
</footer>
</body>
</html>
`;

function compareProducts(choice) {
    for (const item of products) {
        if (item.product === choice) {
            return item.product;
        }
    }
}

function findPrice(choice) {
    for (const item of products) {
        if (item.product === choice) {
            return item.price;
        }
    }
}

app.post('/review', (req, res) => {
    const firstLastName = req.body.firstLastName;
    const emailAddress = req.body.emailAddress;
    const chooseAdventure = req.body.chooseAdventure;
    const userFeedback = req.body.userFeedback;
    const urgency = req.body.urgency; 
    const communicationMethods = [];

    if (req.body.scroll) {
        communicationMethods.push("Classic Scroll (email)");
    }
    if (req.body.pigeons) {
        communicationMethods.push("Carrier Pigeons (text message)");
    }
    if (req.body.trumpet) {
        communicationMethods.push("The Herald's Trumpet (phone call)");
    }
    if (req.body.mirror) {
        communicationMethods.push("Mirror Mirror on the Wall (video call)");
    }

    res.send(`
        ${htmlTop}
        <h3>Hello <strong>${firstLastName}</strong>,</h3>
        <p> 
            We're excited that you embarked on your <strong>${chooseAdventure}</strong> adventure with us and have loved hearing what has occurred thus far. 
            We are aware that you are in <strong>${urgency}</strong> proximity to danger, and shall aid via one of the following: <strong>${communicationMethods.join(', ')}</strong>! 
        </p>
        <p>
            Since we do have a busy agency, we may have a wizard send a scroll to <strong>${emailAddress}</strong> to ensure your success
            during your journey, but we will send aid as soon as possible.
        </p>
        ${htmlBottom}
    `);
});

app.post('/order', (req, res) => {
    const firstLastName = req.body.firstLastName;
    const emailAddress = req.body.emailAddress;
    const shipAddress = req.body.address;
    const customerOrder = req.body.customerOrder;
    const quantity = req.body.quantity;
    const deliverInstructions = req.body.deliveryInstructions;
    const order = compareProducts(req.body.customerOrder);
    const single = findPrice(req.body.customerOrder);
    const totalPrice = (quantity)*single;

    res.send(`
        ${htmlTop}
        <h3>Hello <strong>${firstLastName}</strong>,</h3>
        <p> 
            We appreciate you placing an order with us for <strong>${quantity}</strong> <strong>${order}</strong>. The total cost
            of the order is ${totalPrice.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}, where each item is 
            ${single.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}.
            Although we are experiencing an influx of orders, we will ship your products to ${shipAddress} as soon as 
            possible and have the following delivery instructions: ${deliverInstructions}. We shall also send a delivery 
            confirmation via the following email address: ${emailAddress}.
        </p>
        ${htmlBottom}
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
