import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <Text style={[styles.headerText, { color: colors.text }]}>
                    Welcome to Souq Al-Khair
                </Text>
                <Text style={[styles.subHeaderText, { color: colors.icon }]}>
                    A platform that bridges the gap between donors and those in need.
                </Text>

                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    About Souq Al-Khair
                </Text>
                <Text style={[styles.paragraph, { color: colors.icon }]}>
                    Souq Al-Khair is an innovative platform designed to make charity
                    and donations easier and more accessible. Whether it’s financial
                    support, in-kind contributions like clothes or food, or even
                    volunteering, Souq Al-Khair makes it seamless to give back and
                    make a difference.
                </Text>

                {/* Quick Actions */}
                <View style={styles.actionContainer}>
                    <ActionButton
                        title="Donate"
                        icon="heart"
                        colors={colors}
                        onPress={() => console.log("Navigate to Donations")}
                    />
                    <ActionButton
                        title="Campaigns"
                        icon="rocket1"
                        colors={colors}
                        onPress={() => console.log("Navigate to Campaigns")}
                    />
                    <ActionButton
                        title="Volunteer"
                        icon="team"
                        colors={colors}
                        onPress={() => console.log("Navigate to Volunteering")}
                    />
                </View>

                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    Features
                </Text>
                <View style={styles.featuresContainer}>
                    <FeatureItem
                        title="Financial & In-kind Donations"
                        description="Donate with ease and flexibility—financially or with essential items like clothes and food."
                        colors={colors}
                    />
                    <FeatureItem
                        title="Campaigns"
                        description="Create or join charity campaigns and amplify your impact."
                        colors={colors}
                    />
                    <FeatureItem
                        title="Volunteer Opportunities"
                        description="Discover and engage in volunteering opportunities within your community."
                        colors={colors}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function ActionButton({
    title,
    icon,
    colors,
    onPress,
}: {
    title: string;
    icon: string;
    colors: any;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: colors.tint }]}
            onPress={onPress}
        >
            <AntDesign name={icon} size={24} color={colors.background} />
            <Text style={[styles.actionText, { color: colors.background }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

function FeatureItem({
    title,
    description,
    colors,
}: {
    title: string;
    description: string;
    colors: any;
}) {
    return (
        <View style={styles.featureItem}>
            <Text style={[styles.featureTitle, { color: colors.text }]}>
                {title}
            </Text>
            <Text style={[styles.featureDescription, { color: colors.icon }]}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 40, // Ensures spacing below the SafeAreaView top
        paddingBottom: 16, // Space for potential footers
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        textAlign: "center",
    },
    subHeaderText: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: "center",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 16,
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24,
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 8,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    actionText: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "600",
    },
    featuresContainer: {
        gap: 16,
    },
    featureItem: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#F5F5F5",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
    },
    featureDescription: {
        fontSize: 14,
    },
});
