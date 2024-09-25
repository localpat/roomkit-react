import React from 'react';
export declare const MwebLeaveRoom: ({ leaveRoom, endRoom, container, }: {
    leaveRoom: (options?: {
        endStream?: boolean;
    }) => Promise<void>;
    endRoom: () => Promise<void>;
    container?: HTMLElement | undefined;
}) => React.JSX.Element | null;
