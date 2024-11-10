import { Modal, Table } from "antd";

const DataComponent = (props) => {
  const {
    ModalOpen,
    handleOk,
    handleCancel,
    dataSource,
    columns,
    titleModal,
    current,
    pageSize,
    setPageSize,
    setCurrent,
  } = props;
  return (
    <>
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
        title={titleModal}
        open={ModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default DataComponent;
