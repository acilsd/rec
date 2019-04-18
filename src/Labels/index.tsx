import * as React from 'react';
import { LabelDiv } from '../ui/Wrappers';
import { action } from 'mobx';
import { observer } from 'mobx-react';

interface ILabel {
  idx: number;
  text: string;
  activeLabel: number;
  handleSelect(key: number): void;
}

@observer
class Label extends React.Component<ILabel> {

  @action.bound
  handleClick() {
    this.props.handleSelect(this.props.idx);
  }

  render() {
    const { text, activeLabel, idx } = this.props;

    return (
      <LabelDiv handleClick={this.handleClick} isActive={activeLabel === idx} >{text}</LabelDiv>
    );
  }
}

export { Label };
