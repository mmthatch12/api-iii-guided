const server = require('./api/server')

const port = 8001
server.listen(port, () => console.log(`\n**API on port ${port}\n`))