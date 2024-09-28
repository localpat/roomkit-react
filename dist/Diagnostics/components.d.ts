import React from "react";
import { CSS } from "../Theme";
export declare const TestContainer: ({ css, children, }: {
    css?: CSS;
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const TestFooter: ({ error, ctaText, children, }: {
    ctaText?: string;
    error?: Error;
    children?: React.ReactNode;
}) => React.JSX.Element;
