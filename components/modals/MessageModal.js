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

const MessageModal = ({ visible, onClose, onPress }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Modal visible={visible}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 15, flex: 1 }}>
          <View style={{ paddingVertical: 20, alignItems: "flex-end" }}>
            <TouchableWithoutFeedback onPress={onClose}>
              <AntDesign name="closecircleo" size={35} color="black" />
            </TouchableWithoutFeedback>
          </View>
          <Text style={[styles.inputText, { marginTop: 40 }]}>Message</Text>

          <TextInput
            style={[styles.input, { color: "#262626", height: 130 }]}
            placeholderTextColor={"#262626"}
            placeholder="Type your message"
            multiline
          />

          <Text style={[styles.typeText, { marginTop: 20 }]}>Type</Text>

          <View style={styles.filtersContainer}>
            <View style={styles.filterView}>
              <Text style={styles.radiusText}>Option A</Text>
            </View>
            <View style={styles.filterView}>
              <Text style={styles.radiusText}>Option B</Text>
            </View>
            <View style={styles.filterView}>
              <Text style={styles.radiusText}>Option C</Text>
            </View>
          </View>
          <View style={styles.switchView}>
            <Switch value={toggle} onChange={() => setToggle(!toggle)} />
            <Text style={[styles.radiusText, { marginLeft: 10 }]}>
              I want to be notified?
            </Text>
          </View>

          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default MessageModal;

const styles = StyleSheet.create({
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
  typeText: {
    fontSize: 15,
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
  switchView: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    color: "white"
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
