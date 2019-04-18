import * as React from 'react';
import { computed } from 'mobx';
import { observer } from 'mobx-react';

import { ItemContainer } from './index';

import { ItemTitlle, ItemWrap } from '../ui/Wrappers';
import { withAccordeon } from '../HOC/WithAccordeon';

interface IProps {
  labels: string[];
  start: number;
  val: string;
  data: any;

  opened?: boolean;
  handleOpen?(): void;
}

@observer
class ItemComponent extends React.Component<IProps> {
  step = this.props.start;

  @computed get newValues() {
    return this.props.data.filter((d) => d[this.props.labels[this.props.start]] === this.props.val);
  }

  @computed get endOfRender() {
    return this.props.start === this.props.labels.length - 1;
  }

  @computed get endData() {
    return this.props.data.map((d) => d.name);

  }

  renderRest = () => {
    return <ItemContainer data={this.newValues} start={this.step + 1} />;
  }

  renderContent = () => {
    return (
      this.endData.map((d) => <div key={d}>{d}</div>)
    );
  }

  render() {
    console.log(this.props);
    return (
      <ItemWrap width={(this.props.start * 100).toString()}>
        <ItemTitlle>{this.props.val}</ItemTitlle>

        {this.endOfRender ?
          this.renderContent() :
          this.renderRest()}

      </ItemWrap>
    );
  }
}

const Item = withAccordeon(ItemComponent);

export { Item };
