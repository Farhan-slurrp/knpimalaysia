import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../configs/firebaseApp.config";

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export { firebase };
