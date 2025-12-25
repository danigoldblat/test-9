export const Auth = async (req, res) => {
  try {
    res.json({ ok: true });
  } catch (error) {
    res.status(401).dend("server not the dfinf");
  }
}

export async function readFile(path){
    try {
        const data = await fs.readFile(path, "utf8");
        return JSON.parse(data)

    } catch (error) {
        console.log(error);
    }
}
export async function writeFile(path,data){
        const json = JSON.stringify(data,null,2)
        fs.writeFile(path,json,(err)=>{
            if(err)return console.log(err);
            console.log( "File written successfully")
        })
    }

export const Validation = async (req, res, next) => {
  const users = await readFile("../data/users.js");
  const match = users.find((user) => 
    user.username === req.headers.username &&
    user.password === req.headers.password)
     if(match){
      next();
    } else {
      res.status(401).json("username or password not found");
    }
  }