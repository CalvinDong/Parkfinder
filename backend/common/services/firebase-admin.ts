//import { initializeApp } from 'firebase-admin/app'
import admin from 'firebase-admin'
import { getStorage } from 'firebase-admin/storage'

import config from './config'

const serviceAccount = require('../../../parkfinder-cd1be-firebase-adminsdk-k79gh-a7f6388c6b.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: config.BUCKET
})

export const db = admin.firestore();

//export const bucket = getStorage().bucket();
export const bucket = admin.storage().bucket()

export default admin;
