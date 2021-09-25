const express = require('express')
const app = express()
const port = 3008
app.use(express.json())
app.get('/', (req, res) => {
	res.json({message: 'Hello World, I have addded a new Feature', statuscode : 200, 'info' : "Apple India INC" })
})
let server = app.listen(port, () => {
	console.log(`Example app listing at port ${port}`)
})

function stop(){
	server.close();
}
module.export = server;
module.export.stop = stop;	
