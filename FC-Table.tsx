import * as React from 'react';
import {} from 'react';
import { Table } from 'antd'
import { ColumnProps } from 'antd/lib/table';

import styles from './index.module.scss';

interface Props {}
const BasicInfo: React.FC<Props> = ({}) => {
  const columns: ColumnProps<>[] = [
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
          <div className={styles.btnWrap}>

          </div>
        );
      }
    },
  ];
  return (
    <div className={styles.wrapper}>
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
};

export default BasicInfo;
