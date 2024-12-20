/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link } from "expo-router";

import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignInPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignUpPress = () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome, We Really Miss You!
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            className="mt-4"
            onPress={onSignUpPress}
          />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-6"
          >
            {"Don't"} have an account?{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInPage;
