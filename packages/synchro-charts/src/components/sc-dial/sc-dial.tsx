import { Component, h, Prop } from '@stencil/core';
import {
  DataPoint,
  DataStream,
  MessageOverrides,
  SizeConfig,
  StreamAssociation,
  ViewPortConfig,
} from '../../utils/dataTypes';
import { Annotations, DialConfig, Threshold } from '../charts/common/types';
import { breachedThreshold } from '../charts/common/annotations/breachedThreshold';
import { isMinimalStaticViewport } from '../../utils/predicates';
import { getThresholds } from '../charts/common/annotations/utils';

@Component({
  tag: 'sc-dial',
  styleUrl: 'sc-dial.css',
  shadow: false,
})
export class ScDial implements DialConfig {
  @Prop() viewport: ViewPortConfig;
  @Prop() widgetId!: string;
  @Prop() dataStream!: DataStream;
  @Prop() associatedStreams?: StreamAssociation[];
  @Prop() annotations?: Annotations;
  @Prop() size?: SizeConfig & { fontSize?: string };
  @Prop() messageOverrides: MessageOverrides = {};

  getPoint = (dataStream: DataStream): DataPoint | undefined => {
    if (dataStream.data && dataStream.data.length > 0) {
      const point = dataStream.data[dataStream.data.length - 1];
      return point;
    }

    return undefined;
  };

  getAlarmStream = (dataStream: DataStream): boolean => {
    return !!this.associatedStreams && this.associatedStreams.some(stream => stream.id === dataStream.id);
  };

  getBreachedThreshold = (point: DataPoint | undefined, dataStream: DataStream): Threshold | undefined =>
    breachedThreshold({
      value: point && point.y,
      date: isMinimalStaticViewport(this.viewport) ? new Date(this.viewport.end) : new Date(),
      dataStreams: [this.dataStream],
      dataStream,
      thresholds: getThresholds(this.annotations),
    });

  render() {
    const propertyPoint = this.getPoint(this.dataStream);
    const alarmStream = this.getAlarmStream(this.dataStream) ? this.dataStream : undefined;
    const threshold = alarmStream ? this.getBreachedThreshold(propertyPoint, this.dataStream) : undefined;

    return (
      <sc-dial-base
        propertyStream={this.dataStream}
        propertyPoint={propertyPoint}
        alarmStream={alarmStream}
        breachedThreshold={threshold}
        viewport={this.viewport}
        size={this.size}
        isLoading={this.dataStream ? this.dataStream.isLoading || false : false}
      />
    );
  }
}