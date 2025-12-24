import { StyleSheet, Text, View } from "react-native";
import { useStation } from "../context/StationContext";

export default function Circuit() {
  const { station } = useStation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{station} / Circuit</Text>
      <Text style={styles.text}>
        Sample circuit diagram page.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
  },
});
