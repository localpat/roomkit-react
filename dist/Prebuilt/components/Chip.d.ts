import React from "react";
import { CSS } from "../../Theme";
declare const Chip: ({ icon, content, backgroundColor, textColor, hideIfNoContent, onClick, css, }: {
    icon?: React.JSX.Element;
    content: string;
    backgroundColor?: string;
    textColor?: string;
    hideIfNoContent?: boolean;
    onClick?: () => void | Promise<void>;
    css?: CSS;
}) => React.JSX.Element | null;
export default Chip;
