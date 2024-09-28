import React from "react";
import { HMSRoleName, HMSTrackSource, HMSTrackType } from "@100mslive/react-sdk";
export declare const MuteAllContent: (props: {
    muteAll: () => Promise<void>;
    roles?: HMSRoleName[];
    enabled: boolean;
    setEnabled: (value: boolean) => void;
    trackType?: HMSTrackType;
    setTrackType: (value: HMSTrackType) => void;
    selectedRole?: HMSRoleName;
    setRole: (value: HMSRoleName) => void;
    selectedSource?: HMSTrackSource;
    setSource: (value: HMSTrackSource) => void;
    isMobile: boolean;
}) => React.JSX.Element;
