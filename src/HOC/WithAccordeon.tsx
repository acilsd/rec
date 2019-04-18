// just a draft

import * as React from 'react';

export const withAccordeon = (C: any) => {
  return class extends React.Component<any> {
    constructor(props) {
      super(props);

      this.state = {
        opened: false,
      };
    }

    handleOpen = () => this.setState({ opened: !this.state.opened });

    render() {
      return <C opened={this.state.opened} handleOpen={this.handleOpen} {...this.props} />;
    }
  };
};
