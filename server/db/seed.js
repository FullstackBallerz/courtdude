'use strict';

const { db, User, Court } = require('./index');
const courts = require('../ballCourts');

const users = [
  {
    email: 'iverson@gmail.com',
    password: 'theanswer',
    username: 'The Answer',
    firstName: 'Allen',
    lastName: 'Iverson',
    age: 43,
    imageUrl:
      'https://vz.cnwimg.com/wp-content/uploads/2014/08/GettyImages-1939608.jpg'
  },
  {
    email: 'yao@gmail.com',
    password: 'chinatown',
    username: 'Yao',
    firstName: 'Yao',
    lastName: 'Ming',
    age: 37,
    imageUrl:
      'https://www.google.com/search?tbm=isch&sa=1&ei=ZBIkW4SvO-WG5wKQ84zIDg&q=yao+ming+streetball&oq=yao+ming+streetball&gs_l=img.3...11725.13295.0.13458.11.11.0.0.0.0.115.798.10j1.11.0....0...1c.1.64.img..0.5.406...0j0i67k1j0i24k1.0.J-54UR3Wpt8#imgrc=dQUmtvGLFr21hM:'
  },
  {
    email: 'joe@gmail.com',
    password: 'joeballer',
    username: 'Cup of Joe',
    firstName: 'Joe',
    lastName: 'Kang',
    age: 22,
    imageUrl:
      'https://2.bp.blogspot.com/--qhnKGf9jPk/VyKfalER9QI/AAAAAAAAAOU/vysj7bVZ0vYls8bH8vEXbu1jPri-tHUBQCLcB/s1600/nbastreet_vol2_biggie_little.jpg'
  }
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const dbCourts = await Court.bulkCreate(courts());
    const dbUsers = await User.bulkCreate(users);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

seed();
