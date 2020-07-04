import React, { useEffect } from "react";
import { Text } from "react-native";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function App() {
  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.LOCATION
    );
    result.granted;
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("you need to enable permission to acces the library");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <Screen>
      <Text>Mae</Text>
    </Screen>
  );
}
