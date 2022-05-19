const express = require('express');
const cors = require('cors');
const path = require('path');
const photosRouter = require('./routers/photos');
const dotenv = require('dotenv');

dotenv.config();

require('./db/connection');

const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(cors());
app.use(photosRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
