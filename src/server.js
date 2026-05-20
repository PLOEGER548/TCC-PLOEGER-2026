import express from 'express';
const server = express();

server.get('/3info', (req, res)=>{
    res.status(200).json({
        error: false,
        message: '3infoB API',
    });
});

server.get('/', (req, res)=>{
    res.send('Servidor Ligado!');
});

server.listen(3000, ()=>{
    console.log('Server on.')
});