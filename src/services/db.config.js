import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDxj3i4wwu8B_yLiIRg8FkGgfi0hlvJFPk',
  authDomain: 'control-de-horas-8f725.firebaseapp.com',
  projectId: 'control-de-horas-8f725',
  storageBucket: 'control-de-horas-8f725.appspot.com',
  messagingSenderId: '877631801030',
  appId: '1:877631801030:web:da4e9017fc1829fd5eb9c7'
})
const db = getFirestore(firebaseApp)

export default db
