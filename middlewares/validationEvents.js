
import {readFile} from "../utils/utils.js"
export const ValidationE = async (req, res, next) => {
  const users = await readFile("data/users.json")
  const match = users.find((user) => 
    user.username === req.body.username &&
    user.password === req.body.password)
     if(match){
      next();
    } else {
      res.status(401).json("username or password not found");
    }
  }