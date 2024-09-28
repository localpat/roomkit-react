import React from "react";
declare const PreviewJoin: ({ skipPreview, initialName, asRole, }: {
    skipPreview?: boolean;
    initialName?: string;
    asRole?: string;
}) => React.JSX.Element;
export declare const PreviewTile: ({ name, error, }: {
    name: string;
    error?: boolean;
}) => React.JSX.Element;
export declare const PreviewControls: ({ hideSettings, vbEnabled, }: {
    hideSettings: boolean;
    vbEnabled: boolean;
}) => React.JSX.Element;
export declare const PreviewSettings: React.MemoExoticComponent<() => React.JSX.Element>;
export default PreviewJoin;
