import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREABSE_KEY,
    authDomain: "outreach-mvp.firebaseapp.com",
    projectId: "outreach-mvp",
    storageBucket: "outreach-mvp.appspot.com",
    messagingSenderId: "729074199320",
    appId: "1:729074199320:web:209f6640ca8a9c47c24c6d",
    measurementId: "G-WM43G1Q90M"
};
export default function initFirebase(){
    if(!firebase.apps.length){
        return firebase.initializeApp(firebaseConfig);
    }else{
        return firebase.app();
    }
};