const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const idsRouter = require('./routes/ids');
const authRouter = require('./routes/auth');
const requestsRouter = require('./routes/requests');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/ids', idsRouter);
app.use('/api/auth', authRouter);
app.use('/api/requests', requestsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
// const rateLimit = require('express-rate-limit');
// const path = require('path');
// const idsRouter = require('./routes/ids');
// const authRouter = require('./routes/auth');
// const requestsRouter = require('./routes/requests');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(helmet());
// app.use(mongoSanitize());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Rate Limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   message: 'Too many requests from this IP, please try again later'
// });
// app.use(limiter);

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URL, {})
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Routes
// app.use('/api/ids', idsRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/requests', requestsRouter);

// // Global Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send({ message: 'Something went wrong!' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });












