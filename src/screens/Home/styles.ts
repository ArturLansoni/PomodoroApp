import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native";
import type { ComponentTheme } from "@/types/theme/theme";

interface AllStyle
  extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> {}

export default ({ layout, fonts }: ComponentTheme) => {
  return {
    page: {
      ...layout.justifyAround,
      ...layout.itemsCenter,
      ...layout.fullHeight,
    },
    timerSection: { ...layout.center, ...layout.row },
    timerText: { ...fonts.bold, ...fonts.gray800, ...fonts.size_80 },
    controls: { ...layout.center, ...layout.row, gap: 12 },
    animation: { ...layout.fullWidth, height: Dimensions.get("window").width },
    animationText: {
      ...fonts.alignCenter,
      ...fonts.size_16,
      ...fonts.gray800,
      width: "80%",
      height: Dimensions.get("window").width,
    },
  } as const satisfies AllStyle;
};
