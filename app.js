import express from "express"
import { Auth } from "./utils/utils.js"
import {ValidationU} from "./middlewares/validationUsers.js"
import usersRoutes from "./routes/usersR.js"
import eventsRoutes from "./routes/eventsR.js"
import { ValidationE } from "./middlewares/validationEvents.js"
import { ValidationB } from "./middlewares/ValidationBy.js"
import BuyTickets from "./routes/ByTickets.js"

const app = express()
const port = 3075
app.use(express.json())
app.get("/health",Auth)
app.use("/",ValidationU,usersRoutes)
app.use("/",ValidationE,eventsRoutes)
app.use("/",ValidationB,BuyTickets)








app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
    
})