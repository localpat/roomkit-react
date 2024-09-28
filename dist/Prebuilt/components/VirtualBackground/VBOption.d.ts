import React from "react";
export declare const VBOption: {
    Root: ({ onClick, mediaURL, isActive, children, testid, }: {
        onClick?: () => Promise<void>;
        mediaURL?: string;
        isActive: boolean;
        children?: React.JSX.Element[];
        testid: string;
    }) => React.JSX.Element;
    Title: ({ children }: {
        children?: string;
    }) => React.JSX.Element | null;
    Icon: ({ children }: {
        children?: React.JSX.Element;
    }) => React.JSX.Element | null;
};
