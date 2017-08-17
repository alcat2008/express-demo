const nodemailer = require('nodemailer');

const smtpConfig = {
  host: 'smtp.163.com',
  port: 25,
  secureConnection: true,
  auth: {
    user: 'sender@163.com',
    pass: 'xxx' // 授权码，不是登录密码
  }
};

const transporter = nodemailer.createTransport(smtpConfig);

const option = {
  from: 'sender <sender@163.com>',
  to: 'xxxxxxx',
  subject: '来自 node 的测试邮件',
  html: '邮件内容：<br/>这是来自nodemailer发送的邮件'
};

transporter.sendMail(option, (error, response) => {
  if (error) {
    console.log('fail: ', error);
  } else {
    console.log('success: ', response);
  }
});
