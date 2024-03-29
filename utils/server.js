const express = require('express')
const app = express()

app.use('/css', express.static('css'))
app.use('/src', express.static('src'))
app.use('/external', express.static('external'))
app.use('/node_modules', express.static('node_modules'))
app.use('/editor', express.static('editor'))
app.use('/', express.static('editor'))

app.listen(8000, () => console.log('Example app listening on port 8000!'))
