import { View, Text } from "react-native";
import "./global.css";
import Button from "./src/components/button";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
  });
  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <View className="flex-1 justify-end items-center bg-[#303644]">
      <View className="mb-4 px-6 self-stretch">
        <Text className="text-[#979AA2] text-2xl font-light text-right">
          5.000 + 12.000
        </Text>
      </View>
      <View className="mb-6 px-6 self-stretch">
        <Text className="text-white font-light text-7xl text-right">
          17.000
        </Text>
      </View>
      <View className="flex-row gap-2">
        <Button body="C" />
        <Button body="±" />
        <Button body="%" />
        <Button body="÷" type="blueButton" />
      </View>
      <View className="flex-row gap-2 mt-2">
        <Button body="7" type="grayButton" />
        <Button body="8" type="grayButton" />
        <Button body="9" type="grayButton" />
        <Button body="×" type="blueButton" />
      </View>
      <View className="flex-row gap-2 mt-2">
        <Button body="4" type="grayButton" />
        <Button body="5" type="grayButton" />
        <Button body="6" type="grayButton" />
        <Button body="−" type="blueButton" />
      </View>
      <View className="flex-row gap-2 mt-2">
        <Button body="1" type="grayButton" />
        <Button body="2" type="grayButton" />
        <Button body="3" type="grayButton" />
        <Button body="+" type="blueButton" />
      </View>
      <View className="flex-row gap-2 mt-2 mb-10">
        <Button body="0" type="grayButton" width="w-[170px]" />
        <Button body="." type="grayButton" />
        <Button body="=" type="blueButton" />
      </View>
    </View>
  );
}
