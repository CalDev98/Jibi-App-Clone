import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Card = ({ title, icon, cardBg }) => {
  return (
    <TouchableOpacity
      style={{
        width: 120,
        height: 150,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: cardBg,
      }}
    >
      <Icon name={`${icon}`} size={40} color="#FFF" />
      <Text
        style={{
          width: "80%",
          textTransform: "uppercase",
          textAlign: "center",
          color: "#FFF",
          marginTop: 2,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
