export type SSRState = {
    isBrowser: boolean;
    isServer: boolean;
};
declare const useSSR: () => SSRState;
export default useSSR;
