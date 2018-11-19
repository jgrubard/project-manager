const app = require('./app');
const { conn } = require('./db');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`* Listening on Port ${port} *`));

// conn.sync();