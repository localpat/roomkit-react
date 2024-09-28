export type PIPContextType = {
    isSupported: boolean;
    pipWindow: Window | null;
    requestPipWindow: (width: number, height: number) => Promise<void>;
    closePipWindow: () => void;
};
export declare const PIPContext: import("react").Context<PIPContextType | undefined>;
