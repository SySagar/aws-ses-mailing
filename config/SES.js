import AWS from 'aws-sdk';
const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2',
}

//configure AWS
const SESinstance = new AWS.SES(awsConfig);

export default  SESinstance;