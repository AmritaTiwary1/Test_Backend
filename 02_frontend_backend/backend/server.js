import express from 'express'; 

const app = express();

  //because i have run - npm run build in frontend and then moved the new form folder- dist to the backend folder, so we have to use middleware & remove '/' route
/*  app.get('/',(req,res)=>{
  res.send('Hello World!!!!!')
}) */

  app.use(express.static('dist'))  //we are serving frontend folder by just writing this line and putting the dist folder (created by running npm run build in fronted folder) in backend

app.get('/api/jokes',(req,res)=>{
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