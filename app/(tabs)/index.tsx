import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AntDesign } from "@expo/vector-icons";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];

    return (
        <SafeAreaView
            style={[styles.safeArea, { backgroundColor: colors.background }]}
        >
            <ParallaxScrollView
                headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
                headerImage={
                    <Image
                        source={require("@/assets/images/logo-600x315.jpeg")}
                        style={styles.reactLogo}
                    />
                }
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={[styles.headerText, { color: colors.text }]}>
                        مرحبا بكم في سوق الخير
                    </Text>
                    <Text
                        style={[styles.subHeaderText, { color: colors.icon }]}
                    >
                        منصة تربط بين المتبرعين والمحتاجين.
                    </Text>

                    <Text style={[styles.sectionTitle, { color: colors.text }]}>
                        عن سوق الخير
                    </Text>
                    <Text style={[styles.paragraph, { color: colors.icon }]}>
                        سوق الخير هو منصة مبتكرة مصممة لجعل العمل الخيري
                        والتبرعات أسهل وأكثر وصولاً. سواء كان ذلك دعمًا ماليًا،
                        أو مساهمات عينية مثل الملابس أو الطعام، أو حتى التطوع،
                        فإن سوق الخير يجعل من السهل العطاء وإحداث فرق.
                    </Text>

                    {/* Quick Actions */}
                    <View style={styles.actionContainer}>
                        <ActionButton
                            title="تبرع"
                            icon="heart"
                            colors={colors}
                            onPress={() => console.log("انتقال إلى التبرعات")}
                        />
                        <ActionButton
                            title="حملات"
                            icon="rocket1"
                            colors={colors}
                            onPress={() => console.log("انتقال إلى الحملات")}
                        />
                        <ActionButton
                            title="تطوع"
                            icon="team"
                            colors={colors}
                            onPress={() => console.log("انتقال إلى التطوع")}
                        />
                    </View>

                    <Text style={[styles.sectionTitle, { color: colors.text }]}>
                        الميزات
                    </Text>
                    <View style={styles.featuresContainer}>
                        <FeatureItem
                            title="التبرعات المالية والعينية"
                            description="تبرع بسهولة ومرونة - سواء بشكل مالي أو بأشياء أساسية مثل الملابس والطعام."
                            colors={colors}
                        />
                        <FeatureItem
                            title="حملات"
                            description="أنشئ أو انضم إلى حملات خيرية وزد من تأثيرك."
                            colors={colors}
                        />
                        <FeatureItem
                            title="فرص التطوع"
                            description="اكتشف وشارك في فرص التطوع في مجتمعك."
                            colors={colors}
                        />
                    </View>
                </ScrollView>
            </ParallaxScrollView>
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
        direction: "rtl",
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 16,
    },
    reactLogo: {
        height: "100%",
        width: "100%",
        bottom: 0,
        left: 0,
        position: "absolute",
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
