import * as React from "./node_modules/react";
import { Table, Modal } from './node_modules/antd'
import { FormComponentProps } from "antd/lib/form";

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
  private updateRoleForm = React.createRef<FormComponentProps>();

  readonly state: State = {
    addClassificationModalVisible: false
  };


  componentDidMount() {

  }

  // 提交添加分类表单
  addClassificationFormSubmit = () => {
    const updateRoleForm = this.updateRoleForm.current!.form

    updateRoleForm.validateFields((err: any, {}: any) => {
      if (err) {
        return;
      }

      this.props.addClassification(
        {

        },
        () => {
          // 刷新
          this.props.getGlossary();
          // 隐藏modal
          this.hideAddClassificationModal();
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
    const updateRoleForm = this.updateRoleForm.current!.form

    // 重置当前选中元素及弹窗状态
    this.setState({ addClassificationModalVisible: false, curItem: {} });
    // 重置表单选项
    updateRoleForm.resetFields();
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
          <AddForm  />
        </Modal>
        <Modal
          title="修改分类"
          okText="确认"
          cancelText="取消"
          visible={}
          onOk={}
          onCancel={}
        >
          <UpdateForm wrappedComponentRef={this.updateRoleForm} />
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
