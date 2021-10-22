const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
// const port =  5000; use only for digit 

/* const handler = (req, res) => {
    res.send('hello from node js');
}

app.get('/', handler);
 */

app.get('/', (req, res) => {
    res.send('wow from node js with nodemon');
})

const users = [

    { id: 0, name: 'kida', email: 'kida@gmail.com', phone: '0187852369' },
    { id: 1, name: 'shuvo', email: 'shuvo@gmail.com', phone: '0147852369' },
    { id: 2, name: 'pronoy', email: 'pronoy@gmail.com', phone: '0157852369' },
    { id: 3, name: 'jakaria', email: 'jakaria@gmail.com', phone: '0147652369' },
    { id: 4, name: 'niloy', email: 'niloy@gmail.com', phone: '0147252369' },
    { id: 5, name: 'fahim', email: 'fahim@gmail.com', phone: '0147352369' },
    { id: 6, name: 'kakku', email: 'kakku@gmail.com', phone: '0147852369' }

]

app.get('/users', (req, res) => {
    res.send(users)
})


//dynamic api
app.get('/users:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})


// use query parameter
app.get('./users', (req, res) => {
    const search = req.query.search;

    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app METHOD
app.post('./users', (req, res) => {

    const newUsers = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post');
    // res.send(JSON.stringify(newUsers));
    res.json(newUsers);
})


app.listen(port, () => {
    console.log('listen to port ', port);
})