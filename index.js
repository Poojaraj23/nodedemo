const {log} = require('./logger')
const fs = require('fs')

// const events = require('events')

// const errorEmitter = new events.errorEmitter()

// errorEmitter.addListener('errorEvent', arg =>{
//     log(arg.message, --filename)
// })
// errorEmitter.emit('errorEvent',{message:'error just happened'})

const http = require('http')
const { EventEmitter } = require('stream')
const server = http.createServer(
    (req,res) =>{
        if(req.url === '/'){
//             res.write('hello from node')
//             res.end()
//         }
// })

// // console.log(server instanceof EventEmitter)
// server.on('connection',(stream) =>{
//     console.log('new connection Received')
        }
    fs.readFile('./main.html',(err,buff)=>{
        if(err) console.error(err)
        else {
            res.write(buff.toString())
            res.end()
        }

    })

})

server.on('listening', ()=> {
console.log('server is listening on port 3800')
})

server.listen(3800)

