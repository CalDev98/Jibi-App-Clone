import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import Solde from "../Components/Solde";
import Services from "../Components/Services";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <HeaderComponent />
      <Solde />
      {/* mes services */}
      <Services />
    </SafeAreaView>
  );
};

export default Home;
