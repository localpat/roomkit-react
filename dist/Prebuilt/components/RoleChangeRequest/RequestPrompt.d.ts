import React from "react";
export declare const RequestPrompt: ({ open, onOpenChange, title, body, actionText, onAction, disableActions, }: {
    open?: boolean;
    onOpenChange: (value: boolean) => void;
    title: string;
    body: React.ReactNode;
    actionText?: string;
    onAction: () => void;
    disableActions?: boolean;
}) => React.JSX.Element;
