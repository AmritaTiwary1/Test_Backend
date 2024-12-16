import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World!!!!!')
})

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            joke:'Why was the math book sad?',
            punchline:'Because it had too many problems.',
        }
        ,{
            id:2,
            joke:'Why did the scarecrow win an award?',
            punchline:'Because he was outstanding in his field.',
        },
        {
            id:3,
            joke:'are you a joke?',
            punchline:'no',
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`server is running on ${port}`);
})