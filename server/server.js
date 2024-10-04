const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todomodel = require('./Models/Todo')
const PORT = process.env.PORT || 3001;

const app = express()
app.use(cors())
app.use(express.json())

//mongoose.connect('mongodb://127.0.0.1:27017/') 10.255.255.254
// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// Replace 'your_database_name' with your actual database name
const mongoURI = 'mongodb://127.0.0.1:27017/test';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.options('/add', cors());

app.put('/del/:id',(req,res)=>{
    const {id} = req.params
    Todomodel.findByIdAndDelete({ _id: id })
        .then(result => (res.json(result), console.log(result)))
        .catch(err => res.status(500).json({ error: err.message }))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params
    console.log(id)
    Todomodel.findByIdAndUpdate({ _id: id }, { done: true })
        .then(result => (res.json(result), console.log(result)))
        .catch(err => res.status(500).json({ error: err.message }))
     

})

app.get('/get', (req, res) => {
    Todomodel.find()
        .then(result => (res.json(result), console.log(result)))
        .catch(err => res.status(500).json({ error: err.message }));
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    console.log('Received task:', task);
    // Todomodel.create({
    //     task: task
    // }).then(result => res.json(result))
    // .catch(err => res.json(err))
    Todomodel.create({ task: task })
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }));
})
// app.post('/add', (req, res) => {
//     const { task } = req.body;
//     console.log('Received task:', task);
//     // Handle the task (e.g., save it to a database)
//     res.status(200).send('Task added successfully');
// });

app.listen(PORT, () => {
    console.log("server is running", PORT)
})