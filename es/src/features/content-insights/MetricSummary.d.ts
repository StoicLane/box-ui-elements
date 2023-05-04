import { IntlShape } from 'react-intl';
import { GraphData, Metric, Period } from './types';
import './MetricSummary.scss';
interface Props {
    data: GraphData;
    intl: IntlShape;
    metric: Metric;
    period: Period;
    previousPeriodCount: number;
    totalCount?: number;
}
declare const _default;
export default _default;
