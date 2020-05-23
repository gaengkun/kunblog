const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;


app.get('/api/host', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send({ host : 'Kun'});
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});

