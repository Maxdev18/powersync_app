import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function EditDeviceScreen() {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("Carl");
  const [type, setType] = useState("Flashlight");
  const [serialNumber] = useState("9251693562395691623");
  const [cycles] = useState("12");
  const [condition] = useState("Great");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    // Handle save action
    console.log("Device saved");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Go Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => console.log("Back")}
      >
        <Text style={styles.backText}>Go back to your devices</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Edit device</Text>

      {/* Form Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Group"
        value={group}
        onChangeText={setGroup}
      />

      <TextInput
        style={styles.input}
        placeholder="Type"
        value={type}
        onChangeText={setType}
      />

      <TextInput
        style={styles.input}
        placeholder="Serial Number"
        value={serialNumber}
        editable={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Cycles"
        value={cycles}
        editable={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Condition"
        value={condition}
        editable={false}
      />

      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>GPS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#edfaff",
    flexGrow: 1,
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 9,
    left: 7,
  },
  backText: {
    fontSize: 16,
    color: "#313131",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    alignSelf: "flex-start",
    paddingLeft: 11,
  },
  input: {
    width: 337,
    height: 42,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 14,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  notesInput: {
    height: 184,
    textAlignVertical: "top",
  },
  saveButton: {
    width: 337,
    height: 36,
    backgroundColor: "#12b8ff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 59,
    backgroundColor: "#313131",
    position: "absolute",
    bottom: 0,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 10,
  },
});
