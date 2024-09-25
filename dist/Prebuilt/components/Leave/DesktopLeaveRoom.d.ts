import React from 'react';
import { ConferencingScreen } from '@100mslive/types-prebuilt';
export declare const DesktopLeaveRoom: ({ leaveRoom, screenType, endRoom, container, }: {
    leaveRoom: (options?: {
        endStream?: boolean;
    }) => Promise<void>;
    screenType: keyof ConferencingScreen;
    endRoom: () => Promise<void>;
    container?: HTMLElement | undefined;
}) => React.JSX.Element | null;
