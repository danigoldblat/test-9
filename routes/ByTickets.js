import express from "express"
const routes = express.Router()
import {BuyTickets} from "../controllers/ticketsC.js"
import {ValidationB} from "../middlewares/ValidationBy.js"

routes.post("/users/tickets/buy", ValidationB ,BuyTickets)









export default routes