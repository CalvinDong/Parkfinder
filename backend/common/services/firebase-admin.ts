//import { initializeApp } from 'firebase-admin/app'
import admin from 'firebase-admin'
import { getStorage } from 'firebase-admin/storage'

const serviceAccount = require('../../parkfinder-cd1be-firebase-adminsdk-k79gh-a7f6388c6b.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://parkfinder-cd1be.appspot.com'
})

export const db = admin.firestore();

export const bucket = getStorage().bucket();

export default admin;
