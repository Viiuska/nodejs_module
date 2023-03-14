const http = require('http')

//Create server
http.createServer((req, res)=>{
    res.write("Hello world");
    res.end();
})
.listen(3000, () => console.log('Server running...'))