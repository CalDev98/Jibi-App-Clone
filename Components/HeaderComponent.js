import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

const HeaderComponent = () => {
  return (
    <View>
      <Header
        statusBarProps={{
          barStyle: "light-content",
        }}
        containerStyle={{
          backgroundColor: "#FFF",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {/* Hamburger menu */}
          <TouchableOpacity>
            <Icon name="menu-outline" size={30} color="#F89C35" />
          </TouchableOpacity>
          {/* Notification Icon */}
          <TouchableOpacity
            style={{
              marginLeft: 15,
            }}
          >
            <Icon name="notifications-outline" size={30} color="#F89C35" />
          </TouchableOpacity>
        </View>
        {/* Logo */}
        <Image
          source={{
            uri: "https://www.jibi.co.ma/Content/ImagePublic/LogoProduit.png",
          }}
          style={{ width: 56, height: 41 }}
        />
        {/* Turn Off Icon */}
        <TouchableOpacity>
          <Icon name="power-outline" size={30} color="#F89C35" />
        </TouchableOpacity>
      </Header>
    </View>
  );
};

export default HeaderComponent;
