import { Component, Element, h, Prop } from '@stencil/core';

import tippy, { Instance } from 'tippy.js';
import merge from 'lodash.merge';
import { TIPPY_SETTINGS } from '../common/toolTipSettings';
import { DataPoint } from '../../utils/dataTypes';
import { Value } from '../value/Value';
import { Threshold } from '../charts/common/types';
import { RecursivePartial, TooltipMessage } from '../sc-dial/type';
import { DefaultTooltipMessages } from '../sc-dial/util';

@Component({
  tag: 'sc-grid-tooltip',
  shadow: false,
})
export class ScGridTooltip {
  @Element() el: HTMLElement;

  @Prop() isEnabled: boolean;
  @Prop() title: string;
  @Prop() propertyPoint?: DataPoint;
  @Prop() alarmPoint?: DataPoint;
  @Prop() breachedThreshold?: Threshold;
  @Prop() unit?: string;
  @Prop() value?: number | string;

  @Prop() messageOverrides: RecursivePartial<TooltipMessage>;

  private tooltip: Instance | undefined;
  private messages: TooltipMessage;

  componentWillLoad() {
    this.messages = merge(DefaultTooltipMessages, this.messageOverrides);
  }

  componentDidLoad() {
    this.displayToolTip();
  }

  disconnectedCallback() {
    if (this.tooltip) {
      this.tooltip.destroy();
    }
  }

  displayToolTip = () => {
    const container = this.el.querySelector('.tooltip-container');
    const tooltip = this.el.querySelector('.cell-tooltip') as HTMLElement | undefined;

    if (tooltip != null && container != null) {
      tooltip.style.display = 'block';
      this.tooltip = tippy(container, {
        ...TIPPY_SETTINGS,
        placement: 'left',
        content: tooltip,
      });
    }
  };

  render() {
    const thereIsSomeData = this.propertyPoint != null || this.alarmPoint != null;
    const color = this.breachedThreshold ? this.breachedThreshold.color : undefined;
    const displaysMoreThanTitle = thereIsSomeData && this.isEnabled;
    const icon = this.breachedThreshold ? this.breachedThreshold.icon : undefined;
    const label = this.breachedThreshold ? this.breachedThreshold.label : undefined;
    const unit = this.unit || '';
    const value = this.value || this.propertyPoint?.y;

    return (
      <div class="tooltip-container">
        <div class="cell-tooltip awsui-util-container awsui">
          <div class={{ 'awsui-util-container-header': true, 'awsui-util-mb-m': displaysMoreThanTitle }}>
            <h3>{this.title}</h3>
          </div>
          {displaysMoreThanTitle && (
            <div>
              <div class="awsui-util-spacing-v-s">
                {this.propertyPoint && (
                  <div>
                    <div class="awsui-util-label">{this.messages.tooltipValueTitles}</div>
                    <div>
                      <strong style={{ color }}>
                        {icon && <sc-chart-icon name={icon} color={color} style={{ marginRight: '3px' }} />}
                        <Value value={value} unit={unit} />
                      </strong>{' '}
                      {this.messages.tooltipValueTimeDescribed}{' '}
                      {new Date(this.propertyPoint.x).toLocaleString('en-US', {
                        hour12: true,
                        minute: 'numeric',
                        hour: 'numeric',
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                )}

                {label ? (
                  <strong style={{ color }}>{this.breachedThreshold?.label?.text}</strong>
                ) : (
                  <fragement>
                    {this.alarmPoint && (
                      <div>
                        <div class="awsui-util-label">{this.messages.tooltipValueTitles}</div>
                        <div>
                          <strong style={{ color }}>{this.alarmPoint.y}</strong> {this.messages.tooltipStatusDescribed}{' '}
                          {new Date(this.alarmPoint.x).toLocaleString('en-US', {
                            hour12: true,
                            minute: 'numeric',
                            hour: 'numeric',
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                          })}
                          {this.breachedThreshold && this.breachedThreshold.description && (
                            <div>({this.breachedThreshold.description})</div>
                          )}
                        </div>
                      </div>
                    )}
                  </fragement>
                )}
              </div>
            </div>
          )}
        </div>
        <slot />
      </div>
    );
  }
}
