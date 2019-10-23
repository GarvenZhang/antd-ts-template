import * as React from "react";
import { connect } from 'react-redux'
import {  } from 'antd'

import "./index.scss";

interface Props {

}

interface State {

}

let ComponentName: any = class extends React.Component<Props, State> {
  readonly state: State = {

  };


  componentDidMount() {

  }

  render() {
    const {  } = this;
    const {  } = this.props;
    const {  } = this.state;

    return (
      <div className="">

      </div>
    )
  }
};

ComponentName = connect(
  ({}: any) => ({ }),
  { }
)(ComponentName);

export { ComponentName };
