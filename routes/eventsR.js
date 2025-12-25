import express from "express"
const routes = express.Router()
import {createEvent} from "../controllers/eventsC.js"
import {ValidationE} from "../middlewares/validationEvents.js"

routes.post("/creator/events", ValidationE ,createEvent)









export default routes