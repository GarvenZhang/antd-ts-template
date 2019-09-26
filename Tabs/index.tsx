import * as React from "react";
import { Tabs } from "antd";
import { Route } from "react-router";
import { getUrlObj, go } from "../../utils/routerManagement";

const { TabPane } = Tabs;

/**
 * 示例：
 * const data = [
      {
        name: "待我维护",
        pathname: "/wait-to-handle/wait-to-maintain",
        component: WaitToMaintain
      },
      {
        name: "待我审批",
        pathname: "/wait-to-handle/wait-to-approval",
        component: WaitToApproval
      },
      {
        name: "维护之星",
        pathname: "/wait-to-handle/star-of-maintain",
        component: StarOfMaintain
      }
    ] as TabItem[]
    
    <TabsWrap data={data} />
 */

export interface TabItem {
  isHide?: boolean;
  name: string;
  pathname: string;
  component: React.ComponentType;
}

interface Props {
  data: TabItem[];
  changeHandle?: (activeKey: string) => void;
}

interface State { }

let TabsWrap: any = class extends React.PureComponent<Props, State> {
  readonly state: State = {};

  componentDidMount() { }

  changeHandle = (activeKey: string) => {
    const { changeHandle } = this.props;
    if (changeHandle) {
      changeHandle(activeKey);
      return;
    }
    go({ pathname: activeKey });
  };

  render() {
    const { } = this;
    const { data } = this.props;
    const { } = this.state;
    const { pathname } = getUrlObj();

    return (
      <div className="tabs-wrap">
        <Tabs onChange={this.changeHandle} type="card" activeKey={pathname}>
          {data
            .filter(({ isHide }: TabItem) => !isHide)
            .map(({ name, pathname, component }: TabItem) => {
              return (
                <TabPane tab={name} key={pathname}>
                  <Route path={pathname} component={component} />
                </TabPane>
              );
            })}
        </Tabs>
      </div>
    );
  }
};

export { TabsWrap };
