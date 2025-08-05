import { View, Text, Button } from "react-native";
import { router } from "expo-router"
import { fontFamily } from "@/theme/fontFamily";

export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontFamily: fontFamily.bold, fontSize: 34 }}> Página Inicial</Text>

            <Button title="Nova Meta" onPress={() => router.navigate("/target")} />

            <Button title="Transacao" onPress={() => router.navigate("/transaction/5432")} />
            <Button title="Progresso" onPress={() => router.navigate("/in-progress/5432")} />
        </View>
    )
} 