const HyperE = require ('hyper-express')
const hyper = new HyperE.Server()
const PORT = process.env.PORT || 3000

hyper.get("/", (_,r)=> r.send('ok'))

hyper.listen(PORT, () => console.log(`Server is listening http://localhost:${PORT}`))