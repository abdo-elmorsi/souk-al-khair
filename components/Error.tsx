import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "@/constants";

const Error = ({ message }: { message: string }) => {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Error: {message}</Text>
        </View>
    );
};

export default Error;

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    errorText: {
        fontSize: 20,
        color: COLORS.primaryText,
    },
});
