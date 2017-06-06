const Test = {};

// setTimeout(() => {
//   Test.a = 'a';
// }, 5000);

new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 1000);
}).then(() => {
  Test.a = 'a';
});


module.exports = Test;
