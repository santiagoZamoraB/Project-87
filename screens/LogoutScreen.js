import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { getAuth, signOut } from "firebase/auth";

const LogoutScreen = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Signed Out");
    })
    .catch((e) => {
      console.error("Sign Out Error", e);
    });

  return (
    <View style={styles.container}>
      <Text>Cerrar sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogoutScreen;
