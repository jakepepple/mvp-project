const app = require('./server-config');
const dotenv = require('dotenv').config();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

