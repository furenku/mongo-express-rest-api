const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const TaskController = require('./controllers/task-controller');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// app.get('/', function(req,res,next){
    
//     res.send('express...')

// });

app.get('/api/tasks', TaskController.findAll);
app.get('/api/tasks/:id', TaskController.findOne);
app.post('/api/tasks', TaskController.create);
app.put('/api/tasks/:id', TaskController.update);
app.delete('/api/tasks/:id', TaskController.remove);



app.listen(3000, () => console.log('App listening on port 3000'));
