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

const RegisterScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false); // Loading state
	const { register } = useContext(AuthContext); // Assume `register` is defined in AuthContext
	const router = useRouter();

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleRegister = async () => {
		if (!email || !password || !confirmPassword) {
			Alert.alert("Error", "All fields are required.");
			return;
		}

		if (!validateEmail(email)) {
			Alert.alert("Error", "Please enter a valid email address.");
			return;
		}

		if (password.length < 6) {
			Alert.alert("Error", "Password must be at least 6 characters long.");
			return;
		}

		if (password !== confirmPassword) {
			Alert.alert("Error", "Passwords do not match.");
			return;
		}

		setLoading(true); // Start loading
		try {
			// Simulate API registration request
			const userData = { email }; // Replace with actual API response
			await register(userData);

			// Navigate to Login Screen upon successful registration
			router.replace("(auth)/login");
		} catch (error) {
			Alert.alert("Error", "Registration failed. Please try again.");
		} finally {
			setLoading(false); // Stop loading
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create an Account</Text>
			<Text style={styles.subtitle}>Sign up to get started</Text>

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

			<TextInput
				style={styles.input}
				placeholder="Confirm Password"
				secureTextEntry
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				accessibilityLabel="Confirm password input field"
			/>

			<TouchableOpacity
				style={[styles.button, loading && styles.disabledButton]}
				onPress={handleRegister}
				disabled={loading}
			>
				{loading ? (
					<ActivityIndicator color="#fff" />
				) : (
					<Text style={styles.buttonText}>Register</Text>
				)}
			</TouchableOpacity>

			<View style={styles.loginContainer}>
				<Text style={styles.loginText}>Already have an account?</Text>
				<TouchableOpacity onPress={() => router.push("(auth)/login")}>
					<Text style={styles.loginButton}>Login</Text>
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
	},
	loginContainer: {
		flexDirection: "row",
		marginTop: 20,
		alignItems: "center",
	},
	loginText: {
		color: COLORS.light.secondaryText,
		marginRight: 5,
	},
	loginButton: {
		color: COLORS.light.tint,
		fontWeight: "600",
	},
});

export default RegisterScreen;
