import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const DeviceLocationScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Find your devices</Text>

        <View style={styles.infoContainer}>
          <View style={styles.deviceInfo}>
            <Text style={styles.infoText}>Device Info</Text>
            <Text style={styles.deviceText}>Name: Garage flashlight</Text>
            <Text style={styles.deviceText}>Group: Carl's devices</Text>
          </View>

          <View style={styles.batteryInfo}>
            <Text style={styles.infoText}>Battery percentage ⚡</Text>
            <Text style={styles.batteryText}>35%</Text>
          </View>
        </View>

        {/* Placeholder Box */}
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>Placeholder</Text>
        </View>

        {/* Map View */}
      </ScrollView>

      {/* Bottom Navigation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1325",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    padding: 10,
    backgroundColor: "#1E2A47",
    borderRadius: 8,
    marginBottom: 20,
  },
  deviceInfo: {
    flex: 1,
  },
  infoText: {
    color: "#B0B8C4",
    fontWeight: "bold",
    fontSize: 14,
  },
  deviceText: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 4,
  },
  batteryInfo: {
    alignItems: "center",
  },
  batteryText: {
    color: "#00FF00",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
  },
  placeholderBox: {
    width: "90%",
    height: 150,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  placeholderText: {
    color: "#888",
    fontSize: 18,
    fontWeight: "bold",
  },
  map: {
    width: "90%",
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#1E2A47",
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    color: "#FFF",
    fontSize: 12,
  },
});

export default DeviceLocationScreen;
