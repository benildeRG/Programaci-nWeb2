const express = require('express');
const app = express();
const port = 5012;

app.listen(port,()=>{
    console.log(`Server: http://localhost:${port}`);
});