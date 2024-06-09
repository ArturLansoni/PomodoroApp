import { useMemo, useRef } from "react";
import { FlatList, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useTheme } from "@/theme";
import { INITIAL_TIME_IN_SECONDS, useSettings, useStopwatch } from "@/hooks";
import TimeButton from "../TimeButton/TimeButton";

function Settings() {
    const { backgrounds, fonts } = useTheme();
    const { sum, sub } = useStopwatch();
    const { isOpen } = useSettings();
    const snapPoints = useMemo(() => ['25%'], []);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const options = [
        { title: '+ 5min', onPress: () => sum(INITIAL_TIME_IN_SECONDS * 5) },
        { title: '+ 1min', onPress: () => sum(INITIAL_TIME_IN_SECONDS) },
        { title: '+ 30s', onPress: () => sum(INITIAL_TIME_IN_SECONDS / 2) },
        { title: '+ 10s', onPress: () => sum(INITIAL_TIME_IN_SECONDS / 6) },
        { title: '- 5min', onPress: () => sub(INITIAL_TIME_IN_SECONDS * 5) },
        { title: '- 1min', onPress: () => sub(INITIAL_TIME_IN_SECONDS) },
        { title: '- 30s', onPress: () => sub(INITIAL_TIME_IN_SECONDS / 2) },
        { title: '- 10s', onPress: () => sub(INITIAL_TIME_IN_SECONDS / 6) },
    ];
    return (<>
        {isOpen && <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}>
            <BottomSheetView style={{ padding: 12 }}>
                <FlatList
                    data={options}
                    renderItem={({ item, index }) => (<TimeButton title={item.title} index={index} onPress={item.onPress} />)}
                    keyExtractor={(_, i) => i.toString()}
                    numColumns={4}
                    ItemSeparatorComponent={() => <View style={{ height: 12, width: 12 }} />}
                />
            </BottomSheetView>
        </BottomSheet>}
    </>);
}

export default Settings;