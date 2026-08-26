const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Senha padrão do XAMPP é vazia
  database: 'barbearia'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
  } else {
    console.log('✅ Conectado ao banco de dados MySQL (barbearia)!');
  }
});

// Endpoint 1: Buscar Lista de Serviços do Banco
app.get('/servicos', (req, res) => {
  const sql = 'SELECT * FROM servicos';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Endpoint 2: Salvar Agendamento no Banco
app.post('/agendar', (req, res) => {
  const { usuario_id, servico_id, data_hora } = req.body;

  const sql = 'INSERT INTO agendamentos (usuario_id, servico_id, data_hora, status) VALUES (?, ?, ?, "pendente")';
  
  db.query(sql, [usuario_id || 1, servico_id, data_hora || new Date()], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Agendamento cadastrado com sucesso!', id: result.insertId });
  });
});

app.listen(3000, () => {
  console.log('🚀 Backend rodando na porta 3000: http://localhost:3000');
});