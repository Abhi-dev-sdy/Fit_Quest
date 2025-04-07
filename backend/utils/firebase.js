// utils/firebase.js
const admin = require("firebase-admin");

const serviceAccount = require("../config/fitquest-firebase-adminsdk.json") 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
