import React from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Switch
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const RegistrationModal = ({ codeSent, visible, onClose, onPress }) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 15, flex: 1 }}>
          <View style={{ paddingVertical: 40, alignItems: "flex-end" }}>
            <TouchableWithoutFeedback onPress={onClose}>
              <AntDesign name="closecircleo" size={35} color="black" />
            </TouchableWithoutFeedback>
          </View>
          <Text
            style={[
              styles.inputText,
              { marginTop: 40, color: codeSent ? "gray" : "#262626" }
            ]}
          >
            Enter your email
          </Text>

          <TextInput
            style={[styles.input, { color: codeSent ? "gray" : "#262626" }]}
            placeholderTextColor={codeSent ? "gray" : "#262626"}
            placeholder="Your email"
            editable={!codeSent}
          />
          {codeSent && (
            <>
              <Text style={[styles.inputText, { marginTop: 25 }]}>
                Enter your code
              </Text>

              <TextInput
                style={styles.input}
                placeholderTextColor={"#262626"}
                placeholder="Your code"
              />
            </>
          )}
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default RegistrationModal;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    margin: 5,
    paddingLeft: 20,
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: "#292929",
    backgroundColor: "#f7f7f7"
  },
  boxText: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 30
  },
  screenView: {
    height: 70,
    padding: 10,
    paddingTop: 17,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  main: {
    flex: 1,
    backgroundColor: "white"
  },
  boxContainer: {
    flex: 1,
    paddingHorizontal: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#292929",
    padding: 12,
    marginTop: 8,
    borderRadius: 5,
    backgroundColor: "#f7f7f7"
  },
  inputText: {
    fontSize: 16,
    fontWeight: 500,
    color: "#262626"
  },
  button: {
    backgroundColor: "#262626",
    alignSelf: "center",
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    color: "white"
  }
});
