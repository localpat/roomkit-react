import React from "react";
import { HMSTrackID } from "@100mslive/react-sdk";
export declare const isSameTile: ({ trackId, videoTrackID, audioTrackID, }: {
    trackId: HMSTrackID;
    videoTrackID?: string;
    audioTrackID?: string;
}) => boolean;
export declare const TileMenuContent: ({ videoTrackID, audioTrackID, isLocal, isScreenshare, showSpotlight, showPinAction, peerID, canMinimise, closeSheetOnClick, openNameChangeModal, openRoleChangeModal, }: {
    videoTrackID: string;
    audioTrackID: string;
    isLocal: boolean;
    isScreenshare: boolean;
    showSpotlight: boolean;
    showPinAction: boolean;
    peerID: string;
    canMinimise?: boolean;
    closeSheetOnClick?: () => void;
    openNameChangeModal?: () => void;
    openRoleChangeModal?: () => void;
}) => React.JSX.Element | null;
