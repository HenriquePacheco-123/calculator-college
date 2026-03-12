import { View, Text } from "react-native";
import "./global.css";
import Button from "./src/components/button";

export default function App() {
  return (
    <View>
      <View>
        <Button body="C" />
        <Button body="C" />
      </View>
    </View>
  );
}
