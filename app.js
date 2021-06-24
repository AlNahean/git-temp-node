const http = require('http')

const server = http.createServer((req, res) => {
    res.write('welcome to my page')
    res.end()
})

server.listen(5000)