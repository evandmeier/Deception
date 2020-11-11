import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as _ from 'lodash';
admin.initializeApp();

const db = admin.firestore();
