import type { Layout } from "@100mslive/types-prebuilt";
export type useFetchRoomLayoutProps = {
    endpoint?: string;
    authToken: string;
};
export type useFetchRoomLayoutResponse = {
    layout: Layout | undefined;
    updateRoomLayoutForRole: (role: string) => void;
    setOriginalLayout: () => void;
};
export declare const useFetchRoomLayout: ({ endpoint, authToken, }: useFetchRoomLayoutProps) => useFetchRoomLayoutResponse;
