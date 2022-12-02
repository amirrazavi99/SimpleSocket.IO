const express = require('express')
const app = express()


//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))


//routes
app.get('/', (req, res) => {
	res.render('index')
})


const PORT =3000
//Listen on port 3000
server = app.listen(PORT,()=>{
    console.log(`app is connecting ${PORT}`);
})



//socket.io instantiation
const io = require("socket.io")(server)


//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')


})
