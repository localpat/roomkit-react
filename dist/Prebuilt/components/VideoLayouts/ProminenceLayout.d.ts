import React from "react";
import { TrackWithPeerAndDimensions } from "@100mslive/react-sdk";
import { CSS } from "../../../Theme";
export declare const ProminenceLayout: {
    Root: ({ children, edgeToEdge, hasSidebar, }: React.PropsWithChildren<{
        edgeToEdge?: boolean;
        hasSidebar?: boolean;
    }>) => React.JSX.Element;
    ProminentSection: ({ children, css, }: React.PropsWithChildren<{
        css?: CSS;
    }>) => React.JSX.Element;
    SecondarySection: ({ tiles, children, edgeToEdge, hasSidebar, }: React.PropsWithChildren<{
        tiles: TrackWithPeerAndDimensions[];
        edgeToEdge?: boolean;
        hasSidebar?: boolean;
    }>) => React.JSX.Element | null;
};
