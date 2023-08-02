const http = require('http')
const port = 3300

const server = http.createServer((req, res)=> {
    res.write("Hello World!")
    res.end()
})

server.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})