import * as React from 'react';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';

import { LabelWrap } from '../ui/Wrappers';
import { Label } from '../Labels';
import { ItemContainer } from '../Items/';
import { GlobalStyle } from '../styled/theme';
import { Wrapper } from '../ui/Wrappers';
import { data } from '../data';

@observer
class MountPoint extends React.Component<any> {
  @observable selectedLabel: number = 0;
  @observable labels = ['color', 'mood', 'size', 'shape', 'material'];

  @action.bound setFilter(key: number) {
    // const newLabels = this.labels.filter((l) => l !== this.labels[key]);
    // console.log(this.labels);

    this.selectedLabel = key;
  }

  renderLabels = () => {
    return (
      <LabelWrap>
        {this.labels.map((label, idx) => (
          <Label key={label} idx={idx} handleSelect={this.setFilter} text={label} activeLabel={this.selectedLabel} />
        ))}
      </LabelWrap>
    );
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        {this.renderLabels()}
        <ItemContainer
          data={data}
          start={this.selectedLabel}
        />
      </Wrapper>
    );
  }
}

export { MountPoint };
