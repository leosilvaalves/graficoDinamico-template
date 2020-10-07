const express=require('express')
const { dirname } = require('path')
const app=express()
const server = require('http').createServer(app)
const path=require('path')
const io = require('socket.io')(server)




let h= new Date()
var horario=null
app.use(express.static(path.join(__dirname+'/assets')))
//app.set('views', path.join(__dirname,'assets'))
app.set('view engine','html')

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/dashboard.html')
})


app.get("/usuario",(req,res)=>{
    res.sendFile(__dirname+'/public/user.html')
})


app.get("/grafico2",(req,res)=>{
    res.sendFile(__dirname+'/public/dashboard2.html')
})

io.on('connection',socket=>{

    function enviarValor(){
        let novo_valor=Math.round(Math.random() * 10)
        
    
        io.emit('novoAleatorio',novo_valor)
        
    }

    setInterval(enviarValor, 5000)

})




server.listen(3000)