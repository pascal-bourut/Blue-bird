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
import { useRouter } from "expo-router";

export default function TopicsScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.innerView}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Topics</Text>
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
        <View style={[styles.inputView, { padding: 0 }]}>
          <FontAwesome6
            style={{ padding: 12, paddingRight: 0 }}
            name="location-dot"
            size={18}
            color="black"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"#262626"}
            placeholder="Location"
          />
          <View style={styles.radiusView}>
            <Text style={styles.radiusText}>Radius</Text>
            <EvilIcons name="chevron-down" size={24} color="black" />
          </View>
        </View>
        {[1, 2, 3].map((val) => {
          return (
            <TouchableOpacity
              key={val}
              style={styles.itemView}
              onPress={() => {
                router.push("/topicpost");
              }}
            >
              <View style={styles.itemDescView}>
                <Text style={styles.itemSecondaryText}>Category</Text>
                <Text style={styles.itemPrimaryText}>Name</Text>
                <Text style={[styles.itemSecondaryText, { fontSize: 13 }]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Text>
              </View>
              <View style={styles.itemBoxView}></View>
            </TouchableOpacity>
          );
        })}
      </View>
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
  itemDescView: {
    width: "80%"
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
  }
});
