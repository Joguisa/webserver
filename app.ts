import express, { Request, Response } from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.render('home', {
        name: 'Jonatán Guillén',
        title: 'Curso de Node JS'
    });
});

app.get('/generic', (req : Request, res: Response) => {
    res.render('generic', {
        name: 'Jonatán Guillén',
        title: 'Curso de Node JS'
    });
});

app.get('/elements', (req : Request, res: Response) => {
    res.render('elements', {
        name: 'Jonatán Guillén',
        title: 'Curso de Node JS'
    });
})

app.get('*', (req : Request, res: Response) => {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})