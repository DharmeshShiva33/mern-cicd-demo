const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Backend is running with CI/CD'));
app.get('/api', (req, res) => res.json({ message: 'Hello from backend' }));
app.listen(5000, () => console.log('Backend on 5000'));