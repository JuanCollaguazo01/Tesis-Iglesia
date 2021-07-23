import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/storage';
// import 'firebase/functions';

console.log( 'ENV', process.env.NODE_ENV );

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

app.initializeApp( config );

// export default app;
const auth = app.auth();
const db = app.database();
// export const storage = app.storage();
// export const functions = app.functions();


const FIREBASE = {
    db,
    auth
}

export default FIREBASE;