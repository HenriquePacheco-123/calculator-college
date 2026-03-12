import { View, Text } from "react-native";
import "./global.css";
import Button from "./src/components/button";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-[#303644]">
      <View className="flex-row gap-2">
        <Button body="C" type="grayButton" />
        <Button body="±" type="grayButton" />
        <Button body="%" type="grayButton" />
        <Button body="÷" type="blueButton" />
      </View>
    </View>
  );
}
