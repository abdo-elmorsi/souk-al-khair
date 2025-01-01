import React, { useState, useContext } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
	StyleSheet,
	Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { AuthContext } from "../../context/AuthContext";
import { SIZES, COLORS } from "@/constants";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false); // Loading state
	const { login } = useContext(AuthContext);
	const router = useRouter();

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleLogin = async () => {
		if (!email || !password) {
			Alert.alert("Error", "Please enter both email and password.");
			return;
		}
		if (password.length < 6) {
			Alert.alert("Error", "Password must be at least 6 characters long.");
			return;
		}


		if (!validateEmail(email)) {
			Alert.alert("Error", "Please enter a valid email address.");
			return;
		}

		setLoading(true); // Start loading
		try {
			// Simulate API login request
			const userData = { email }; // Replace with actual API response
			// await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
			await login(userData);

			// Navigate to Profile Screen upon successful login
			router.replace("(tabs)");
		} catch (error) {
			Alert.alert("Error", "Login failed. Please try again.");
		} finally {
			setLoading(false); // Stop loading
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome Back</Text>
			<Text style={styles.subtitle}>Log in to continue</Text>

			<TextInput
				style={styles.input}
				placeholder="Email"
				keyboardType="email-address"
				autoCapitalize="none"
				value={email}
				onChangeText={setEmail}
				accessibilityLabel="Email input field"
			/>

			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
				accessibilityLabel="Password input field"
			/>

			<TouchableOpacity
				style={[styles.button, loading && styles.disabledButton]}
				onPress={handleLogin}
				disabled={loading}
			>
				{loading ? (
					<ActivityIndicator color="#fff" />
				) : (
					<Text style={styles.buttonText}>Login</Text>
				)}
			</TouchableOpacity>

			<View style={styles.registerContainer}>
				<Text style={styles.registerText}>Don't have an account?</Text>
				<TouchableOpacity onPress={() => router.push("(auth)/register")}>
					<Text style={styles.registerButton}>Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: COLORS.light.cardBackground,
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		color: COLORS.light.text,
		marginBottom: 10,
	},
	subtitle: {
		fontSize: SIZES.medium,
		color: COLORS.light.secondaryText,
		marginBottom: 30,
	},
	input: {
		width: "100%",
		height: 50,
		borderColor: COLORS.light.border,
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 15,
		marginBottom: 20,
		backgroundColor: COLORS.light.background,
	},
	button: {
		width: "100%",
		height: 50,
		backgroundColor: COLORS.light.tint,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	buttonText: {
		color: COLORS.light.background,
		fontSize: 18,
		fontWeight: "600",
	},
	disabledButton: {
		backgroundColor: COLORS.light.tabIconSelected,
		color: COLORS.light.background,
	},
	registerContainer: {
		flexDirection: "row",
		marginTop: 20,
		alignItems: "center",
	},
	registerText: {
		color: COLORS.light.secondaryText,
		marginRight: 5,
	},
	registerButton: {
		color: COLORS.light.tint,
		fontWeight: "600",
	},
});

export default LoginScreen;
