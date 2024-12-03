const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar o corpo da requisição como JSON
app.use(express.json());

// Endpoint para inscrever na newsletter
app.post('/newsletter', (req, res) => {
  const email = req.body.email;
  // Simulação de salvamento no banco de dados (ou enviar e-mail)
  res.status(200).json({ message: `Você foi inscrito com sucesso!` });
});

// Endpoint para cupons digitais
app.post('/coupon', (req, res) => {
  const couponCode = req.body.couponCode;
  // Simulação de validação de cupom
  if (couponCode === "PROMO2024") {
    res.status(200).json({ message: `Cupom resgatado com sucesso!` });
  } else {
    res.status(400).json({ message: `Cupom inválido ou já usado.` });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
