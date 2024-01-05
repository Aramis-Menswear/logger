export declare const log: {
    info: (...messages: unknown[]) => void;
    warn: (...msgs: unknown[]) => void;
    error: (...msgs: unknown[]) => void;
    success: (...msgs: unknown[]) => void;
};
export declare const logFunctionExportedForTesting: {
    logConsole: (...msgs: unknown[]) => void;
};
