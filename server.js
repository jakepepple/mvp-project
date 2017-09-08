const dotenv = require('dotenv').config();
const app = require('./server-config');

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

