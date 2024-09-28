import React from "react";
import { ConferencingScreen } from "@100mslive/types-prebuilt";
export declare const LeaveRoom: ({ screenType, container, }: {
    screenType: keyof ConferencingScreen;
    container?: HTMLElement;
}) => React.JSX.Element | null;
