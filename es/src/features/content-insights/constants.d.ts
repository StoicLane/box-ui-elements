export declare const METRIC: Readonly<{
    DOWNLOADS: string;
    PREVIEWS: string;
    USERS: string;
}>;
export declare const PERIOD: Readonly<{
    WEEK: string;
    MONTH: string;
    THREEMONTHS: string;
    YEAR: string;
}>;
export declare const PRESET_TIMES: Readonly<{
    ONE_WEEK: string;
    TWO_WEEKS: string;
    ONE_MONTH: string;
    TWO_MONTHS: string;
    THREE_MONTHS: string;
    SIX_MONTHS: string;
    ONE_YEAR: string;
    TWO_YEARS: string;
}>;
export declare const PRESET_TO_TIMESTAMPS_MAP: {
    readonly [x: string]: {
        readonly currentPeriod: string;
        readonly previousPeriod: string;
    };
};
