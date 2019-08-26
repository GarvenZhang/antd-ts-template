// =================================== 单选框 =================================== //

const switchHandle = (checked: boolean) =>
  this.setState({ baseOrAdvanced:  });

let Switch = (
  <Form.Item {...this.formItemLayout} label="" hasFeedback>
    基础
  <Switch
      checked={baseOrAdvanced === "advanced"}
      onChange={switchHandle}
    />
    高级
</Form.Item>
)