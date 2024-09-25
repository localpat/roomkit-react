import React from 'react';
import { PrebuiltStates } from '../AppStateContext';
/**
 * query params exposed -
 * skip_preview=true => used by recording and streaming service, skips preview and directly joins
 *                      header and footer don't show up in this case
 * skip_preview_headful=true => used by automation testing to skip preview without impacting the UI
 * name=abc => gives the initial name for the peer joining
 * auth_token=123 => uses the passed in token to join instead of fetching from token endpoint
 * ui_mode=activespeaker => lands in active speaker mode after joining the room
 */
declare const AuthToken: React.NamedExoticComponent<{
    authTokenByRoomCodeEndpoint: string;
    defaultAuthToken?: string | undefined;
    activeState?: PrebuiltStates | undefined;
}>;
export default AuthToken;
