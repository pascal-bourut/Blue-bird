import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import EmojiPicker from "rn-emoji-keyboard";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ProfileModal from "../../../components/modals/ProfileModal";
import AlertModal from "../../../components/modals/AlertModal";

export default function ChatScreen() {
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

        <TouchableWithoutFeedback onPress={() => setShowProfileModal(true)}>
          <Text style={styles.headerText}>John Smith</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setShowAlert(true)}>
          <Text style={styles.headerRight}>Alert me</Text>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView style={styles.innerView} showsVerticalScrollIndicator={false}>
        <View style={{ height: 15 }} />

        {messages.map((val, ind) => {
          return (
            <View
              key={ind}
              style={[
                styles.topicItemView,
                {
                  justifyContent:
                    val?.messageType == "sent" ? "flex-end" : "flex-start"
                }
              ]}
            >
              {val?.messageType == "sent" && (
                <FontAwesome5 name="user-circle" size={28} color="#292929" />
              )}
              <View
                style={
                  val?.messageType == "sent"
                    ? styles.messageSent
                    : styles?.messageReceived
                }
              >
                <Text
                  style={[
                    styles.itemPrimaryText,
                    {
                      color:
                        val?.messageType == "sent" ? "#292929" : "#29292970"
                    }
                  ]}
                >
                  {val?.message}
                </Text>
                <View
                  style={[
                    val?.messageType === "sent"
                      ? styles.triangleRight
                      : styles.triangleLeft
                  ]}
                />
              </View>

              {val?.messageType == "received" && (
                <FontAwesome5 name="user-circle" size={28} color="#29292970" />
              )}
            </View>
          );
        })}
        <View style={{ height: 20 }} />
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.messageSenderView}>
          <Entypo
            onPress={() => setShowEmoji(!showEmoji)}
            name="emoji-happy"
            size={28}
            color="black"
          />
          <TextInput
            style={styles.messageInput}
            value={text}
            placeholder="Type your message"
            onChangeText={onMessageType}
          />
          <FontAwesome
            onPress={onSendMessage}
            name="send-o"
            size={24}
            color="black"
          />
        </View>
      </KeyboardAvoidingView>
      <EmojiPicker
        onEmojiSelected={onPickEmoji}
        open={showEmoji}
        onClose={() => setShowEmoji(false)}
      />
      <ProfileModal
        visible={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        onPress={() => setShowProfileModal(false)}
      />
      <AlertModal
        visible={showAlert}
        onClose={() => setShowAlert(false)}
        onPress={() => setShowAlert(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: "white" },
  titleContainer: {
    flexDirection: "row",
    gap: 8
  },
  innerView: {
    paddingHorizontal: 12,
    flex: 1,
    overflow: "hidden"
  },

  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 12
  },
  headerText: {
    fontSize: 15,
    fontWeight: 500
  },
  headerRight: {
    color: "#3e90fa"
  },
  input: {
    marginLeft: 5,
    flex: 1
  },
  messageReceived: {
    borderWidth: 2,
    width: "80%",
    padding: 8,
    marginRight: 16,
    borderColor: "#29292970",
    paddingBottom: 18,
    borderRadius: 3
  },
  messageSent: {
    borderWidth: 2,
    width: "80%",
    padding: 8,
    paddingBottom: 18,
    marginLeft: 16,
    borderColor: "#292929",
    borderRadius: 3
  },
  itemView: {
    padding: 12,
    borderWidth: 1,
    backgroundColor: "#f7f7f7",
    marginTop: 15,
    borderRadius: 5,
    flexDirection: "row"
  },
  topicItemView: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  itemPrimaryText: {
    fontWeight: 500,
    fontSize: 15,
    marginVertical: 5
  },
  triangleRight: {
    width: 20,
    height: 15,
    backgroundColor: "white",
    transform: [{ skewX: "60deg" }, { rotate: "30deg" }],
    position: "absolute",
    right: 15,
    bottom: -8,
    borderWidth: 3,
    borderColor: "#292929",
    zIndex: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0
  },
  triangleLeft: {
    width: 20,
    height: 15,
    backgroundColor: "white",
    transform: [{ skewX: "-60deg" }, { rotate: "-30deg" }],
    position: "absolute",
    left: 15,
    bottom: -8,
    borderWidth: 3,
    borderColor: "#29292970",
    zIndex: 0,
    borderTopWidth: 0,
    borderRightWidth: 0
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 8,
    borderRadius: 3,
    borderColor: "#29292999"
  },
  messageSenderView: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "gray",
    borderBottomWidth: 1,
    borderColor: "#29292960",
    alignItems: "center"
  }
});
