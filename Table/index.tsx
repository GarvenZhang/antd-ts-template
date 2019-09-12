import * as React from "./node_modules/react";
import { Table, Modal } from './node_modules/antd'

import "./index.scss";

interface Props {

}

interface State {
  addClassificationModalVisible: boolean
}

let ComponentName: any = class extends React.Component<
  Props,
  State
  > {
  readonly state: State = {
    addClassificationModalVisible: false
  };


  componentDidMount() {

  }

  // 提交添加分类表格
  addClassificationFormSubmit = () => {
    this.addClassificationForm.validateFields((err: any, {}: any) => {
      if (err) {
        return;
      }

      this.props.addClassification(
        {

        },
        () => {
          // 隐藏modal
          this.hideAddClassificationModal();
          // 重置表单
          this.addClassificationForm.resetFields();
        }
      );
    });
  };
  // 展示添加分类的弹窗
  showAddClassificationModal = (e: any, curItem: ) => {
    this.setState({
      addClassificationModalVisible: true,
      curItem
    });
  };
  // 隐藏添加分类的弹窗
  hideAddClassificationModal = () => {
    this.setState({ addClassificationModalVisible: false, curItem: {} });
  };

  render() {
    const {

    } = this;
    const {

    } = this.props;
    const {

    } = this.state;

    return (
      <div className="">
        <div className="table-wrap">

        </div>
        <Modal
          title="新增分类"
          okText="确认"
          cancelText="取消"
          visible={}
          onOk={}
          onCancel={}
        >
          <AddForm _ref={this} />
        </Modal>
        <Modal
          title="修改分类"
          okText="确认"
          cancelText="取消"
          visible={}
          onOk={}
          onCancel={}
        >
          <UpdateForm _ref={this} />
        </Modal>
      </div>
    )
  }
};

ComponentName = connect(
  (state: any) => ({

  }),
  {
    ...{

    }
  }
)(ComponentName);

export { ComponentName };
