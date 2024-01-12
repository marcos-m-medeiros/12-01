import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../firebaseconfig";
import { View } from "react-native-web";

export default function LoginCliente() {
  function handleGoogleAuthSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));
  }

  return (
    <View>
      <button onClick={handleGoogleAuthSignIn}>
        RODAR AUTENTICAÇÃO GOOGLE
      </button>
    </View>
  );
}
