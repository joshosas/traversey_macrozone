import HomeHeader from "@/components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.title}>MacroZone</Text>
			<HomeHeader />
			<Link href="/meals" style={{ fontSize: 18, color: "#007bff" }}>
				Go to Meals
			</Link>
			<Link href="/add-meal" style={{ fontSize: 18, color: "aqua" }}>
				Go to Add Meal
			</Link>
		</View>
	);
}
