import React from "react";
export declare const IconButtonWithOptions: ({ disabled, onDisabledClick, testid, tooltipMessage, icon, children, active, hideOptions, onClick, }: {
    onClick: () => void;
    onDisabledClick: () => void;
    icon: React.ReactNode;
    children: React.ReactNode;
    testid?: string;
    hideOptions?: boolean;
    active: boolean;
    disabled?: boolean;
    tooltipMessage?: string;
}) => React.JSX.Element;
