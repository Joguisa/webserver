import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
    };

    res.write(JSON.stringify(person));
    res.end();
}); 

server.listen(8080);
console.log('Server is listening on port 8080...');
