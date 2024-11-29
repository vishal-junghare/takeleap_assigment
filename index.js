

//4. Create a REST API using Express with one endpoint, /users, which responds with a JSON array of user objects.


const express = require('express');
const app = express();
const port = 3000; // You can choose any port

// Sample user data
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

// Endpoint to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// Ouput 
// public url :http://localhost:3000/users