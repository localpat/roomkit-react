import React from "react";
import { HMSException } from "@100mslive/react-sdk";
export declare function PermissionErrorNotificationModal(): React.JSX.Element;
export declare const PermissionErrorModal: ({ error }: {
    error?: HMSException;
}) => React.JSX.Element | null;
