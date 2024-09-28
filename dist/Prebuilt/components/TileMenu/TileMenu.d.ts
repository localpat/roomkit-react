import React from "react";
/**
 * Taking peerID as peer won't necesarilly have tracks
 */
declare const TileMenu: ({ audioTrackID, videoTrackID, peerID, isScreenshare, canMinimise, enableSpotlightingPeer, }: {
    audioTrackID: string;
    videoTrackID: string;
    peerID: string;
    isScreenshare?: boolean;
    canMinimise?: boolean;
    enableSpotlightingPeer?: boolean;
}) => React.JSX.Element | null;
export { isSameTile } from "./TileMenuContent";
export default TileMenu;
