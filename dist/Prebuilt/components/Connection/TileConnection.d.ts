import React from "react";
declare const TileConnection: ({ name, peerId, hideLabel, width, pinned, }: {
    name: string;
    peerId: string;
    hideLabel: boolean;
    width?: string | number;
    pinned?: boolean;
}) => React.JSX.Element;
export default TileConnection;
