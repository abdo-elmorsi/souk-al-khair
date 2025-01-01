import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SIZES, COLORS } from "@/constants";
import { useRouter } from "expo-router";
import { AuthContext } from "../../context/AuthContext";

const user = {
	name: "Abdo Elmorsi",
	email: "abdelrahmandiv@gmail.com",
	avatar: "https://avatars.githubusercontent.com/u/83051465?v=4",
	bio: "I'm an experienced web and mobile developer based in Cairo.",
};

function Profile() {
	const router = useRouter();
	const { user: userAuth, logout } = useContext(AuthContext);

	const handleLogOut = () => {
		logout();
		router.replace("(auth)/login");
	};
	useEffect(() => {
		if (!userAuth) {
			handleLogOut();
		}
	}, [userAuth, router]);

	return (
		<SafeAreaView style={styles.safeContainer}>
			<ScrollView style={styles.container}>

				{/* Profile Picture Section */}
				<View style={styles.profilePictureContainer}>
					<Image source={{ uri: user.avatar }} style={styles.profilePicture} />
					<Text style={styles.userName}>{user.name}</Text>
					<Text style={styles.userEmail}>{userAuth?.email}</Text>
				</View>

				{/* Bio Section */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>About Me</Text>
					<Text style={styles.sectionContent}>{user.bio}</Text>
				</View>

				{/* Settings Section */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Account Settings</Text>
					<TouchableOpacity style={styles.settingItem}>
						<MaterialCommunityIcons name="account-circle-outline" size={SIZES.xLarge} color={COLORS.light.tint} />
						<Text style={styles.settingText}>Edit Profile</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.settingItem}>
						<Ionicons name="lock-closed" size={SIZES.xLarge} color={COLORS.light.tint} />
						<Text style={styles.settingText}>Change Password</Text>
					</TouchableOpacity>
				</View>

				{/* Action Buttons */}
				<View style={styles.actionsContainer}>
					<TouchableOpacity onPress={() => handleLogOut()} style={[styles.button, styles.logoutButton]}>
						<Text style={styles.buttonText}>Logout</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		backgroundColor: COLORS.light.cardBackground,
	},
	container: {
		flex: 1,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.light.border,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#333",
	},
	profilePictureContainer: {
		alignItems: "center",
		marginVertical: 30,
	},
	profilePicture: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 15,
		borderWidth: 2,
		borderColor: "#ddd",
	},
	userName: {
		fontSize: SIZES.xLarge,
		fontWeight: "bold",
		color: COLORS.light.secondaryText,
	},
	userEmail: {
		fontSize: SIZES.medium,
		color: COLORS.light.secondaryText,
		marginTop: 5,
	},
	section: {
		paddingHorizontal: 20,
		marginBottom: 40,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "600",
		marginBottom: 10,
		color: COLORS.light.secondaryText,
	},
	sectionContent: {
		fontSize: SIZES.medium,
		color: COLORS.light.secondaryText,
		lineHeight: 22,
	},
	settingItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.light.border,
	},
	settingText: {
		fontSize: SIZES.medium,
		color: COLORS.light.secondaryText,
		marginLeft: 15,
	},
	actionsContainer: {
		paddingHorizontal: 20,
	},
	button: {
		marginVertical: 10,
		paddingVertical: 12,
		borderRadius: 8,
		alignItems: "center",
	},
	logoutButton: {
		backgroundColor: COLORS.light.danger,
	},
	buttonText: {
		color: COLORS.light.background,
		fontSize: SIZES.medium,
		fontWeight: "500",
	},
});

export default Profile;
