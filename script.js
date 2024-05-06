const express = require("express")
const app = express()
const cors = require("cors")

const staticData = require("./routes/staticData")

app.use(cors())
app.use(express.json())
app.use(staticData)


app.get("*", (req, res) => {
    res.json("NO route available")
})

const PORT = process.env.PORT | 3002

app.listen(PORT, console.log("Server running"))