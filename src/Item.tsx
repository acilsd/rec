import * as React from 'react';
import { computed } from 'mobx';
import styled from './styled/theme';

const LabelDiv = styled.div`
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  border: 1px solid cyan;
  cursor: pointer;
  text-transform: capitalize;
`;

interface IProps {
  data: any;
  filter: any;
  itemKey: string;
}

export class Item extends React.Component<IProps> {

  render() {
    return (
      <>

      </>
    );
  }
}
