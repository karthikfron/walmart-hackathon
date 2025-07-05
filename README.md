# Twilio Voice Call Demo

Quick steps to set up and run this project:

---

## 1. Clone the repo
```sh
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

## 2. Install dependencies
```sh
npm install
```

## 3. Add your configuration
- Copy `.env.example` to `.env`
- Fill in your Twilio details and your verified phone number

## 4. Start the backend
```sh
node index.js
# or, for auto-restart:
npx nodemon index.js
```

## 5. Expose your server for Twilio webhooks
```sh
ngrok http 3000
```
- Put your ngrok HTTPS URL into `.env`

## 6. Make a test call
```sh
node make_call.js
```

---

**Note:**  
- Twilio trial only calls your verified number.
- You can change the voice in code for more human-like speech (see Twilio docs).

---
