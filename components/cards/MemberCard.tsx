import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import Card from "../Card";

type MemberCardProps = {
    imgUrl: string;
    name: string;
    username: string;
    level: number;
    profile: string;
    addonUrl: string;
    addonBoost: boolean
    hpPercent?: number;
    xpPercent?: number;
};

export default function MemberCard({
    imgUrl,
    name,
    username,
    level,
    profile,
    addonUrl,
    addonBoost,
    hpPercent = 1,
    xpPercent = 0.5,
}: MemberCardProps) {
    return (
        <Card>
            <View style={styles.row}>
                <Image source={{ uri: imgUrl }} style={styles.image} />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{name}</Text>
                        <View style={styles.addonArea}>
                            <Image source={{ uri: addonUrl }} style={styles.imageAddon} />
                            {addonBoost && (
                                <Entypo name="arrow-bold-up" size={14} color="blueviolet" />
                            )}
                        </View>
                    </View>


                    <Text style={styles.username}>@{username}</Text>

                    <View style={styles.barSection}>
                        <View style={styles.barContainer}>
                            <View style={[styles.hpBar, { width: `${hpPercent * 100}%` }]} />
                        </View>
                        <View style={styles.barContainer}>
                            <View style={[styles.xpBar, { width: `${xpPercent * 100}%` }]} />
                        </View>
                    </View>


                    <View style={styles.footer}>
                        <Text style={styles.level}>Level {level}</Text>
                        <Text style={styles.leader}>{profile}</Text>
                    </View>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: "#ddd",
    },
    imageAddon: {
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    addonArea: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
    },
    username: {
        fontSize: 12,
        color: "#aaa",
        marginBottom: 6,
    },
    barSection: {
        gap: 4,
    },
    barContainer: {
        height: 6,
        backgroundColor: "#eee",
        borderRadius: 3,
        overflow: "hidden",
        marginBottom: 6,
        position: "relative",
    },
    hpBar: {
        backgroundColor: "rgb(255 97 101)",
        height: "100%",
        position: "absolute",
        borderRadius: 3,
    },
    xpBar: {
        backgroundColor: "rgb(96 165 250)",
        height: "100%",
        position: "absolute",
        borderRadius: 3,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    level: {
        fontSize: 12,
        color: "#888",
    },
    leader: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#888",
    },
});
