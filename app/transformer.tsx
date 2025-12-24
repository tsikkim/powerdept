import { StyleSheet, Text, View } from "react-native";
import { useStation } from "../context/StationContext";

export default function Transformer() {
  const { station } = useStation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{station} / Transformer</Text>
      <Text style={styles.text}>
        Sample transformer image and document page.
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
