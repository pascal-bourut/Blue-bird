import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from "react-native";

export default function user() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingHorizontal: 15,
          flex: 1,
          alignItems: "center",
          paddingTop: 100
        }}
      >
        <Text style={styles.typeText}>Welcome</Text>

        <Text style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/user/profilesettings")}
        >
          <Text style={styles.buttonText}>Sign-in / Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
