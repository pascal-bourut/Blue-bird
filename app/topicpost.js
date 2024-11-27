import {
  StyleSheet,
  Image,
  Platform,
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation, useRouter, useRootNavigationState } from "expo-router";
import { useEffect, useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MessageModal from "../components/modals/MessageModal";

export default function TopicsPostScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const [showMsgModal, setShowMsgModal] = useState(false);

  const users = ["John Doe - B", "John Doe - C", "John Doe - D"];

  // Set header options inside useEffect to avoid setState during render
  useEffect(() => {
    navigation.setOptions({
      headerShown: false // Hide the header for this screen
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.innerView}>
        <View style={styles.headerView}>
          <TouchableWithoutFeedback onPress={() => router.back()}>
            <Text style={[styles.headerRight, { color: "gray", left: 10 }]}>
              Back
            </Text>
          </TouchableWithoutFeedback>

          <Text style={styles.headerText}>Topic</Text>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.headerRight}>Alert me</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.inputView}>
          <Fontisto name="search" size={16} color="black" />
          <TextInput
            style={styles.input}
            placeholderTextColor={"#262626"}
            placeholder="Search"
          />
        </View>
        <View style={styles.filtersContainer}>
          <View style={styles.filterView}>
            <Text style={styles.radiusText}>Filter A</Text>
          </View>
          <View style={styles.filterView}>
            <Text style={styles.radiusText}>Filter B</Text>
          </View>
          <View style={styles.filterView}>
            <Text style={styles.radiusText}>Filter C</Text>
          </View>
        </View>

        <View style={styles.itemView}>
          <View style={styles.itemDescView}>
            <Text style={styles.itemSecondaryText}>Category</Text>
            <Text style={styles.itemPrimaryText}>Name</Text>
            <Text style={[styles.itemSecondaryText, { fontSize: 13 }]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Text>
          </View>
          <View style={styles.itemBoxView}></View>
        </View>
        {users.map((val, ind) => {
          return (
            <TouchableOpacity
              key={ind}
              style={styles.topicItemView}
              onPress={() => {
                // router.push("/userdetail");
              }}
            >
              <View style={styles.userItemView}>
                <FontAwesome5 name="user" size={16} color="black" />
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.topicItemHeader}>
                  <Text
                    style={[
                      styles.itemPrimaryText,
                      { fontWeight: 500, fontSize: 15 }
                    ]}
                  >
                    {val}
                  </Text>
                  <Text style={[styles.itemSecondaryText, { fontWeight: 300 }]}>
                    10 m ago
                  </Text>
                </View>
                <Text
                  style={[
                    styles.itemSecondaryText,
                    { fontSize: 13, color: "#262626", fontWeight: 300 }
                  ]}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => setShowMsgModal(true)}
        style={styles.messageButton}
      >
        <SimpleLineIcons name="pencil" size={24} color="white" />
      </TouchableOpacity>
      <MessageModal
        visible={showMsgModal}
        onClose={() => setShowMsgModal(false)}
        onPress={() => setShowMsgModal(false)}
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
    paddingHorizontal: 12
  },
  inputView: {
    borderWidth: 1,
    borderColor: "#292929",
    padding: 12,
    marginTop: 8,
    borderRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    color: "#262626"
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative"
  },
  headerText: {
    fontSize: 15,
    fontWeight: 500
  },
  headerRight: {
    position: "absolute",
    right: 10,
    color: "#3e90fa"
  },
  input: {
    marginLeft: 5,
    flex: 1
  },
  radiusView: {
    padding: 12,
    flexDirection: "row",
    borderLeftWidth: 1,
    borderColor: "#292929"
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
  },
  radiusText: {
    color: "#262626"
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
    marginTop: 15,
    flexDirection: "row"
  },
  itemDescView: {
    width: "80%"
  },
  topicItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemBoxView: {
    backgroundColor: "white",
    height: "80%",
    width: "20%",
    alignSelf: "flex-end",
    borderWidth: 0.8,
    borderColor: "gray"
  },
  itemPrimaryText: {
    fontSize: 16,
    fontWeight: 600,
    marginVertical: 5
  },
  itemSecondaryText: {
    fontSize: 14,
    fontWeight: 400,
    color: "gray"
  },
  messageButton: {
    backgroundColor: "#262626",
    position: "absolute",
    bottom: 70,
    right: 30,
    padding: 20,
    borderRadius: 50
  },
  userItemView: {
    backgroundColor: "#c7c7c799",
    alignSelf: "flex-start",
    padding: 10,
    marginRight: 10,
    borderRadius: 40
  }
});
