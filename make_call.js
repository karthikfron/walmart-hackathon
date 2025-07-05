require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken  = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;
const toNumber   = process.env.MY_PHONE_NUMBER;
const url        = process.env.PUBLIC_VOICE_WEBHOOK_URL; // Must be the ngrok URL ending with /voice

const client = twilio(accountSid, authToken);

client.calls
  .create({
    url, // Twilio will GET this when you answer
    to: toNumber,
    from: fromNumber
  })
  .then(call => console.log('Call initiated, SID:', call.sid))
  .catch(err => console.error('Error:', err));