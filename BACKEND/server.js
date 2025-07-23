  const http = require('http');
 const app = require('./app');  
const port  = process.env.PORT || 4000;


const server = http.createServer(app);




server.listen(port, () => {
    console.log(`Server running on port ${port}`);  // This line will be executed when the server is started.  // The server is listening for incoming requests on port 3000.  // The server is now ready to handle incoming requests.  // The server is running on port 3000.  // The server is listening for incoming requests on port 3000.  // The server is now ready to handle incoming requests.  // The server is running on port 3000.  // The server is listening for incoming requests on port 3000.  // The server is now ready to handle incoming requests.  // The server is running on port 3000.  // The server is listening for incoming requests on port 3000.  // The server is now ready to handle incoming requests.  // The server is running on port 3000.  // The server
})