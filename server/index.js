const app = require('./app');
const { conn, syncAndSeed } = require('./db');
const port = process.env.PORT || 3000;

// conn.sync()
  // .then(() => {
    // console.log('* Postrges Server Running *');
    app.listen(port, (err) => {
      // if(err) throw err;
      console.log(`* Listening on Port ${port} *`)
    });
  // })
  // .catch(err => console.log(err));

  // conn.sync();
    // .then(() => seed())
    // console.log('1. syncing to database');
    syncAndSeed();


    // conn.sync();