import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongoDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"
dotenv.config();
const app = express();


// connect database
connectMongoDB();


// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))
// routes
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/blogs", blogRoutes)


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


