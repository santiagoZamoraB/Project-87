import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
//todas las librerias que necesites para tu componente
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";

const CreateStoryScreen = (props) => {
  //cargamos la fuente aqui
  const [loaded] = useFonts({
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
  });
  const [previewImage, setPreviewImage] = useState("image_1");
  const [dropDownHeight, setDropDownHeight] = useState(40);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [moral, setMoral] = useState("");
  const [story, setStory] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Image 1", value: "image_1" },
    { label: "Image 2", value: "image_2" },
    { label: "Image 3", value: "image_3" },
    { label: "Image 4", value: "image_4" },
    { label: "Image 5", value: "image_5" },
  ]);
  if (!loaded) {
    return <AppLoading />;
  } else {
    let preview_images = {
      image_1: require("../assets/story_image_1.png"),
      image_2: require("../assets/story_image_2.png"),
      image_3: require("../assets/story_image_3.png"),
      image_4: require("../assets/story_image_4.png"),
      image_5: require("../assets/story_image_5.png"),
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Nueva Historia</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={preview_images[previewImage]}
              style={styles.previewImage}
            ></Image>
            <View style={{ height: RFValue(dropDownHeight) }}>
              <DropDownPicker
                items={items}
                setItems={setItems}
                open={open}
                setOpen={setOpen}
                setValue={setPreviewImage}
                listMode={"SCROLLVIEW"}
                defaultValue={previewImage}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => {
                  setDropDownHeight(170);
                }}
                onClose={() => {
                  setDropDownHeight(40);
                }}
                // style={{ backgroundColor: "transparent" }}
                itemStyle={{
                  justifyContent: "flex-start",
                }}
                dropDownStyle={{ backgroundColor: "#2f345d" }}
                labelStyle={{
                  color: "white",
                  fontFamily: "Bubblegum-Sans",
                }}
                arrowStyle={{
                  color: "white",
                  fontFamily: "Bubblegum-Sans",
                }}
                onValueChange={(item) => setPreviewImage(item.value)}
              />
            </View>
            <TextInput
              style={styles.inputFont}
              onChangeText={(title) => {
                setTitle(title);
              }}
              placeholder="Titulo"
              placeholderTextColor="white"
            />
            <TextInput
              style={[
                styles.inputFont,
                styles.inputFontExtra,
                styles.inputTextBig,
              ]}
              onChangeText={(description) => setDescription(description)}
              placeholder={"Descripción"}
              multiline={true}
              numberOfLines={4}
              placeholderTextColor="white"
            />
            <TextInput
              style={[
                styles.inputFont,
                styles.inputFontExtra,
                styles.inputTextBig,
              ]}
              onChangeText={(story) => {
                setStory(story);
              }}
              placeholder={"Historia"}
              multiline={true}
              numberOfLines={20}
              placeholderTextColor="white"
            />
            <TextInput
              style={[
                styles.inputFont,
                styles.inputFontExtra,
                styles.inputTextBig,
              ]}
              onChangeText={(moral) => {
                setMoral(moral);
              }}
              placeholder={"Moraleja de la historia"}
              multiline={true}
              numberOfLines={4}
              placeholderTextColor="white"
            />
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  //Aquí van todos los estilos para tu componente
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  // Estos estilos se agregaron despues
  fieldsContainer: {
    flex: 0.85,
    height: 5,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans",
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
});
//No olvides exportar tu componente
export default CreateStoryScreen;
