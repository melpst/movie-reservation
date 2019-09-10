import express from 'express'
import bodyParser from 'body-parser'
import config from 'config'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const server = app.listen(config.get('port'), () => {
  console.log(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
})

module.exports = server