const express= require('express');
const app = express();

app.get('/posts',(req,res)=> {

})

const PORT = process.env.PORT || 4100;

app.listen(PORT, ()=> {
    console.log(`JWT-dev server is listening on ${PORT}`);
});