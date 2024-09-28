import React from "react";
export declare const MwebLeaveRoom: ({ leaveRoom, endRoom, container, }: {
    leaveRoom: (options?: {
        endStream?: boolean;
    }) => Promise<void>;
    endRoom: () => Promise<void>;
    container?: HTMLElement;
}) => React.JSX.Element | null;
