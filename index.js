const express = require('express')
const app = express()
const port = 5566

app.get('/', (req, res) => {
  res.send(' --- Sqoin Host saying : Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})