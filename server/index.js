import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { products } from './products.js';




const app = express();

const PORT = 3000;

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

// Serve images statically
app.use('/images', express.static(path.join(__dirname, 'assets')));

// Sample route to get products
app.get('/api/products', (req, res) => {

  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
