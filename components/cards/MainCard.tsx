import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type MainCardProps = {
  title: string;
  participating: number;
  imgUrl: string;
  name: string;
  hp: number;
  damageDone: number;
};

export default function MainCard({
  title,
  participating,
  imgUrl,
  name,
  hp,
  damageDone,
}: MainCardProps) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.title} >{title}</Text>
        <Text style={styles.subtitle}>{participating}/10 Participating</Text>

        <Image source={{ uri: imgUrl }} width={150} height={150} />

        <View style={styles.statsContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="sword" size={30} color="black" />
          </View>

          <View style={styles.statsRight}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.barContainer}>
              <View style={{ ...styles.bar, width: "80%" }} />
              <View style={{ ...styles.bar, backgroundColor: "rgb(255 97 101)", width: "60%" }} />

            </View>

            <Text style={styles.hp}>{hp} / 1500 HP</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.damageDone}>{damageDone} Damage Done</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: -8,
  },
  subtitle: {
    fontSize: 12,
    color: "#ccc9cf",
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  statsRight: {
    flex: 1,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  barContainer: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
  },
  bar: {
    backgroundColor: "rgb(255 166 36)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  hp: {
    marginTop: 3,
    fontSize: 12,
    color: "#ccc9cf",
  },
  footer: {
    marginBottom: -15,
    width: 350,
    height: 30,
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255 166 36)",
  },
  damageDone: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
