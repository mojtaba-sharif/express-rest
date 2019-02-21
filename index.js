const http = require('http');
const app = require('./config/app');

const port = parseInt(process.env.PORT);

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`server started http://localhost:${port}`));
