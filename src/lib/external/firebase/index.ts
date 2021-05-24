import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
}

export const firebaseApp = {
  init(): firebase.app.App {
    return firebase.initializeApp(config)
  },
  onAuthStateChanged(
    nextOrObserver: firebase.Observer<any> | ((a: firebase.User | null) => any),
    error?: (a: firebase.auth.Error) => any,
    completed?: firebase.Unsubscribe,
  ): firebase.Unsubscribe {
    return firebase.auth().onAuthStateChanged(nextOrObserver, error, completed)
  },
  signInWithCustomToken(token: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithCustomToken(token)
  },
  signOut(): Promise<void> {
    return firebase.auth().signOut()
  },
}
