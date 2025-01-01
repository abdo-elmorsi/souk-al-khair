import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
            <Link href="/about">Go to About</Link>
            <Link href="/contact">Go to Contact</Link>
            <Link href="/settings">Go to Settings</Link>
            <Link href="/test">Go to Settings</Link>
        </View>
    );
}
