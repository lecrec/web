var express = require('express')
var app = express()

app.use('/', express.static('view'))
app.use('/dist',express.static('dist'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})