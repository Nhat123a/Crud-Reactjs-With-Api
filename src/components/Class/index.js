import { Table } from 'antd';
import React from 'react'

const Class = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
  return (
    <>
      <div className="text-center py-3 font-bold text-2xl">
        <span>LIST CLASS</span>
      </div>
      <div className=" container mt-5">
      <Table dataSource={dataSource} columns={columns} />;

      </div>
    </>
  )
}

export default Class