import { useTheme } from "@/theme";
import { Pressable, Text } from "react-native";

function TimeButton({ title, index, onPress }: { title: string, onPress: () => void, index: number }) {
    const { components, fonts, gutters } = useTheme();
    const isLast = index == 3 || index == 7;
    return (
        <Pressable onPress={onPress} style={[components.pill, !isLast && gutters.marginRight_12]}>
            <Text style={[fonts.bold, fonts.gray800]}>{title}</Text>
        </Pressable>
    );
}

export default TimeButton;