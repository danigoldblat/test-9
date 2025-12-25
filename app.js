import express from "express"
import { Auth } from "./utils/utils.js"
import {Validation} from "./middlewares/validation.js"
import usersRoutes from "./routes/usersR.js"

const app = express()
const port = 3075
app.use(express.json())
app.get("/health",Auth)
app.use("/users",Validation,usersRoutes)








app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
    
})