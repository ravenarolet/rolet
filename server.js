const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

let pagamentoConfirmado = false;

app.get('/pix', (req, res) => {
  res.json({
    chavePix: '48191578840',
    valor: '10.00',
    mensagem: 'Envie R$10,00 para a chave Pix acima e aguarde liberação.'
  });
});

app.get('/check-payment', (req, res) => {
  res.json({ paid: pagamentoConfirmado });
});

app.get('/liberar', (req, res) => {
  pagamentoConfirmado = true;
  res.send('✅ Pagamento liberado com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});