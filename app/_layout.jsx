
// create react native layout component
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { AuthProvider } from '../context/AuthContext';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function Layout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}
	return (
		<AuthProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Slot />
			</Stack>
		</AuthProvider>
	)
}
