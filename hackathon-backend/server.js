const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

dotenv.config();
connectDB();

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  // Routes
app.use('/api/project', require('./routes/project'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const teamRoutes = require('./routes/team');
app.use('/api/team', teamRoutes);

