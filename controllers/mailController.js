import dotenv from 'dotenv';
import { nanoid } from 'nanoid';
// import SESinstance from '../config/SES.js';
import SESinstance from '../config/SES.js'
dotenv.config();


const SendEmail = async (req,res)=>{
    try {
        const emailTo = req.body.emailTo;
        const name = req.body.name;
        const emailFrom = process.env.EMAIL_FROM;
        const shortCode = nanoid(6).toUpperCase();

        //prepare email to send
        const params = {
            Source: emailFrom,
            Destination: {
                ToAddresses: [emailTo]
            },
            ReplyToAddresses: [emailFrom],
            Message: {
                Subject: {
                    Charset: 'UTF-8',
                    Data: `Hi ${name}`
                },
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: `
                        <html>
                            <body>
                                <p>Thank you for subscribing to our newsletter</p>
                                <p>Here is your code: <b>${shortCode}</b></p>
                                <p>Use this code to confirm your email address</p>
                                
                            </body>
                        </html>
                        `
                           }
                      }
                    }
        }

        //send email
        const sendEmailOnSES = async ()=>await SESinstance.sendEmail(params).promise();

        sendEmailOnSES().then(data=>{
            console.log("email submitted to SES", data);
            res.send("email submitted to SES");
        }).catch(error=>{
            console.log(error);
            res.send("email failed to send");
        })

    } catch (error) {
        console.log(error);
        res.send("something went wrong")
    }
}

export default SendEmail;