import React from 'react';
export declare const LeaveSessionContent: ({ setShowLeaveRoomAlert, leaveRoom, isModal, }: {
    setShowLeaveRoomAlert: (value: boolean) => void;
    leaveRoom: (options?: {
        endStream?: boolean;
    }) => Promise<void>;
    isModal?: boolean | undefined;
}) => React.JSX.Element;
