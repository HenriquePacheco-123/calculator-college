import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  type?: "blueButton" | "grayButton";
  body: string;
}

const Button: React.FC<Props> = ({ type, body }) => {
  return (
    <TouchableOpacity
      className={`p-6 rounded-xl ${type === "blueButton" ? "bg-[#256AE0]" : type === "grayButton" ? "bg-[#444C5C]" : "bg-[#505B6C]"}`}
    >
      <Text className="text-white text-2xl">{body}</Text>
    </TouchableOpacity>
  );
};

export default Button;
