import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  type?: "blueButton" | "grayButton";
  body: React.ReactNode;
}

const Button: React.FC<Props> = ({ type, body }) => {
  return (
    <TouchableOpacity
      className={`flex items-center justify-center rounded-3xl w-20 h-20 ${type === "blueButton" ? "bg-[#256AE0] shadow shadow-black/40" : type === "grayButton" ? "bg-[#444C5C]" : "bg-[#505B6C]"}`}
    >
      <Text className="text-white text-3xl">{body}</Text>
    </TouchableOpacity>
  );
};

export default Button;
