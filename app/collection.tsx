import { ActivityIndicator, Platform, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

import { useStation } from "../context/StationContext";
import { getRevenueData } from "../services/dataResolver";

export default function Collection() {
  const { station } = useStation();

  // ✅ GUARD — must come first
  if (!station) {
    return <ActivityIndicator size="large" />;
  }

  // ✅ SAFE: station is guaranteed here
  const data = getRevenueData(station, "collection");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {station} / Revenue / Collection
      </Text>

      {data?.type === "excel" && (
  Platform.OS === "web" ? (
    <iframe
      src={data.url}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
  ) : (
    <WebView
      source={{ uri: data.url }}
      startInLoadingState
      renderLoading={() => <ActivityIndicator size="large" />}
    />
  )
)}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    padding: 12,
    fontSize: 18,
    fontWeight: "600",
  },
});
