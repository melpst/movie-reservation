import express from 'express'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const server = app.listen(3000, () => {
    console.log('server is running on port 3000')
})

module.exports = server