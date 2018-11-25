/* require('dotenv').config();
const conn = require('./conn');
const User = require('./models/User');

// const Task = require('./models/Task');
// const Project = require('./models/Project');
// const UserProject = require('./models/UserProject');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);

const seed = async () => {
  await conn.sync({ force: true });
  console.log('db synced!');
  const users = await Promise.all([
    User.create({
      email: 'jgrubard@gmail.com',
      password: jeremyPassword
    }),
    User.create({
      email: 'su@gmail.com',
      password: suPassword
    }),
    User.create({
      email: 'mario@gmail.com',
      password: 'mario'
    })
  ]);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
  })
  // .then(() => {
  //   console.log('closing db connection');
  //   conn.close();
  //   console.log('db connection closed');
  // })

console.log('seeding...'); */




// require('dotenv').config();
// const conn = require('./conn');
// const User = require('./models/User');

// // const Task = require('./models/Task');
// // const Project = require('./models/Project');
// // const UserProject = require('./models/UserProject');

// const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);

// const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
// const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);


// const seed = () => {
//   return Promise.all([
//     User.create({
//       email: 'jgrubard@gmail.com',
//       password: jeremyPassword
//     }),
//     User.create({
//       email: 'su@gmail.com',
//       password: suPassword
//     }),
//     User.create({
//       email: 'mario@gmail.com',
//       password: 'mario'
//     })
//   ])
// }

// // const syncAndSeed = () => {
//   console.log('1. syncing to database');
//   conn.sync({ force: true })
//     .then(() => {
//       console.log('2. database synced');
//       console.log('3. seeding data');
//       return seed();
//     })
//     .then(() => {
//       console.log('4. closing connection');
//       conn.close();
//       console.log('5. connection closed');
//       return null;
//     })
//     .catch(err => {
//       console.log('ERROR SEEDING DATABASE');
//     })
// // }


// // module.exports = syncAndSeed;



// require('dotenv').config();
// const conn = require('./conn');
// const User = require('./models/User');

// const Task = require('./models/Task');
// const Project = require('./models/Project');
// const UserProject = require('./models/UserProject');

// const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);

// const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
// const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);


// const syncAndSeed = async () => {
//   console.log('1. syncing to database');
//   await conn.sync({ force: true });
//   console.log('2. database synced');	
//   console.log('3. seeding data');
//   const users = await Promise.all([
//     User.create({
//       email: 'jgrubard@gmail.com',
//       password: jeremyPassword
//     }),
//     User.create({
//       email: 'su@gmail.com',
//       password: suPassword
//     })
//   ])
//   console.log(`4. seeded ${users.length} users`);
//   return users;
// }

// syncAndSeed()
//   .then(() => {
//     console.log('5. closing connection');
//     conn.close();
//     console.log('6. connection closed');
//     return null;
//   })
//   .catch(err => {
//     console.log('ERROR SEEDING DATABASE');
//   })

// // module.exports = syncAndSeed;












// console.log('seeding...');


// const sync = () => conn.sync({ force: true });

// const seed = async () => {
//   const users = await Promise.all([
//     User.create({
//       email: 'jgrubard@gmail.com',
//       password: jeremyPassword
//     }),
//     User.create({
//       email: 'su@gmail.com',
//       password: suPassword
//     })
//   ])
//   return users;
// }


// const syncAndSeed = () => {
//   console.log('1. syncing to database');
//   return sync()
//   // sync()
//     .then(() => {
//       console.log('2. seeding database');
//       return seed();
//     })
//     .then(() => console.log('3. database seeded'))
//     .then(() => {
//       console.log('4. closing connection');
//       conn.close();
//     })
//     .catch(err => {
//       console.log('Error Seeding Database');
//       console.error(err);
//     });
// }

// syncAndSeed();

// module.exports = syncAndSeed;







/* require('dotenv').config();
const conn = require('./conn');
const User = require('./models/User');

const Task = require('./models/Task');
const Project = require('./models/Project');
const UserProject = require('./models/UserProject');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);

const sync = () => conn.sync({ force: true });

const seed = () => {
  return Promise.all([
    User.create({
      email: 'jgrubard@gmail.com',
      password: jeremyPassword
    }),
    User.create({
      email: 'su@gmail.com',
      password: suPassword
    })
  ])
}


const syncAndSeed = () => {
  console.log('1. syncing to database');
  return sync()
  // sync()
    .then(() => {
      console.log('2. seeding database');
      return seed();
    })
    .then(() => console.log('3. database seeded'))
    .then(() => {
      console.log('4. closing connection');
      conn.close();
    })
    .catch(err => {
      console.log('Error Seeding Database');
      console.error(err);
    });
}

syncAndSeed();

module.exports = syncAndSeed; */





/* require('dotenv').config();
const conn = require('./conn');
const User = require('./models/User');

const Task = require('./models/Task');
const Project = require('./models/Project');
const UserProject = require('./models/UserProject');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);

const seed = () => {
  // return conn.sync({ force: true })
  //   .then(() => {
      return Promise.all([
        User.create({
          email: 'jgrubard@gmail.com',
          password: jeremyPassword
        }),
        User.create({
          email: 'su@gmail.com',
          password: suPassword
        }),
        User.create({
          email: 'mario@gmail.com',
          password: 'mario'
        })
      ])
    // })
    // .catch(err => {
    //   console.log('Error seeding', err);
    // })
}

// seed();

// const seed = () => {
//   return Promise.all([
//     User.create({
//       email: 'jgrubard@gmail.com',
//       password: jeremyPassword
//     }),
//     User.create({
//       email: 'su@gmail.com',
//       password: suPassword
//     }),
//     User.create({
//       email: 'mario@gmail.com',
//       password: 'mario'
//     })
//   ])
//   .then(([ jeremy, su, mario ]) => {
//     return Promise.all([
//       Project.create({
//         name: 'nintendo-switch'
//       }),
//       jeremy, su, mario
//     ])
//     .then(([ project, jeremy, su, mario ]) => {
//       return Promise.all([
//         UserProject.create({
//           role: 'creator',
//           projectId: project.id,
//           userId: jeremy.id
//         }),
//         project, jeremy, su, mario
//       ])
//       .then(([userProject, project, jeremy, su, mario]) => {
//         return Promise.all([
//           Task.create({
//             name: 'create backend architecture',
//             description: 'build server for new project and connect to database',
//             projectId: project.id
//           }),
//         ])
//       })
//     })
//   })
// }

console.log('1. syncing database');
conn.sync({ force: true })
  .then(() => {
    console.log('2. database synced');
    console.log('3. seeding database');
    return seed();
  })
  .then(() => console.log('4. database seeded'))
  .then(() => {
    console.log('5. closing connection');
    conn.close();
    // console.log('6. connection closed');
    // return null;
  })
  .catch(err => {
    console.log('uh-oh, there was an error seeding!')
    console.log(err);
  });

// module.exports = seed;

// const syncAndSeed = async () => {
//   try {
//     console.log('1. syncing database');
//     await conn.sync({ force: true })
//     console.log('2. database synced');
//     console.log('3. seeding database');
//     await seed();
//     console.log('4. database seeded');
//     console.log('5. closing connection');
//     await conn.close();
//     console.log('6. connection closed');
//   } catch (err) {
//     console.log('ERROR SEEDING DATABASE');
//   }
// }




// syncAndSeed();

// module.exports = syncAndSeed;

/* require('dotenv').config();
const conn = require('./conn');
const User = require('./models/User');
// const Task = require('./models/Task');
// const Project = require('./models/Project');
// const UserProject = require('./models/UserProject');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);



const seed = () => {
  return Promise.all([
    User.create({
      email: 'jgrubard@gmail.com',
      password: jeremyPassword
    }),
    User.create({
      email: 'su@gmail.com',
      password: suPassword
    }),
    User.create({
      email: 'mario@gmail.com',
      password: 'mario'
    })
  ])
  .then(([ jeremy, su, mario ]) => {
      return Promise.all([
        Project.create({
          name: 'nintendo-switch'
        }),
        jeremy, su, mario
      ])
      .then(([ project, jeremy, su, mario ]) => {
        return Promise.all([
          UserProject.create({
            role: 'creator',
            projectId: project.id,
            userId: jeremy.id
          }),
          Task.create({
            name: 'create backend architecture',
            description: 'build server for new project and connect to database',
          }),
          project, jeremy, su, mario
        ])
        .then(([userProject, task, project, jeremy, su, mario]) => {
          task.setProject(project);
        })
      })
    })
}

console.log('1. syncing database');

conn.sync({ force: true })
  .then(() => {
    console.log('2. database synced');
    console.log('3. seeding database');
    return seed();
  })
  .then(() => console.log('4. database seeded'))
  .then(() => {
    console.log('5. closing connection');
    conn.close();
    console.log('6. connection closed');
  })
  .catch(err => {
    console.log('uh-oh, there was an error seeding!')
    console.log(err);
  }); */