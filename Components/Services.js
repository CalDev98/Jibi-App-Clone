import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "./Card";

const Services = () => {
  const SERVICES = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      icon: "home-outline",
      title: "Payer un commerçant",
      bg: "#FDBC2F",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      icon: "swap-horizontal-outline",
      title: "Envoyer de l'argent",
      bg: "#24BDAF",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      icon: "cash-outline",
      title: "Recevoir un transert",
      bg: "#9452A1",
    },
  ];

  const renderItem = ({ item }) => (
    <Card title={item.title} icon={item.icon} cardBg={item.bg} />
  );

  return (
    <View
      style={{
        margin: 13,
      }}
    >
      <Text style={{ marginBottom: 10, textTransform: "uppercase" }}>
        Mes Services
      </Text>
      {/* Vertical slide with cards */}
      <FlatList
        data={SERVICES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
