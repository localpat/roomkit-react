export declare class VBPlugin {
    private hmsPlugin?;
    private effectsPlugin?;
    initialisePlugin: (effectsSDKKey?: string, onInit?: () => void) => Promise<void>;
    getBackground: () => any;
    getBlurAmount: () => any;
    getVBObject: () => any;
    getName: () => any;
    setBlur: (blurPower: number) => Promise<void>;
    setBackground: (mediaURL: string) => Promise<void>;
    setPreset: (preset: 'quality' | 'balanced') => Promise<void>;
    getPreset: () => any;
    removeEffects: () => Promise<void>;
    reset: () => void;
    isEffectsSupported: () => boolean;
}
export declare const VBHandler: VBPlugin;
