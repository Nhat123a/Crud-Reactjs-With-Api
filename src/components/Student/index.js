import { Button, Space, Table, Modal } from "antd";
import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteApi, getStudentApiByClass } from "../API";
import Toast from "../Toast";

const Student = () => {
  const navigate = useNavigate();
  const [dataSource, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ID, setID] = useState(null);

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const handleDetail = (StudentID) => {
    navigate(`/student/detail/${StudentID}`);
  };
  const handleEdit = (id) => {
    navigate(`/student/edit/${id}`);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Class",
      dataIndex: "Class",
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
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record.id)}>
            Edit
          </Button>
          <Button onClick={() => showModal(record.id)} danger type="primary">
            Delete
          </Button>
          <Button onClick={() => handleDetail(record.id)} type="primary">
            Detail
          </Button>
        </Space>
      ),
    },
  ];
  const HandleClick = () => {
    navigate("/student/create");
  };
  const HandleGetdata = async () => {
    const res = await getStudentApiByClass();
    if (res.status === 200) {
      // console.log(">>>>>>>check:", res.data);
      setData(res.data.data);
      // console.log(">>>>>>>check data", dataSource);
    }
  };
  useEffect(() => {
    HandleGetdata();
  }, []);
  // Xóa
  const handleDelete = async (id) => {
    try {
      const res = await deleteApi(id);
      if (res.status === 200) {
        // Hoặc nếu bạn nhận một đối tượng với thuộc tính status
        HandleGetdata();
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
        <span>LIST STUDENT</span>
      </div>
      <div className=" container mt-5">
        <Space size="middle">
          <Button onClick={HandleClick} type="primary">
            Create new student
          </Button>
        </Space>
        <Table
          dataSource={dataSource}
          columns={columns}
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
          rowKey={"name"}
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

export default memo(Student);
