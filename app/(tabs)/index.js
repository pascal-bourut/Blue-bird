import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export default function HomeScreen() {
  const [show, setShow] = useState(false);
  const [codeSent, setCodeSent] = useState(false);

  const onSubmit = () => {
    if (!codeSent) {
      setCodeSent(true);
    } else {
      setShow(false);
      setCodeSent(false);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.screenView}>
        <Text style={{ fontSize: 14 }}>Welcome</Text>
        <TouchableWithoutFeedback onPress={() => setShow(true)}>
          <Text style={{ color: "#3e90fa" }}>Sign-in/Register</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Profile</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Topic</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Post</Text>
        </View>
      </View>
      <Modal visible={show}>
        <View style={{ paddingHorizontal: 15, flex: 1 }}>
          <View style={{ paddingVertical: 40, alignItems: "flex-end" }}>
            <TouchableWithoutFeedback onPress={() => setShow(false)}>
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
          <TouchableOpacity onPress={onSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

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
