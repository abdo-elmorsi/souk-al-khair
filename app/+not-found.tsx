import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "@/constants";
import { useRouter } from "expo-router";

const NotFoundScreen = () => {
    const router = useRouter();

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text style={{ fontSize: SIZES.xLarge, fontWeight: "bold" }}>
                Page Not Found
            </Text>
            <TouchableOpacity
                onPress={() => {
                    // Navigate to the home screen
                    router.push("(tabs)");
                }}
                style={{
                    marginTop: 20,
                    padding: 10,
                    backgroundColor: "blue",
                    borderRadius: 5,
                }}
            >
                <Text style={{ color: "white" }}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NotFoundScreen;
