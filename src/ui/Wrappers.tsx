import * as React from 'react';
import styled from '../styled/theme';

interface ILabel {
  className?: string;
  isActive: boolean;
  handleClick(): void;
}

const Label: React.SFC<ILabel> = (props) => {
  return (
    <div className={props.className} onClick={props.handleClick}>
      {props.children}
    </div>
  );
};

const Wrapper = styled.div`
  padding: 5px;
`;

const LabelWrap = styled.div`
  width: 1000px;
  display: flex;
`;

const LabelDiv = styled(Label)`
  padding: 5px 10px;
  border: 1px solid black;
  cursor: pointer;
  text-transform: capitalize;
  background: ${(props) => props.isActive ? '#aaa' : '#fff'}
  color: ${(props) => props.isActive ? '#fff' : '#aaa'}
`;

const ItemTitlle = styled.h3`
  font-weight: 600;
`;

const ItemDiv = (props) => {
  return (
    <div className={props.className}>{props.children}</div>
  );
};

const ItemWrap = styled(ItemDiv)`
  border: 1px solid black;
  padding: 15px;
  width: calc(100vw - ${(props) => props.width}px)
`;

export {
  LabelWrap,
  LabelDiv,
  Wrapper,
  ItemTitlle,
  ItemWrap,
};
