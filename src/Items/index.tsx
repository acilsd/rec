import * as React from 'react';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { Item } from './Item';

interface IProps {
  data: any;
  start: number;
}

@observer
export class ItemContainer extends React.Component<IProps> {
  private labels = ['color', 'mood', 'size', 'shape', 'material'];

  @computed get values() {
    const key = this.labels[this.props.start];
    return Array.from(new Set(this.props.data.map((d: object) => d[key])));
  }

  render() {
    return (
      this.values.map((v) => {
        return (
          <Item
            key={v as string}
            val={v as string}
            start={this.props.start}
            data={this.props.data}
            labels={this.labels}
          />
        );
      })
    );
  }
}
