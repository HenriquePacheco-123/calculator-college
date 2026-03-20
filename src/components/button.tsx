import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  type?: "blueButton" | "grayButton";
  body: React.ReactNode;
  width?: string;
  height?: string;
  onPress?: () => void;
}

const Button: React.FC<Props> = ({ type, body, width, height, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex items-center justify-center rounded-3xl text-4xl ${width ? width : "w-20"} ${height ? height : "h-20"} ${type === "blueButton" ? "bg-[#256AE0] shadow shadow-black/20" : type === "grayButton" ? "bg-[#444C5C]" : "bg-[#505B6C]"}`}
    >
      <Text className="text-white text-4xl font-sans">{body}</Text>
    </TouchableOpacity>
  );
};

export default Button;
