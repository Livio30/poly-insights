const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();
const app = express();

// cross origin requests
app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );

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