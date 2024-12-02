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

const ProfileModal = ({ visible, onClose, onPress }) => {

  return (
    <Modal animationType="slide" visible={visible}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 15,
            flex: 1,
            alignItems: "center"
          }}
        >
          <View
            style={{
              paddingVertical: 20,
              alignItems: "flex-end",
              width: "100%"
            }}
          >
            <TouchableWithoutFeedback onPress={onClose}>
              <AntDesign name="closecircleo" size={35} color="black" />
            </TouchableWithoutFeedback>
          </View>

          <EvilIcons name="user" size={300} color="black" />
          <Text style={styles.typeText}>John Smith</Text>

          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
          </Text>

          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Pair</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress} style={styles.button2}>
            <Text style={styles.buttonText}>Report</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#292929",
    padding: 12,
    marginTop: 8,
    borderRadius: 5,
    backgroundColor: "#f7f7f7"
  },
  descText: {
    fontSize: 13,
    fontWeight: 350,
    color: "#262626",
    marginTop: 20,
    paddingHorizontal: 5,
    textAlign: "center"
  },
  typeText: {
    fontSize: 24,
    fontWeight: 380,
    color: "#262626",
    marginTop: 10
  },
  button: {
    alignSelf: "center",
    borderWidth: 1,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 4
  },
  button2: {
    alignSelf: "center",
    borderWidth: 1,
    marginTop: 50,
    paddingVertical: 6,
    paddingHorizontal: 30,
    borderRadius: 4
  },
  switchView: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    color: "#262626"
  },
  filtersContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  filterView: {
    padding: 12,
    borderColor: "#292929",
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
