```jsx
import { COMPARISON_OPERATOR, StatusIcon, StreamType, DataType } from '@synchro-charts/core';
<div style={{ width: '100%', height: '300px' }}>
  <Gauge
    widgetId="test-widget-1"
    dataStream={{
      id: 'car-speed-alarm-1',
      name: 'Wind temperature',
      data: [
        {
          x: new Date(2001, 0, 0).getTime(),
          y: 900,
        },
      ],
      detailedName: 'Medium',
      resolution: 0,
      dataType: DataType.NUMBER,
    }}
    size={{
      fontSize: 60,
      gaugeThickness: 36,
      iconSize: 48,
      labelSize: 32,
      unitSize: 32,
    }}  
    viewport={{ yMin: 0, yMax: 2000, duration: 1000 }}
  />
</div>;
```
gauge visualizes the latest value from a data stream by emphasizing the property value.For data stream of no unit it will display the percentage by using the two `yMin` and `yMax`.

You can provide `size` to change the font size、gauge thickness、icon size、label size、unit size.
```jsx static
const size = {
  fontSize: 60,
  gaugeThickness: 36,
  iconSize: 48,
  labelSize: 32,
  unitSize: 32,
}
```

You can provide `significantDigits` to set the number of significant digits in the primary value.

```jsx
const significantDigits = 2;

import { COMPARISON_OPERATOR, StatusIcon, StreamType, DataType } from '@synchro-charts/core';
<div style={{ width: '100%', height: '300px' }}>
  <Gauge
    widgetId="test-widget-2"
    dataStream={{
      id: 'car-speed-alarm-2',
      name: 'Wind temperature',
      data: [
        {
          x: new Date(2001, 0, 0).getTime(),
          y: 911,
        },
      ],
      resolution: 0,
      dataType: DataType.NUMBER,
    }}
    significantDigits={significantDigits}
    size={{
      fontSize: 60,
      gaugeThickness: 36,
      iconSize: 48,
      labelSize: 32,
      unitSize: 32,
    }}  
    viewport={{ yMin: 0, yMax: 2000, duration: 1000 }}
  />
</div>;
```



```jsx

import { COMPARISON_OPERATOR, StatusIcon, StreamType, DataType } from '@synchro-charts/core';
<div style={{ width: '100%', height: '300px' }}>
  <Gauge
    widgetId="test-widget-3"
    dataStream={{
      id: 'car-speed-alarm-3',
      name: 'Wind temperature',
      data: [
        {
          x: new Date(2001, 0, 0).getTime(),
          y: 700,
        },
      ],
      unit: 'rpm',
      resolution: 0,
      dataType: DataType.NUMBER,
    }}
    size={{
      fontSize: 60,
      gaugeThickness: 36,
      iconSize: 48,
      labelSize: 32,
      unitSize: 32,
    }} 
    viewport={{ yMin: 0, yMax: 2000, duration: 1000 }}
  />
</div>;
```

```jsx
import { COMPARISON_OPERATOR, StatusIcon, StreamType, DataType } from '@synchro-charts/core';
<div style={{ width: '100%', height: '300px' }}>
  <Gauge
    widgetId="test-widget-4"
    dataStream={{
      id: 'car-speed-alarm-4',
      name: 'Wind temperature',
      data: [
        {
          x: new Date(2001, 0, 0).getTime(),
          y: 700.354,
        },
      ],
      unit: 'rpm',
      resolution: 0,
      dataType: DataType.NUMBER,
    }}
    size={{
      fontSize: 36,
      gaugeThickness: 36,
      iconSize: 48,
      labelSize: 32,
      unitSize: 24,
    }} 
    viewport={{ yMin: 0, yMax: 2000, duration: 1000 }}
  />
</div>;
```

### Gauge with alarms

You can show the current latest alarm status on the gauge center through setting the `icon` property and the `text` property for the threshold.

You can provide an `icon` property within the threshold to show an icon that is associated with the breaching color/status.

Supported Icon:

1. error
2. active
3. normal
4. acknowledged
5. snoozed
6. disabled
7. latched

Corresponding value you can custom.

```jsx
import { COMPARISON_OPERATOR, StatusIcon, StreamType, DataType } from '@synchro-charts/core';
<div style={{ width: '100%', height: '300px' }}>
  <Gauge
    widgetId="test-widget-5"
    dataStream={{
      id: 'car-speed-alarm-5',
      name: 'Wind temperature',
      data: [
        {
          x: new Date(2001, 0, 0).getTime(),
          y: 1500,
        },
      ],
      resolution: 0,
      dataType: DataType.NUMBER,
    }}
    associatedStreams={[
      {
        id: 'car-speed-alarm-5',
        type: StreamType.ALARM,
      },
    ]}
    annotations={{
      y: [
        {
          color: '#C03F25',
          value: 660,
          comparisonOperator: COMPARISON_OPERATOR.LESS_THAN_EQUAL,
          dataStreamIds: ['car-speed-alarm-5'],
          label: {
            text: 'Critical',
            show: true,
          },
          icon: StatusIcon.ERROR,
        },
        {
          color: '#F29D38',
          value: 1320,
          comparisonOperator: COMPARISON_OPERATOR.LESS_THAN_EQUAL,
          dataStreamIds: ['car-speed-alarm-5'],
          label: {
            text: 'Warning',
            show: true,
          },
          icon: StatusIcon.LATCHED,
        },
        {
          color: '#3F7E23',
          value: 1320,
          comparisonOperator: COMPARISON_OPERATOR.GREATER_THAN,
          dataStreamIds: ['car-speed-alarm-5'],
          label: {
            text: 'Normal',
            show: true,
          },
          icon: StatusIcon.NORMAL,
        },
      ],
    }}
    size={{
      fontSize: 60,
      gaugeThickness: 36,
      iconSize: 48,
      labelSize: 32,
      unitSize: 32,
    }} 
    viewport={{ yMin: 0, yMax: 2000, duration: 1000 }}
  />
</div>;
```