import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStation } from "../context/StationContext";

export default function Station() {
  const router = useRouter();
  const { station } = useStation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{station} Station</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/revenue")}
      >
        <Text style={styles.cardText}>Revenue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/maintenance")}
      >
        <Text style={styles.cardText}>Maintenance</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 14,
    marginBottom: 20,
    elevation: 3,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});
