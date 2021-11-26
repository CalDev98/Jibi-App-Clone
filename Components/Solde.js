import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-elements";

const Solde = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.WelcomeText}>Salut Caleb!</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={styles.Solde}>
          <Text
            style={{
              textTransform: "uppercase",
              marginBottom: 5,
            }}
          >
            Mon Solde
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color:"#F89C35",
            }}
          >
            100.00 DH
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "50%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#F89C35",
          }}
        >
          <Icon name="wallet-outline" size={40} color="#fff" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#FFF",
            }}
          >
            Alimenter
          </Text>
        </TouchableOpacity>
      </View>
      <Divider style={{ marginTop: 13 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: 13,
    height: 130,
  },
  WelcomeText: {
    width: "100%",
    fontSize: 30,
    marginBottom: 30,
  },
  Solde: {
    justifyContent: "space-around",
  },
});

export default Solde;
