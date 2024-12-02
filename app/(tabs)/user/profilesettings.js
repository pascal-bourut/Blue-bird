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

export default function profilesettings() {
  const router = useRouter();
  const navigation = useNavigation();
  const [showMsgModal, setShowMsgModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingHorizontal: 15,
          flex: 1,
          alignItems: "center"
        }}
      >
        <EvilIcons name="user" size={300} color="black" />
        <Text style={styles.typeText}>John Smith</Text>
        <View style={styles.profileItemContainer}>
          <TouchableOpacity
            style={styles.profileItem}
            onPress={() => router.push("/user/editprofile")}
          >
            <View style={styles.chevronIcon}>
              <FontAwesome6 name="chevron-right" size={18} color="black" />
            </View>
            <Text style={styles.infoText}>Edit public profile</Text>
            <Text style={styles.infoText2}>name • bio • picture</Text>
          </TouchableOpacity>
          <View style={styles.profileItem}>
            <View style={styles.chevronIcon}>
              <FontAwesome6 name="chevron-right" size={18} color="black" />
            </View>
            <Text style={styles.infoText}>Edit private info</Text>
            <Text style={styles.infoText2}>Contact infos for pairs</Text>
          </View>
          <View style={styles.profileItem}>
            <View style={styles.chevronIcon}>
              <FontAwesome6 name="chevron-right" size={18} color="black" />
            </View>
            <Text style={styles.infoText}>Pairs</Text>
            <Text style={styles.infoText2}>4</Text>
          </View>
          <View style={styles.profileItem}>
            <View style={styles.chevronIcon}>
              <FontAwesome6 name="chevron-right" size={18} color="black" />
            </View>
            <Text style={styles.infoText}>Alerts</Text>
            <Text style={styles.infoText2}>3</Text>
          </View>
          <View style={styles.profileItem}>
            <View style={styles.chevronIcon}>
              <FontAwesome6 name="chevron-right" size={18} color="black" />
            </View>
            <Text style={styles.infoText}>Change email</Text>
            <Text style={styles.infoText2}></Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button2} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20
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
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 10
  }
});
