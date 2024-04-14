const mongoose = require('mongoose');
const Event = require('./models/eventModel');
const User = require('./models/userModel');

// Připojení k MongoDB databázi
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Chyba při připojování k databázi:'));
db.once('open', () => {
  console.log('Úspěšné připojení k databázi');

  // Zde můžete provádět operace s databází, např. vytváření nových událostí
  const newEvent = new Event({
    name: 'Název události',
    date: new Date(),
    location: 'Místo události',
    description: 'Popis události',
    attendees: []
  });

  newEvent.save((err, event) => {
    if (err) {
      console.error('Chyba při ukládání události:', err);
    } else {
      console.log('Událost uložena:', event);
    }
  });
});
const express = require('express');
const connectDB = require('./config/database');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// Připojení k MongoDB
connectDB();

// Middleware pro zpracování JSON dat
app.use(express.json());

// Použití tras pro události
app.use('/api', eventRoutes);

// Startování serveru
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});