const app = require('./app');

const { conn } = require('./db');
const port = process.env.PORT || 3000;

conn.sync();

const server = app.listen(port, () => {
  console.log(`** SERVER: PORT ${port} **`);
  // conn.sync()
  //   .then(() => {
  //     console.log("Synchronated the database")
  //   })
  //   .catch(err => {
  //     console.error("Trouble right here in River City", err.stack, err)
  //   })
});

module.exports = { app, server };


// conn.sync()
//   .then(() => {
//     console.log('The database is synced');
//     app.listen(port, () => console.log(`* Listening on port ${port} *`));
//   });

// app.listen(port, () => console.log(`* Listening on Port ${port} *`));

// conn.sync();

// syncAndSeed()
//   .then(() => {
//     console.log('5. closing connection')
//     conn.close()
//     console.log('6. connection closed')
//   })
//   .catch(err => {
//     console.log('ERROR SEEDING DATABASE')
//     console.error(err.message);
//     console.error(err.stack);
//   })

// syncAndSeed();