import React from "react";
export declare const Options: ({ options, selectedDeviceId, onClick, }: {
    options?: Array<MediaDeviceInfo | InputDeviceInfo>;
    selectedDeviceId?: string;
    onClick: (deviceId: string) => Promise<void>;
}) => React.JSX.Element;
export declare const NoiseCancellation: ({ actionTile, iconOnly, setOpenOptionsSheet, }: {
    setOpenOptionsSheet?: (value: boolean) => void;
    iconOnly?: boolean;
    actionTile?: boolean;
}) => React.JSX.Element | null;
export declare const AudioVideoToggle: ({ hideOptions, }: {
    hideOptions?: boolean;
}) => React.JSX.Element | null;
