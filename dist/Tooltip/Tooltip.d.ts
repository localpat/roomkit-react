import React, { PropsWithChildren } from "react";
import { CSS } from "../Theme";
export type alignTooltip = "end" | "center" | "start" | undefined;
export type sideTooltip = "bottom" | "left" | "right" | "top" | undefined;
export declare const Tooltip: React.FC<PropsWithChildren<{
    title: React.ReactNode | string;
    outlined?: boolean;
    side?: sideTooltip;
    align?: alignTooltip;
    disabled?: boolean;
    triggerCss?: CSS;
    boxCss?: CSS;
    delayDuration?: number;
}>>;
