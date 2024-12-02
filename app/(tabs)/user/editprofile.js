import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function editprofile() {
  const router = useRouter();
  const navigation = useNavigation();
  const [showEmoji, setShowEmoji] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { messageType: "received", message: "Hi" },
    { messageType: "sent", message: "Hi" },
    { messageType: "sent", message: "How are you doing?" },
    { messageType: "received", message: "I'm good, what about you?" },
    { messageType: "sent", message: "I'm good too!" }
  ]);

  const onMessageType = (e) => {
    setText(e);
  };
  const onPickEmoji = (data) => {
    setText(text + data?.emoji);
  };

  const onSendMessage = () => {
    const arr = [...messages];
    arr.push({ messageType: "sent", message: text });
    setMessages(arr);
    setText("");
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headerView}>
        <TouchableWithoutFeedback onPress={() => router.back()}>
          <Text style={[styles.headerRight, { color: "gray" }]}>Back</Text>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 15,
          flex: 1
        }}
        contentContainerStyle={{ paddingBottom: 30, alignItems: "center" }}
      >
        <View style={{}}>
          <EvilIcons name="user" size={300} color="black" />
          <MaterialCommunityIcons
            style={{ position: "absolute", bottom: -10, right: 20 }}
            name="account-edit-outline"
            size={60}
            color="black"
          />
        </View>
        <View style={styles.profileItemContainer}>
          <Text style={[styles.inputText, { marginTop: 20 }]}>Name</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={"#262626"}
            placeholder="Your name"
          />
          <Text style={[styles.inputText, { marginTop: 10 }]}>Level</Text>

          <View style={styles.filtersContainer}>
            <View style={[styles.filterView, { backgroundColor: "#262626" }]}>
              <Text style={[styles.radiusText, { color: "white" }]}>
                Novice
              </Text>
            </View>
            <View style={styles.filterView}>
              <Text style={styles.radiusText}>Amateur</Text>
            </View>
            <View style={styles.filterView}>
              <Text style={styles.radiusText}>Expert</Text>
            </View>
          </View>
          <Text style={[styles.inputText, { marginTop: 10 }]}>Personality</Text>

          <View style={styles.filtersContainer}>
            <View style={styles.filterView}>
              <Text style={styles.radiusText}>Introvert</Text>
            </View>
            <View style={[styles.filterView, { backgroundColor: "#262626" }]}>
              <Text style={[styles.radiusText, { color: "white" }]}>
                Ambivert
              </Text>
            </View>
            <View style={styles.filterView}>
              <Text style={styles.radiusText}>Extrovert</Text>
            </View>
          </View>
          <Text style={[styles.inputText, { marginTop: 10 }]}>Ref profile</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={"#262626"}
            placeholder="Ref profile URL"
          />
          <Text style={[styles.inputText, { marginTop: 10 }]}>Bio</Text>

          <TextInput
            style={[styles.input, { height: 130 }]}
            placeholderTextColor={"#262626"}
            placeholder="Type bio"
            multiline
          />
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.button2}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white"
  },
  infoText: {
    fontSize: 16,
    fontWeight: 450,
    color: "#262626"
  },
  infoText2: {
    fontSize: 15,
    fontWeight: 400,
    color: "gray",
    marginTop: 5
  },
  typeText: {
    fontSize: 24,
    fontWeight: 380,
    color: "#262626"
  },

  button2: {
    alignSelf: "center",
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 30,
    borderRadius: 4,
    marginTop: 30
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    color: "#262626"
  },
  profileItem: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: "#dedede",
    marginTop: 15
  },
  chevronIcon: {
    position: "absolute",
    right: 5,
    top: 2
  },
  profileItemContainer: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 10
  },

  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 12
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
