import {readFile} from "../utils/utils.js"
export const Validation = async (req, res, next) => {
  const users = await readFile("data/users.json")
  const match = await users.find((user) => 
    user.username === req.headers.username &&
    user.password === req.headers.password)
     if(match){
      next();
    } else {
      res.status(401).json("username or password not found");
    }
  }