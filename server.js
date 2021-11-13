const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getPosts = require('./routes/getPosts.js');
const getParty = require('./routes/getParty.js');
const getPost = require('./routes/getPost.js');

dotenv.config();
const app = express();

// cross origin requests
app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );

const CONNECTION_URI = process.env.DB;
mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDb Atlas Connected...'))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

app.use("/api", getPosts);
app.use("/api", getParty);
app.use("/api", getPost);

if(process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// port connection
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));