import { memo } from "react";
import { useStudent } from "../hooks/useStudent";
import { getStudentById } from "../../../comom/API/api";
import { DataStudent } from "../components/formStudent";

const Edit = () => {
  const {  handleEdit, register, handleSubmit } = useStudent({
    getDataByID: getStudentById,
  });

  return (
    <DataStudent
      onSubmit={handleSubmit(handleEdit)}
      register={register}
      readOnly={false}
      type="edit"
    />
  );
};

export default memo(Edit);
