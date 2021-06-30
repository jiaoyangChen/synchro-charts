import { r as registerInstance, h } from './index-44bccbc7.js';
import { C as COMPARISON_OPERATOR } from './constants-4b21170a.js';
import { D as DataType } from './dataConstants-a26ff694.js';
import { Y as YEAR_IN_MS } from './time-f374952b.js';

const Y_MIN = 0;
const Y_MAX = 5000;
const X_MIN = new Date(1998, 0, 0);
const X_MAX = new Date(2001, 0, 0);
const TEST_DATA_POINT = {
    x: new Date(1999, 0, 0).getTime(),
    y: 2000,
};
const TEST_DATA_POINT_2 = {
    x: new Date(2000, 0, 0).getTime(),
    y: 4000,
};
const TEST_2_DATA_POINT = {
    x: new Date(1999, 0, 0).getTime(),
    y: 4000,
};
const TEST_2_DATA_POINT_2 = {
    x: new Date(2000, 0, 0).getTime(),
    y: 3000,
};
const StatusChartThresholdMultipleDataStream = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("sc-status-chart", { alarms: { expires: YEAR_IN_MS }, dataStreams: [
                {
                    id: 'test',
                    color: 'black',
                    name: 'test stream',
                    aggregates: { [YEAR_IN_MS]: [TEST_DATA_POINT, TEST_DATA_POINT_2] },
                    data: [],
                    resolution: YEAR_IN_MS,
                    dataType: DataType.NUMBER,
                },
                {
                    id: 'test2',
                    color: 'black',
                    name: 'test stream',
                    aggregates: { [YEAR_IN_MS]: [TEST_2_DATA_POINT, TEST_2_DATA_POINT_2] },
                    data: [],
                    resolution: YEAR_IN_MS,
                    dataType: DataType.NUMBER,
                },
            ], annotations: {
                y: [
                    {
                        value: 2500,
                        label: {
                            text: 'y label',
                            show: true,
                        },
                        showValue: true,
                        color: 'blue',
                        comparisonOperator: COMPARISON_OPERATOR.GREATER_THAN_EQUAL,
                    },
                ],
                thresholdOptions: {},
            }, widgetId: "test-id", size: {
                width: 500,
                height: 500,
            }, viewPort: { yMin: Y_MIN, yMax: Y_MAX, start: X_MIN, end: X_MAX } }), h("sc-webgl-context", null)));
    }
};

export { StatusChartThresholdMultipleDataStream as status_chart_threshold_coloration_multiple_data_stream };