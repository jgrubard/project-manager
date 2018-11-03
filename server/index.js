const app = require('express')();
const port = process.env.PORT || 3000;
// const { conn, sync, seed } = require('./db');

app.use('/api', require('./routes'));

app.listen(port, () => console.log(`* Listening on Port ${port} *`));