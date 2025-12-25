import {readFile,writeFile} from "../utils/utils.js"

export const BuyTickets = async (req , res ) =>{
    const newTickets = req.body
    const events =await readFile("data/events.json")
    const exists = events.find(event => event.eventName.toLocaleLowerCase() === newTickets.eventName)
    if(exists){
        if(events.ticketsForSale>0){
            events.push(newTickets)
            writeFile("data/receipts.json",events)
        res.json({"message": "Tickets purchased successfully"})
        }else{
            res.json({"message": "Tickets are sold out"})
        }
    }else{
        res.status(402).json({"message": "The performance was not found."})
    }
    
    
        
}