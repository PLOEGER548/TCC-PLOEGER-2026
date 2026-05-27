import express from 'express';

const server = express();

const users = [
    {id:1, name: 'Jhon doe', gender: 'M'},
    {id:2, name: 'Jane', gender: 'F'},
    {id:3, name: 'Daniel', gender: 'M'},
    {id:4, name: 'Miguel', gender: 'M'},
    {id:5, name: 'Bruno', gender: 'M'},
];

server.get('/users', (req,res)=>{
    return res.status(200).json({
        error: false,
        message: 'Users list',
        result: users
    });
});

server.get('/users', (req,res)=>{
});
 server.get('/users/:id', (req,res)=>{
    const {id} = req.params;
    const user = users.find(u => u.id === parseInt(id));
    return res.status(200).json({

        if (!user)
            return res.status(404).json
        error: false,
        message: 'User Found',
        result: user
    });
 });

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