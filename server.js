const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const db = require("./config/db")
const cookieParser = require("cookie-parser")
const userRouter = require("./routes/userRoutes")
const postRouter = require("./routes/postRoutes")
require("dotenv").config()

// mongodb connection
db()

// Middleware Connections
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.json({ extended: true }))
app.use(cookieParser())

// Routes

app.get("/api/v2", (req, res) => {
	res.send("hi there")
})
 app.use('/api/v2', userRouter);
app.use('/api/v2', postRouter);
// Connection
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`App running in port: http://localhost:${PORT}`)
})
