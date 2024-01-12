import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8327nRgHwIaKbkUi7rUvX8ydb4yFhFfU",
  authDomain: "rn-auth-71f96.firebaseapp.com",
  projectId: "rn-auth-71f96",
  storageBucket: "rn-auth-71f96.appspot.com",
  messagingSenderId: "380616834168",
  appId: "1:380616834168:web:2bc3af3e6d6a2cad4d418d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
