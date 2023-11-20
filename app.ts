import express, { Request, Response } from 'express';

const app = express()
const port: number = 8080

// middleware 

app.use(express.static('public'));

app.get('/', (req : Request, res: Response) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/elements', (req : Request, res: Response) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic', (req : Request, res: Response) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('*', (req : Request, res: Response) => {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})