import { Button, Space } from "antd";
import { DeleteOutlined, EditOutlined, ReadOutlined } from "@ant-design/icons";
import { memo } from "react";
import {  useFormData } from "../../hooks/useFormData";
import { deleteStudent, getStudentByClass } from "../../../comom/API/api";
import DataComponent from "../../components/tableData";
const Student = () => {
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
    Getdata: getStudentByClass,
    Delete: deleteStudent,
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 280,
    },
    {
      title: "Class",
      dataIndex: "Class",
      width: 280,
      key: "Class",
      render: (text, dataSource) => {
        return dataSource.classes.map((item, index) => {
          return (
            <span key={item.id}>
              {item.name}
              {index < dataSource.classes.length - 1 && ", "}
            </span>
          );
        });
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 280,
    },
    {
      title: "Action",
      width: 100,
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            color="primary"
            variant="filled "
            onClick={() => navigateTo(`/student/edit/${record.id}`)}
            icon={<EditOutlined />}
          ></Button>
          <Button
            onClick={() => showModal(record.id)}
            icon={<DeleteOutlined />}
            color="danger"
            danger
            variant="filled "
          ></Button>
          <Button
            onClick={() => navigateTo(`/student/detail/${record.id}`)}
            variant="filled "
            color="primary"
            icon={<ReadOutlined />}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="text-center py-3 font-bold text-2xl">
        <span>LIST STUDENT</span>
      </div>
      <div className=" container mt-5">
        <Space size="middle">
          <Button onClick={() => navigateTo("/student/create")} type="primary">
            Create new student
          </Button>
        </Space>
        <DataComponent
          dataSource={data}
          titleModal="Do you want to delete this student?"
          ModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          columns={columns}
          current={current}
          pageSize={pageSize}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
        />
      </div>
    </>
  );
};

export default memo(Student);
