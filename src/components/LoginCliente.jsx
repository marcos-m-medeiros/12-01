import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../firebaseconfig";
import { View, Image, StyleSheet } from "react-native-web";
import { Button } from "react-native-paper";
import { ImageList } from "../../assets/imageList";

export default function LoginCliente() {
  function handleGoogleAuthSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));
  }

  return (
    <View>
      <Image style={styles.loginImage} source={ImageList.loginImage} />
      <Button
        style={styles.loginButton}
        label=""
        onClick={handleGoogleAuthSignIn}
      >
        Logar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    height: "12rem",
    width: "100%",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "",
  },
});
