const express = require('express');
const app = express();  
const port = 3000;  
app.use(express.json()); //Middleware to parse JSON bodies

const items = ['Apple','Banana','Orange'];

app.get('/items', (req, res) => {
    res.json(items);
}); 



app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});

app.use ((req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}); 
app.post('/submit', (req, res) => {  
    const data = req.body;  
    res.send(` received ${JSON.stringify(data)}`);
});
//Serve static files from the 'public' directory
app.use(express.static('public'));
//Define a route for the home page
app.get('/about', (req, res) => {
    res.send('About Us');
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});