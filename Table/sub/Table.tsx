import * as React from "react";
import { Table, } from "antd";
import { ColumnProps } from "antd/lib/table";

interface Props {

}

let Table: any = class extends React.Component<Props> {
  readonly columns: ColumnProps<>[] = [
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
        text: string,
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
    const {  } = this.props;

    return (
      <div className="">
        <Table
          columns={columns}
          locale={{
            emptyText: '暂无数据~'
          }}
          dataSource={}
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
