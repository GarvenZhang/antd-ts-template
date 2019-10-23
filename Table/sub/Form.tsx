import * as React from "react";
import { Form,  } from "antd";
import { FormComponentProps } from "antd/lib/form";

interface Props extends FormComponentProps {

}

interface State { }

class FormCC extends React.Component<Props, State> {
  readonly state: State = {};

  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 }
    }
  };

  componentDidMount() {
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { } = this.props;
    const { } = this.state;

    return (
      <div className="form form--">
        <Form>
          <Form.Item {...this.formItemLayout} label="" hasFeedback>
            {getFieldDecorator("", {
              rules: [{ required: true, message: "" }],
              initialValue: 
            })(

              )}
          </Form.Item>
        </Form>
      </div>
    );
  }
};

let UpdateRoleForm = Form.create<Props>({})(FormCC);
export { UpdateRoleForm };
