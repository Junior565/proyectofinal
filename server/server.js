const express = require('express');
const path = require('path');
const app = express();
const orderRoutes = require('./routes/orderRoutes');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use('/api/orders', orderRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
