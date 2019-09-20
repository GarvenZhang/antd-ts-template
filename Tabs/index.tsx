import * as React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { getUrlObj, go } from "../../router/router-management";

import "./index.scss";

const { TabPane } = Tabs;


interface Props {

}

interface State { }

type KeyPathMapKey = "1" | "2" | "3" | "4" | "5" | "6" | "7";

let MetadataDetail: any = class extends React.Component<Props, State> {
  readonly state: State = {};

  keyPathMap = {
    "1": "/metadata-detail/basic-info",
  };

  changeHandle = (activeKey: KeyPathMapKey) => {
    const { guid, typeName, count } = getUrlObj().search;

    go({ pathname: this.keyPathMap[activeKey] });
  };

  // @ts-ignore
  getActiveKey = () => {
    for (let activeKey in this.keyPathMap) {
      if (
        this.keyPathMap[activeKey as KeyPathMapKey] === getUrlObj().pathname
      ) {
        return activeKey;
      }
    }
  };

  componentDidMount() {

  }



  render() {
    const { prevPath, goPrevPath } = this;
    const { } = this.state;
    const {
      search: { guid, typeName, title, from }
    } = getUrlObj();

    return (
      <div className="metadata-detail-page">
        <Tabs
          onChange={this.changeHandle}
          type="card"
          activeKey={this.getActiveKey()}
        >
          <TabPane tab="基本信息" key="1">
            <Route
              path="/metadata-detail/basic-info"
              component={BasicInfoTable}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
};

MetadataDetail = connect(
  (state: any) => ({}),
  {
    logAccessRecord
  }
)(MetadataDetail);

export default MetadataDetail;
