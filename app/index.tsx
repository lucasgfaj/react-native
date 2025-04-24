import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/MainCard";
import MemberCard from "@/components/cards/MemberCard";

export default function index() {
  return (
    <ScreenWrapper title="Your Party">
      <MainCard
        title="Vice Awakens"
        participating={2}
        imgUrl="https://res.cloudinary.com/duposs86e/image/upload/v1745452062/roqkx7r2c1oal4fopndk.png"
        name="Vice, The Shadow Wyrm"
        hp={1224}
        damageDone={21}
      />

      <Text style={styles.title}>MEMBERS</Text>

      <View style={styles.container}>
        <Text style={styles.inviteMember}>Invite a Member</Text>
      </View>

      <MemberCard
  imgUrl="https://res.cloudinary.com/duposs86e/image/upload/v1745460967/Screenshot_from_2025-04-23_23-15-27_l3hllx.png"
  name="Sophiala"
  username="bestieee"
  level={12}
  profile="Leader"
  addonUrl="https://res.cloudinary.com/duposs86e/image/upload/v1745460106/04201d4928fbef8_t3izdd.png"
  addonBoost={true}
  hpPercent={1}
  xpPercent={0.4}
/>

<MemberCard
  imgUrl="https://res.cloudinary.com/duposs86e/image/upload/v1745461290/ChatGPT_Image_Apr_23_2025_11_21_03_PM_xhwr4f.png"
  name="Aidowu"
  username="getthatbread"
  level={9}
  addonUrl="https://res.cloudinary.com/duposs86e/image/upload/v1745460209/130-1309569_captain-americas-shield-pixel-art-by-xzavieryt-purple-lokai-bracelet-meaning_qot9uj.jpg"
  addonBoost={true}
  profile="Member"
  hpPercent={1}
  xpPercent={0.8}
/>

    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: "rgb(249 249 249)",
    padding: 16,
    borderRadius: 12,
  },

  inviteMember: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
 
  title: {
    fontWeight: "bold",
    marginBottom: 8,
    left: 6,
    color: "rgb(108, 104, 117)",
    fontSize: 12,
  },
});