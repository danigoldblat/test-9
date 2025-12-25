import {readFile,writeFile} from "../utils/utils.js"

export const createEvent = async (req , res ) =>{
    const newEvent = req.body
    const events =await readFile("data/events.json")
    events.push(newEvent)
    writeFile("data/events.json",events)
    res.json({"message": "Event created successfully"})
        
}