// =================================== 多选下拉框 =================================== //

let multiSelect = (
  <Form.Item {...this.formItemLayout} label="" hasFeedback>
    {getFieldDecorator("", {

    })(
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder=""
      >
        {data.map((item: ) => {
          return <Option key={}>{}</Option>;
        })}
      </Select>
    )}
  </Form.Item>
)

// =================================== 搜索下拉框 =================================== //

const selectHandle = (classification: string) => {
  const { } = this.props;

};

let searchSelect = (
  <Form.Item {...this.formItemLayout} label="" hasFeedback>
    {getFieldDecorator("", {

    })(
      <Select
        placeholder=""
        showSearch
        optionFilterProp="value"
        filterOption={(input, option: any) =>
          option.props.value
            .toLowerCase()
            .indexOf(input.toLowerCase()) >= 0
        }
        style={{ width: "100%" }}
      >
        {data.map((item: ) => {
          return (
            <Option key={} value={}> {} </Option>
          );
        })}
      </Select>
    )}
  </Form.Item>
)



// =================================== 固定选项下拉框 =================================== //


let fixedOptionsSelect = (
  <Form.Item {...this.formItemLayout} label="" hasFeedback>
    {getFieldDecorator("", {
      rules: [{ required: true, message: "" }]
    })(
      <Select placeholder="">
        <Option key="" value=""> </Option>
      </Select>
    )}
  </Form.Item>
)