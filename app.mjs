import express from "express"
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log(req.ip)
  res.send('Hello World!👋\nThis is my first server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/Weather:/cityName/:side', (req,res) => {
  res.send(req.params)
})