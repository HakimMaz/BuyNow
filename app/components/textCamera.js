// import React, { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import { Camera } from "expo-camera";
// export default function textCamera() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const openCam = async () => {
//     setHasPermission(true);
//     const { status } = await Camera.requestPermissionsAsync();
//     setHasPermission(status === "granted");
//   };
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <Button
//           style={styles.button}
//           title="Open Cam"
//           color="#841584"
//           onPress={() => openCam()}
//         />
//       </View>
//       {hasPermission ? (
//         <Camera style={styles.camera} type={type}>
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => {
//                 setType(
//                   type === Camera.Constants.Type.back
//                     ? Camera.Constants.Type.front
//                     : Camera.Constants.Type.back
//                 );
//               }}
//             >
//               <Text style={styles.text}> Flip </Text>
//             </TouchableOpacity>
//           </View>
//         </Camera>
//       ) : (
//         <Text> No acces</Text>
//       )}
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 70,
//     width: 300,
//     height: 300,
//     backgroundColor: "yellow",
//     padding: 20,
//   },
//   button: {
//     width: "40%",
//     height: "50%",
//   },
// });
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
export default function textCamera() {
  const [uriImage, setUriImage] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("you need to enable your camera");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setUriImage(result.uri);
      }
    } catch (error) {
      console.log("user reject permission ");
    }
  };
  return (
    <Screen>
      <Button title="select an image" onPress={selectImage} />
      <Image source={{ uri: uriImage }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
