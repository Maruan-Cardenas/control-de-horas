import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCnnMhMP8ETo9sCEDRu5Hut3bMqnz4twVk',
  authDomain: 'talleres-puente-sur.firebaseapp.com',
  projectId: 'talleres-puente-sur',
  storageBucket: 'talleres-puente-sur.appspot.com',
  messagingSenderId: '669153190611',
  appId: '1:669153190611:web:cc197cace87fe8f8aa6a26'
})
const db = getFirestore(firebaseApp)

export default db
