const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const TaskController = require('./controllers/task-controller')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/api/tasks', TaskController.findAll)
app.post('/api/tasks', TaskController.create)
app.put('/api/tasks/:id', TaskController.update)
app.delete('/api/tasks/:id', TaskController.remove)



app.listen(3000, () => console.log('Example app listening on port 3000!'))
