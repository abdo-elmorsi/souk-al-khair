const tintColorLight = "#0a7ea4";
const tintColorDark = "#1e90ff"; // Slightly updated for consistency

const COLORS = {
    light: {
        text: "#11181C", // Primary text color
        secondaryText: "#4A5568", // Secondary text for subtitles or descriptions
        background: "#FFFFFF", // Main background color
        cardBackground: "#F7F9FA", // Background for cards or elevated elements
        tint: tintColorLight, // Primary tint for icons and highlights
        icon: "#687076", // Default icon color
        tabIconDefault: "#687076", // Inactive tab icon color
        tabIconSelected: tintColorLight, // Active tab icon color
        border: "#E2E8F0", // Light border color for dividers or outlines
        success: "#38A169", // Green for success messages
        warning: "#D69E2E", // Yellow for warnings
        danger: "#E53E3E", // Red for errors
    },
    dark: {
        text: "#ECEDEE", // Primary text color
        secondaryText: "#A0AEC0", // Secondary text for subtitles or descriptions
        background: "#151718", // Main background color
        cardBackground: "#1A202C", // Background for cards or elevated elements
        tint: tintColorDark, // Primary tint for icons and highlights
        icon: "#9BA1A6", // Default icon color
        tabIconDefault: "#9BA1A6", // Inactive tab icon color
        tabIconSelected: tintColorDark, // Active tab icon color
        border: "#2D3748", // Dark border color for dividers or outlines
        success: "#48BB78", // Green for success messages
        warning: "#ECC94B", // Yellow for warnings
        danger: "#F56565", // Red for errors
    },
};
export default COLORS;
