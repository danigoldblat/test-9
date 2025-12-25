import {readFile , writeFile} from "../utils/utils.js"

export const registerUser = async (req,res) =>{
    const newUser = req.body
    const users =await readFile("data/users.json")
    const exists = users.find(user => user.username === newUser.username)
    if(!exists){
        users.push(newUser)
        writeFile("data/users.json",users)
        res.json({"message": "User registered successfully"})
    }else{
        res.json({"message": "Existing username"})
    }
}