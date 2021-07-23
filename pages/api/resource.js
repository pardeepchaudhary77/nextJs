export default async function resource(req, res) {
    if(req.method === "GET"){
        const dataRes= await fetch("http://localhost:3001/api/resource")
        const data = await dataRes.json()
        return res.send(data)
    }
    if(req.method === "POST"){
        console.log(req.body)
        const {title, desc, link, priority, timeToFinish} = req.body

        if(!title || !desc || !link || !priority || !timeToFinish){
            return res.status(422).send("Data are Missing")
        }
        return res.send("Data Added")
    }
    
}
