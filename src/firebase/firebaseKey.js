import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCNVy_-0t_kroQvSv8csfMfBunc3OSmzxo',
  authDomain: 'games-offerts.firebaseapp.com',
  projectId: 'games-offerts',
  storageBucket: 'games-offerts.appspot.com',
  messagingSenderId: '44604683049',
  appId: '1:44604683049:web:ce5a1fa3e27fc9bf723d38',
  measurementId: 'G-JBTF28MMGF'
})

const db = getFirestore(firebaseApp)

export default db
