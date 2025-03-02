import React from "react";
import { View } from "react-native";
import { TodoProvider } from "@/context";
import { HomeScreen } from "@/screen";

export default function Index() {
  return (
    <TodoProvider>
      <View style={{ flex: 1 }}>
        <HomeScreen />
      </View>
    </TodoProvider>
  );
}
