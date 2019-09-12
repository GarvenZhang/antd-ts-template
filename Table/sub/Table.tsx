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
      title: "操作",
      dataIndex: "operate",
      key: "operate",
      render: (
        text: any,
        record: ,
        index: number
      ): React.ReactNode | undefined => {
        return (
          <div className="btn-wrap">
            
          </div>
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
