import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUserRole } from "../context/UserRoleContext";

export default function Index() {
  const router = useRouter();
  const { setRole } = useUserRole();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")} // change if path differs
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={styles.heading}>Use as?</Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setRole("public");
          router.push("/select-station");
        }}
      >
        <Text style={styles.buttonText}>General Public</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => {
          setRole("staff");
          router.push("/staff-login");
        }}
      >
        <Text style={styles.buttonText}>Staff</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 25,
    color: "#333",
  },
  button: {
    width: "80%",
    paddingVertical: 14,
    backgroundColor: "#1e40af",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: "#0f766e",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
