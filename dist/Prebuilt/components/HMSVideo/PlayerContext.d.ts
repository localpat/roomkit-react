import React from "react";
import { HMSHLSPlayer } from "@100mslive/hls-player";
type IHMSPlayerContext = {
    hlsPlayer?: HMSHLSPlayer;
};
export declare const HMSPlayerContext: React.Context<IHMSPlayerContext>;
export declare const useHMSPlayerContext: () => IHMSPlayerContext;
export {};
