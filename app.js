import express from "express"
import { Auth } from "./utils/utils.js"
const app = express()
const port = 3075
app.use(express.json())
app.get("/health",Auth)









app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
    
})