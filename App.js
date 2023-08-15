import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import { Alert } from "react-native";

export default function App() {
  const [loggedUser, setLoggedUser] = useState();
  const [newUser, setNewUser] = useState();
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onLogin = (data) => {
    setLoggedUser(data);
    console.log(loggedUser);
    Alert.prompt(`Користувач ${loggedUser.name} успішно залогінився`);
  };

  const onRegister = (data) => {
    setNewUser(data);
    alert(`User ${newUser.name} successfully registered`);
  };
  console.log(newUser);

  return (
    <>
      <StatusBar />
      <RegistrationScreen register={onRegister} />
      {/* <LoginScreen login={onLogin} /> */}
      {/* <PostsScreen /> */}
    </>
  );
}
