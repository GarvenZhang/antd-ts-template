import * as React from "react";

interface Props {

}

let GGEditorWrap: any = class extends React.PureComponent<Props> {
  shouldComponentUpdate(nextProps: Props): boolean {
    if () {
      return false;
    }
    return true;
  }

  render() {
    return <div className="">{this.props.children}</div>;
  }
};

export { GGEditorWrap };
