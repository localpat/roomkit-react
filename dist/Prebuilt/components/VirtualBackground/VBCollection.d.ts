import React from "react";
import { HMSVirtualBackgroundTypes } from "@100mslive/hms-virtual-background/hmsvbplugin";
export declare const VBCollection: ({ options, title, activeBackground, }: {
    options: {
        title?: string;
        icon?: React.JSX.Element;
        onClick?: () => Promise<void>;
        mediaURL?: string;
        value: string | HMSVirtualBackgroundTypes;
        supported?: boolean;
    }[];
    title: string;
    activeBackground: string;
}) => React.JSX.Element | null;
