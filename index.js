import express from 'express'
import bodyParser from 'body-parser'
import usersRouters from './routes/users.js'

const app = express()
const PORT = 8000

app.use(bodyParser.json())
app.use("/users",usersRouters)
app.listen(PORT,() => console.log(`server is Running in http://localhost:${PORT}`))


app.get("/",(req,res) => {

    res.send("hello vishwanath")
})