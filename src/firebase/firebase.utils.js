import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCd_x6b_LzF2BSl4aYpMtEvg9A87-sqFIM",

    authDomain: "crown-clothing-81198.firebaseapp.com",

    projectId: "crown-clothing-81198",

    storageBucket: "crown-clothing-81198.appspot.com",

    messagingSenderId: "123768141763",

    appId: "1:123768141763:web:ec5976495fed61a38eaf76",

    measurementId: "G-4QGDT36WKF"

};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData

                });
        } catch (error) {
            console.log("error creating user.", error.message)

        }
    }


    return userRef
}
export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();

        batch.set(newDocRef, obj);
    })

    return await batch.commit();
}
export const convertCollectionsSnapShotToMap = (collections) => {
    const transformedCollection = collections.docs.map(
        doc => {
            const {title, items} = doc.data();
            return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
            }
        }
    );
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signinWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;