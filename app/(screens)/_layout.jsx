import { Slot, Stack, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const _layout = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            router.replace("(auth)/login");
        }
    }, [user, router]);

    return (
        <Stack
            screenOptions={{
                headerShown: false, // Show headers for these screens
                headerStyle: { backgroundColor: "#f8f9fa" },
                headerTintColor: "#333",
            }}
        >
            <Slot />
        </Stack>
    );
};

export default _layout;
