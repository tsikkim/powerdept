import { StyleSheet, Text, View } from "react-native";

export default function StaffDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Staff Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
});
