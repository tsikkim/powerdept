import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStation } from "../context/StationContext";

export default function Revenue() {
  const router = useRouter();
  const { station } = useStation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{station} / Revenue</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/collection")}
      >
        <Text style={styles.cardText}>Collection</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/reports")}
      >
        <Text style={styles.cardText}>Reports</Text>
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
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 14,
    marginBottom: 20,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
