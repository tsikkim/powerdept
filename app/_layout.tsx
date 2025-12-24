import { Stack } from "expo-router";
import { StationProvider } from "../context/StationContext";

export default function Layout() {
  return (
    <StationProvider>
      <Stack screenOptions={{ headerShown: true }} />
    </StationProvider>
  );
}
