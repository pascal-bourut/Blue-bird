import { Stack, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function explore() {
  return (
    <Stack>
      {/* Main Explore Screen */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Topic Post Screen */}
      <Stack.Screen name="editprofile" options={{ headerShown: false }} />
      <Stack.Screen name="profilesettings" options={{ headerShown: false }} />
    </Stack>
  );
}
