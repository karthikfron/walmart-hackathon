

require('dotenv').config();
const express = require('express');
const twilio = require('twilio');

const app = express();
app.use(express.urlencoded({ extended: false }));

const VoiceResponse = twilio.twiml.VoiceResponse;

// Your /voice endpoint
app.post('/voice', (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say('damn santosh you r selcted for meta how is yor feeling speka after beep sound.');
  twiml.record({
    maxLength: 30,
    action: '/handle-recording',
    transcribe: true,
    transcribeCallback: '/transcription',
    finishOnKey: '#'
  });
  twiml.say('No message received. Goodbye!');
  res.type('text/xml');
  res.send(twiml.toString());
});

// Handle after recording
app.post('/handle-recording', (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say('Thank you.  wonderful  santosh.');
  res.type('text/xml');
  res.send(twiml.toString());
});

// Handle transcription callback
app.post('/transcription', (req, res) => {
  console.log('Transcription:', req.body.TranscriptionText || '[No transcription received]');
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});

