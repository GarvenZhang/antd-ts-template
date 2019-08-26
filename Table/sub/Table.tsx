import * as React from "./node_modules/react";
import { Table, } from "./node_modules/antd";
import { ColumnProps } from "./node_modules/antd/lib/table";

interface Props {

}

let Table: any = class extends React.Component<Props> {
  columns: ColumnProps<>[] = [
    {
      title: "",
      dataIndex: "",
      key: ""
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (
        text: any,
        record: ,
        index: number
      ): React.ReactNode | undefined => {
        return (
  
        );
      }
    },

  ];

  componentDidMount() {

  }

  render() {
    const { columns } = this;
    const { Table } = this.props;

    return (
      <div className="">
        <Table
          columns={columns}
          dataSource={Table.columns}
          pagination={{}}
        />
      </div>
    );
  }
};

Table = connect(
  (state: any) => ({

  }),
  {
    ...{
    }
  }
)(Table);

export { Table };
