import React from "react";
import { CSS } from "../../Theme";
declare const VideoTile: React.MemoExoticComponent<({ peerId, trackId, width, height, objectFit, canMinimise, isDragabble, rootCSS, containerCSS, enableSpotlightingPeer, hideParticipantNameOnTile, roundedVideoTile, hideAudioMuteOnTile, hideMetadataOnTile, }: {
    peerId?: string;
    trackId?: string;
    width?: string | number;
    height?: string | number;
    objectFit?: string;
    canMinimise?: boolean;
    isDragabble?: boolean;
    rootCSS?: CSS;
    containerCSS?: CSS;
    enableSpotlightingPeer?: boolean;
    hideParticipantNameOnTile?: boolean;
    roundedVideoTile?: boolean;
    hideAudioMuteOnTile?: boolean;
    hideMetadataOnTile?: boolean;
}) => React.JSX.Element>;
export default VideoTile;
