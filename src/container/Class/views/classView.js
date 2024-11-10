import { Button, Space } from "antd";
import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useFormData } from "../../hooks/useFormData";
import { deleteClass, getClass } from "../../../comom/API/api";
import DataComponent from "../../components/tableData";

const Class = () => {
  const {
    navigateTo,
    isModalOpen,
    handleOk,
    handleCancel,
    data,
    current,
    pageSize,
    setCurrent,
    setPageSize,
    showModal,
  } = useFormData({
    Getdata: getClass,
    Delete: deleteClass,
  });
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
      render: (text, data) => {
        return data.students.map((item, index) => {
          return (
            <span key={item.id}>
              {item.name}
              {index < data.students.length - 1 && ", "}
            </span>
          );
        });
      },
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => showModal(record.id)}
            danger
            icon={<DeleteOutlined />}
            color="danger"
            variant="filled "
          >
            Delete
          </Button>
          <Button
            onClick={() => navigateTo(`/Class/edit/${record.id}`)}
            icon={<EditOutlined />}
            color="primary"
            variant="filled "
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="text-center py-3 font-bold text-2xl">
        <span>LIST CLASS</span>
      </div>
      <div className="container">
        <Space size="middle">
          <Button onClick={() => navigateTo("/Class/Create")} type="primary">
            Create new Class
          </Button>
        </Space>
      </div>
      <div className=" container mt-5">
        <DataComponent
          dataSource={data}
          titleModal="Do you want to delete this Class?"
          ModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          columns={columns}
          current={current}
          pageSize={pageSize}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
        />
        ;
      </div>
    </>
  );
};

export default Class;
