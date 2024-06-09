import type { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onPress?: () => void;
};
