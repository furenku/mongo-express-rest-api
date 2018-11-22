const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const InstructionController = require('./controllers/instruction-controller')
const RecordController = require('./controllers/record-controller')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/api/instructions', InstructionController.findAll)
app.post('/api/instructions', InstructionController.create)
app.put('/api/instructions/:id', InstructionController.update)
app.delete('/api/instructions/:id', InstructionController.remove)

app.get('/api/records', RecordController.findAll)
app.post('/api/records', RecordController.create)
app.put('/api/records/:id', RecordController.update)
app.delete('/api/records/:id', RecordController.remove)

// --------------------------------- Adding static ------------------------
// app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
