const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))
const controlFn = require('./controllers/messages_controller')


const messagesBaseUrl = '/api/messages'

app.get(messagesBaseUrl, controlFn.read)
app.post(messagesBaseUrl, controlFn.create)
app.put(`${messagesBaseUrl}/:id`, controlFn.update)
app.delete(`${messagesBaseUrl}/:id`, controlFn.delete)

const PORT = 3001;
app.listen(PORT, () => console.log(`Your server is running on port: ${PORT}`))