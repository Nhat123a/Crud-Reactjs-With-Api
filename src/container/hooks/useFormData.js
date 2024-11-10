import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Toast from "../../components/Toast";

export const useFormData = (props) => {
  const { Getdata, Delete } = props;
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ID, setID] = useState(null);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();
  const navigateTo = (path) => {
    // /student/detail/${StudentID}
    navigate(path);
  };
  const handleGetData = async () => {
    const res = await Getdata();
    if (res.status === 200) {
      setData(res.data.data);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await Delete(id);
      if (res.status === 200) {
        handleGetData();
        Toast("success", "Delete success");
      } else {
        Toast("error", "Failed to delete");
      }
    } catch (err) {
      console.log(">>>check error:", err);
    }
  };
  const showModal = (id) => {
    setIsModalOpen(true);
    setID(id);
  };
  const handleOk = async () => {
    setIsModalOpen(false);
    await handleDelete(ID);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    handleGetData();
  }, []);
  return {
    navigateTo,
    showModal,
    handleOk,
    handleCancel,
    data,
    isModalOpen,
    current,
    pageSize,
    setCurrent,
    setPageSize,
  };
};
