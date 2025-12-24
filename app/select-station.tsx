import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStation } from "../context/StationContext";
import { useUserRole } from "../context/UserRoleContext";

export default function SelectStation() {
  const router = useRouter();
  const { setStation } = useStation();
  const { role } = useUserRole();

  const onSelect = (station: "Tadong" | "Deorali") => {
    setStation(station);
    router.push("/station"); // same page
  };

  return (
     <View style={styles.container}>

      <Text style={styles.title}>Select Your Station?</Text>


      <TouchableOpacity 
      style={styles.card}
        onPress={() => onSelect("Tadong")}>
        <Text style={styles.cardText}>Tadong</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.card}
        onPress={() => onSelect("Deorali")}>
         <Text style={styles.cardText}>Deorali</Text>
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
