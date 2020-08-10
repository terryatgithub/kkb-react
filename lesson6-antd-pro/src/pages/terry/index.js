import React from 'react'
import styles from './index.css'
import ProTable from "@ant-design/pro-table";
import { getChannelData } from "./service";

const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'city',
      key: 'city',
    },
  ];

const actionRef = {

}

export default () => {
    return (
        <div>
            //@暗号 中非
            <h1 className={styles.title}>Page yuanbo/index</h1>
            <ProTable 
                columns={columns}
                actionRef={actionRef}
                request={
                    params=> {
                        return getChannelData(params)
                    }
                }
                rowKey="id"
                dateFormatter="string"
                headerTitle="高级表格88"
            />
        </div>
    )
}