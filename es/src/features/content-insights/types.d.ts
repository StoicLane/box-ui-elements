import { METRIC, PERIOD, PRESET_TIMES } from './constants';
export declare type Metric = typeof METRIC[keyof typeof METRIC];
export declare type Period = typeof PERIOD[keyof typeof PERIOD];
export declare type PresetTimes = typeof PRESET_TIMES[keyof typeof PRESET_TIMES];
export declare type TimeRangeType = 'day' | 'week' | 'month';
export declare type TimeRange = {
    end: number;
    start: number;
    type: TimeRangeType;
};
export declare type MetricsData = {
    downloadsCount: number;
    previewsCount: number;
    users: Set<string>;
};
export declare type GraphDatum = TimeRange & MetricsData;
export declare type GraphData = Array<GraphDatum>;
export declare type ResponseError = Error & {
    data?: string;
    detail?: string;
    errorCode?: string;
    status: number;
    title?: string;
};
