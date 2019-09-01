import {createStore,combineReducers, compose} from 'redux';
import {reactReduxFirebase,firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxS0Bzpc9_P3VqinVRQoj80Q5XAhwfQtM",
    authDomain: "app-fundation.firebaseapp.com",
    databaseURL: "https://app-fundation.firebaseio.com",
    projectId: "app-fundation",
    storageBucket: "app-fundation.appspot.com",
    messagingSenderId: "834230287256",
    appId: "1:834230287256:web:7734759ad39f5e63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //configuracion de react redux
  const rrfConfig={
      userProfile:'users',
      useFirestoreForProfile:true
  }

  //crear el enhacer con compose de reduc y firestore
  const createStoreWithFirebase=compose(
    reactReduxFirebase(firebase,rrfConfig),
    reduxFirestore(firebase)
  )(createStore);
  //REDUCERS
  const rootReducer=combineReducers({
      firebase:firebaseReducer,
      firestore:firestoreReducer
  })
  //state inicial 
  const initialState={}
  //create store
  const store =createStoreWithFirebase(rootReducer,initialState,compose(
      reactReduxFirebase(firebase),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

  export default store;


