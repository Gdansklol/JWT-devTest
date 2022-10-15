const express= require('express');
const app = express();

const posts = [
    {
        cityName:'Stockholm',
        title: 'post 1'
    },
    {
        cityName:'New York',
        title: 'post 2'
    }
]

app.get('/posts',(req,res)=> {

})

const PORT = process.env.PORT || 4100;

app.listen(PORT, ()=> {
    console.log(`JWT-dev server is listening on ${PORT}`);
});