import fs from "fs/promises"
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

