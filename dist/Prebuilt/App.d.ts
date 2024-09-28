import React from "react";
import { HMSStatsStoreWrapper, HMSStoreWrapper, IHMSNotifications } from "@100mslive/hms-video-store";
import { Logo, Screens, Theme, Typography } from "@100mslive/types-prebuilt";
import { HMSActions } from "@100mslive/react-sdk";
export type HMSPrebuiltOptions = {
    userName?: string;
    userId?: string;
    endpoints?: object;
    effectsSDKKey?: string;
};
export type HMSPrebuiltProps = {
    roomCode?: string;
    logo?: Logo;
    typography?: Typography;
    themes?: Theme[];
    options?: HMSPrebuiltOptions;
    screens?: Screens;
    authToken?: string;
    leaveOnUnload?: boolean;
    onLeave?: () => void;
    onJoin?: () => void;
    /**
     * @remarks
     * Specify css selectors for the HTML element to be used as container for dialogs. Affects the positioning and focus of dialogs.
     */
    containerSelector?: string;
};
export type HMSPrebuiltRefType = {
    hmsActions: HMSActions;
    hmsStore: HMSStoreWrapper;
    hmsStats: HMSStatsStoreWrapper;
    hmsNotifications: IHMSNotifications;
};
export declare const HMSPrebuilt: React.ForwardRefExoticComponent<HMSPrebuiltProps & React.RefAttributes<HMSPrebuiltRefType>>;
