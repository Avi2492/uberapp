import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-cyan-200">
      <Text className="text-3xl text-center font-semibold m-4">
        Hi! There This is our React Native App Made with ❤️ by spheri
        <Text className="text-orange-500">soft</Text>
      </Text>
      <StatusBar />
    </SafeAreaView>
  );
}
