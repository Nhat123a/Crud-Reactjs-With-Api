import { Button, Modal, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { deleteClassApi, GetclassAPI } from "../API";
import { useNavigate } from "react-router";
import Toast from "../Toast";

const Class = () => {
  const [dataSource, setData] = useState([]);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ID, setID] = useState(null);

  const columns = [
    {
      title: "Class",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Student",
      dataIndex: "Class",
      key: "Class",
      render: (text, dataSource) => {
        return dataSource.students.map((item, index) => {
          return (
            <span key={item.id}>
              {item.name}
              {index < dataSource.students.length - 1 && ", "}
            </span>
          );
        });
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button onClick={() => showModal(record.id)} danger type="primary">
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const GetData = async () => {
    const res = await GetclassAPI();
    if (res.status === 200) {
      setData(res.data.data);
      // console.log(">>>>Check data:", res.data.data);
    }
  };
  useEffect(() => {
    GetData();
  }, []);
  const handleCreateClick = () => {
    navigate("/Class/Create");
  };
  const handleDelete = async (id) => {
    try {
      const res = await deleteClassApi(id);
      if (res.status === 200) {
        GetData();
        Toast("success", "Delete success");
      } else {
        Toast("error", "Failed to delete");
      }
    } catch (err) {
      console.log(">>>check error:", err);
    }
  };
  // Modal
  const showModal = (id) => {
    setIsModalOpen(true);
    // handleDelete(id)
    setID(id);
  };
  // console.log(ID);

  const handleOk = async () => {
    setIsModalOpen(false);
    await handleDelete(ID);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="text-center py-3 font-bold text-2xl">
        <span>LIST CLASS</span>
      </div>
      <div className="container">
        <Space size="middle">
          <Button onClick={handleCreateClick} type="primary">
            Create new Class
          </Button>
        </Space>
      </div>
      <div className=" container mt-5">
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey={"name"}
          pagination={{
            current,
            pageSize,
            total: dataSource.length,
            pageSizeOptions: ["5", "10", "20", "40"],
            showSizeChanger: true,
            onShowSizeChange: (current, size) => setPageSize(size),
            onChange: (page, pageSize) => {
              setCurrent(page);
              setPageSize(pageSize);
            },
          }}
        />
        ;
      </div>
      <Modal
        title="You want to delete Student?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default Class;
