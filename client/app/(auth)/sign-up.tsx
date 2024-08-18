/* eslint-disable prettier/prettier */
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpPage = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/welcome");
        }}
        className="flex h-full text-center items-center justify-center"
      >
        <Text className="font-bold text-3xl bg-slate-900 text-white p-2 rounded-lg">
          Back to Welcome
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpPage;
