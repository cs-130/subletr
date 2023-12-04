const AWS = require("aws-sdk");
const config = require("../config/variables");

const SESConfig = {
  accessKeyId: config.AWS_ACCESS_KEY,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: config.AWS_REGION,
};

const sendAwsEmail = (from, to, subject, content) => {
  const params = {
    Source: from,
    Destination: {
      ToAddresses: [to],
    },
    ReplyToAddresses: ["hritikarya70@gmail.com"],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: content,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
  };
  new AWS.SES(SESConfig)
    .sendEmail(params)
    .promise()
    .then((res) => {
      // res has two fields:
      // res.ResponseMetadata: { RequestId: "..."}
      // res.MessageId: "..."
      return res;
    });
};

module.exports = { sendAwsEmail };
