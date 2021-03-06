import * as React from 'react';
import { } from 'react'
import { Modal, Form, Input, Radio } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { formItemLayout } from '@/config/form';

interface Props extends FormComponentProps {
  visible: boolean
  onOk: (values: any) => void
  onCancel: () => void
};

const AddDataModal: React.FC<Props> = ({ form: { getFieldDecorator, validateFields, resetFields }, visible, onOk, onCancel }) => {

  const okHandle = () => {
    validateFields((err: any, values: any) => {
      if (err) {
        return
      }
      onOk(values)
      resetFields()
    })
  }

  const cancelHandle = () => {
    onCancel()
    resetFields()
  }

  return (
    <div className="add-data-modal-wrap">
      <Modal
        title="新增数据"
        okText="确认"
        cancelText="取消"
        visible={visible}
        onOk={okHandle}
        onCancel={cancelHandle}
      >
        <Form className="form-wrap">
          <Form.Item {...formItemLayout} label="命名空间" hasFeedback>
            {getFieldDecorator('namespace', {
              initialValue: '',
            })(
              <Input placeholder='请输入命名空间' />
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="条件" hasFeedback>
            {getFieldDecorator('cond', {
              initialValue: '',
            })(
              <Input.TextArea placeholder="请输入条件" allowClear />
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="是否使用其它数据" hasFeedback>
            {getFieldDecorator('useOther', {
              initialValue: '',
            })(
              <Radio.Group>
                <Radio value={0}>否</Radio>
                <Radio value={1}>是</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
};

export default Form.create<Props>({})(AddDataModal)
