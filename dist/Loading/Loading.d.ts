import React from "react";
type Props = {
    /**
     * Adjusts width and height
     */
    size?: number | string;
    /**
     * Color of Loader
     */
    color?: string;
};
type LoadingProps = Props & React.SVGProps<SVGSVGElement>;
export declare const Loading: ({ size, color, ...props }: LoadingProps) => React.JSX.Element;
export {};
