import { useState } from "react";
import { View, Text } from "react-native";
import "./global.css";
import Button from "./src/components/button";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { ActivityIndicator } from "react-native";
import {
  initialState,
  handleNumber,
  handleDecimal,
  handleOperator,
  handleEquals,
  handleToggleSign,
  handlePercentage,
  handleClear,
} from "./src/utils/calculator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
  });
  const [calc, setCalc] = useState(initialState);

  if (!fontsLoaded) return <ActivityIndicator />;

  const press = (body: string) => {
    if (body >= "0" && body <= "9") {
      setCalc((s) => handleNumber(body, s));
    } else if (body === ".") {
      setCalc((s) => handleDecimal(s));
    } else if (["+", "−", "×", "÷"].includes(body)) {
      setCalc((s) => handleOperator(body, s));
    } else if (body === "=") {
      setCalc((s) => handleEquals(s));
    } else if (body === "±") {
      setCalc((s) => handleToggleSign(s));
    } else if (body === "%") {
      setCalc((s) => handlePercentage(s));
    } else if (body === "C") {
      setCalc(handleClear());
    }
  };

  const expression =
    calc.previousValue && calc.operator
      ? `${calc.previousValue} ${calc.operator}`
      : "";

  return (
    <View className="flex-1 justify-end items-center bg-[#303644]">
      <View className="mb-4 px-6 self-stretch">
        <Text className="text-[#979AA2] text-2xl font-light text-right">
          {expression}
        </Text>
      </View>
      <View className="mb-6 px-6 self-stretch">
        <Text className="text-white font-light text-7xl text-right">
          {calc.currentValue}
        </Text>
      </View>
      <View className="flex-row gap-2">
        <Button body="C" onPress={() => press("C")} />
        <Button body="±" onPress={() => press("±")} />
        <Button body="%" onPress={() => press("%")} />
        <Button body="÷" type="blueButton" onPress={() => press("÷")} />
      </View>
      <View className="flex-row gap-2 mt-2">
        <Button body="7" type="grayButton" onPress={() => press("7")} />
        <Button body="8" type="grayButton" onPress={() => press("8")} />
        <Button body="9" type="grayButton" onPress={() => press("9")} />
        <Button body="×" type="blueButton" onPress={() => press("×")} />
      </View>
      <View className="flex-row gap-2 mt-2">
        <Button body="4" type="grayButton" onPress={() => press("4")} />
        <Button body="5" type="grayButton" onPress={() => press("5")} />
        <Button body="6" type="grayButton" onPress={() => press("6")} />
        <Button body="−" type="blueButton" onPress={() => press("−")} />
      </View>
      <View className="flex-row gap-2 mt-2">
        <Button body="1" type="grayButton" onPress={() => press("1")} />
        <Button body="2" type="grayButton" onPress={() => press("2")} />
        <Button body="3" type="grayButton" onPress={() => press("3")} />
        <Button body="+" type="blueButton" onPress={() => press("+")} />
      </View>
      <View className="flex-row gap-2 mt-2 mb-10">
        <Button
          body="0"
          type="grayButton"
          width="w-[170px]"
          onPress={() => press("0")}
        />
        <Button body="." type="grayButton" onPress={() => press(".")} />
        <Button body="=" type="blueButton" onPress={() => press("=")} />
      </View>
    </View>
  );
}
