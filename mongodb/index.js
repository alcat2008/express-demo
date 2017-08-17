const moment = require('moment');
const MongoClient = require('mongodb').MongoClient;

const COLLECTION_NAME = 'messages';

function insertData(db, callback) {
  // 1. 连接到表
  const collection = db.collection(COLLECTION_NAME);

  const data = {
    time: new Date(),
    content: 'woshiceshiwoshiceshiwoshiceshiwoshiceshi',
    name: 'woshi',
    phone: '13567898765'
  };

  // 2. 插入数据
  collection.insert(data, (err, result) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
    callback(result);
  });
}

function queryData(db, callback) {
  // 1. 连接到表
  const collection = db.collection(COLLECTION_NAME);

  // 2. 查询数据
  // const whereStr = { title: 'Fight Club' };
  collection.find().toArray((err, result) => {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

const url = 'mongodb://blog:blog@127.0.0.1:27017/blog';
MongoClient.connect(url, (err, db) => {
  console.log('err', err);
  console.log('Connected correctly to server.');

  insertData(db, (result) => {
    console.log(JSON.stringify(result));
  });

  queryData(db, (result) => {
    let parsedData = {};
    result.forEach(item => {
      parsedData = Object.assign({}, item, {
        time: moment(item.time).format('YYYY-MM-DD HH:mm:ss'),
      });
      console.log(JSON.stringify(parsedData));
    });
  });

  db && db.close();
});
