
const schedule = require('node-schedule');

function scheduleCronstyle() {
  schedule.scheduleJob('5 * * * * *', () => {
    console.log('scheduleCronstyle: ', new Date());
  });
}

scheduleCronstyle();
