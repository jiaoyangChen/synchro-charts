import { Component, h, Prop } from '@stencil/core';
import { NO_VALUE_PRESENT } from '../../../constants';
import { DataPoint, DataStream } from '../../../utils/dataTypes';
import { round } from '../../../utils/number';
import { getIcons } from '../../charts/common/annotations/iconUtils';
import { Threshold } from '../../charts/common/types';
import { DialSizeConfig } from '../type';
import { sizeConfigurations } from './util';

@Component({
  tag: 'sc-dial-svg',
  shadow: false,
})
export class ScDialSvg {
  @Prop() percent: number;
  @Prop() point?: DataPoint;
  @Prop() breachedThreshold: Threshold;
  @Prop() stream?: DataStream | null;
  @Prop() size: DialSizeConfig;

  render() {
    const R = this.size.width / 2;
    const r = R - this.size.dialThickness;
    const perimeter = 2 * Math.PI * r;
    const left = perimeter * (1 - this.percent);
    const right = perimeter - left;
    const labelColor = this.breachedThreshold?.color || sizeConfigurations.BLUE;
    const label = this.breachedThreshold?.label?.show ? this.breachedThreshold?.label?.text : '';
    const icon = this.breachedThreshold ? this.breachedThreshold.icon : undefined;
    return (
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${this.size.width} ${this.size.width}`}
        data-testid="current-value"
        preserveAspectRatio="xMidYMin meet"
      >
        <circle
          cx={R}
          cy={R}
          r={r}
          stroke-width={this.size.dialThickness}
          stroke="#d9d9d9"
          fill="none"
          transform={`matrix(1,0,0,-1,0,${this.size.width})`}
          stroke-dasharray={this.percent === 0 ? `${left} ${right}` : `${left - 1} ${right + 1}`}
          stroke-dashoffset={-(R / 2 + r) + 5}
        />
        {this.point && right - 2 > 0 && (
          <circle
            cx={R}
            cy={R}
            r={r}
            stroke-width={this.size.dialThickness}
            stroke={labelColor}
            fill="none"
            stroke-dasharray={this.percent === 1 ? `${right} ${left}` : `${right - 1} ${left + 1}`}
            transform="matrix(1,0,0,1,0,0)"
            stroke-dashoffset={R / 2 + r - 5}
          />
        )}

        {this.point ? (
          <text
            x={R + this.size.unitSize / 4}
            y={R}
            font-size={this.size.fontSize}
            font-weight="bold"
            text-anchor="middle"
          >
            <tspan dy={this.stream && !this.stream.unit ? 0 : 10}>
              {this.stream && this.stream.unit ? round(this.point?.y as number) : round(this.percent * 100)}
              <tspan font-size={this.size.unitSize}>{(this.stream && this.stream.unit) || '%'}</tspan>
            </tspan>
          </text>
        ) : (
          <text
            x={R}
            y={R}
            font-size={this.size.fontSize}
            font-weight="bold"
            text-anchor="middle"
            fill={sizeConfigurations.SECONDARYTEXT}
          >
            <tspan dy="10">{NO_VALUE_PRESENT}</tspan>
          </text>
        )}

        {this.stream && !this.stream.unit && this.point && !this.breachedThreshold ? (
          <text
            x={R}
            y={R + r / 2}
            font-weight="bold"
            font-size={this.size.labelSize}
            text-anchor="middle"
            fill={sizeConfigurations.PRIMARYTEXT}
          >
            Medium
          </text>
        ) : null}

        {this.stream && !this.stream.unit && this.breachedThreshold && label && (
          <text
            x={R + this.size.labelSize / 2}
            y={R + r / 2}
            font-size={this.size.labelSize}
            font-weight="bold"
            text-anchor="middle"
            textLength={r}
            lengthAdjust="spacing"
            fill={labelColor || sizeConfigurations.PRIMARYTEXT}
          >
            {label}
          </text>
        )}

        {this.stream && !this.stream.unit && this.breachedThreshold && label && (
          <g
            transform={`matrix(1,0,0,1,${R - r / 2 - this.size.labelSize / 2},${R +
              r / 2 -
              this.size.labelSize +
              this.size.labelSize / 8})`}
          >
            {icon && getIcons(icon, labelColor, this.size.labelSize)}
          </g>
        )}
      </svg>
    );
  }
}
