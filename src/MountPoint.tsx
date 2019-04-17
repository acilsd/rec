import * as React from 'react';
import { hot } from 'react-hot-loader';
import { data } from './data';
import styled from './styled/theme';
import { Item } from './Item';
import { action, computed, observable } from 'mobx';

const LabelWrap = styled.div`
  width: 1000px;
  display: flex;
`;

const LabelDiv = styled.div`
  padding: 5px 10px;
  border: 1px solid black;
  cursor: pointer;
  text-transform: capitalize;
`;

class MountPoint extends React.Component<any> {
  @observable firstLabel = '';
  @observable filters = [];

  @computed get labelsOrder() {
    return ['color', 'mood', 'size', 'shape', 'material'];
  }

  @computed get data() {
    return data;
  }

  @action filterData(key) {
    this.filters.push(key);
  }

  componentDidMount() {
    this.firstLabel = 'color';
  }

  renderLabels = () => {
    return (
      <LabelWrap>
        {this.labelsOrder.map((label) => (
          <LabelDiv key={label}>{label}</LabelDiv>
        ))}
      </LabelWrap>
    );
  }

  renderItems = () => {
    return this.data.map((d) => {
      //
    });
  }

  render() {
    return (
      <>
        {this.renderLabels()}

        {this.renderItems()}
        {/* <Item data={this.data} filter={this.filterData} itemKey={this.firstLabel} /> */}
      </>
    );
  }
}

export default hot(module)(MountPoint);
