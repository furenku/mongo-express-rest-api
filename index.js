const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const TaskController = require('./controllers/task-controller');
const UserController = require('./controllers/user-controller');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req,res,next){
    
    res.send('express...')

});

app.get('/api/tasks', TaskController.findAll);
app.get('/api/tasks/:id', TaskController.findOne);
app.post('/api/tasks', TaskController.create);
app.put('/api/tasks/:id', TaskController.update);
app.delete('/api/tasks/:id', TaskController.remove);


app.get('/api/users', UserController.findAll);
app.get('/api/users/:id', UserController.findOne);
app.post('/api/users', UserController.create);
app.put('/api/users/:id', UserController.update);
app.delete('/api/users/:id', UserController.remove);


app.listen(3000, () => console.log('App listening on port 3000'));
