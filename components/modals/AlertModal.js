import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";

const { height, width } = Dimensions.get("window");

const AlertModal = ({ visible, onClose, onPress }) => {
  return (
    <View
      style={[styles.modalBackground, { display: visible ? "flex" : "none" }]}
    >
      <View style={styles.modalContainer}>
        <View style={{ padding: 20, paddingBottom: 30 }}>
          <Text style={styles.typeText}>Confirm?</Text>

          <Text style={styles.descText}>Description of the alert</Text>
        </View>
        <View style={{ borderTopWidth: 1, flexDirection: "row" }}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onClose}
            style={[styles.button, { borderLeftWidth: 1 }]}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlertModal;

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
    fontSize: 18,
    fontWeight: 40,
    color: "#262626",
    marginTop: 10
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF99",
    position: "absolute",
    width: width,
    height: height
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },

  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden"
  },
  typeText: {
    fontSize: 22,
    fontWeight: 600,
    color: "#262626"
  },

  switchView: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  buttonText: {
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
