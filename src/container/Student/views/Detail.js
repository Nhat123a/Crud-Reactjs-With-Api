import React from "react";
import { DataStudent } from "../components/formStudent";
import { useStudent } from "../hooks/useStudent";
import { getStudentById } from "../../../comom/API/api";
const Detail = () => {
  const { id, register } = useStudent({ getDataByID: getStudentById });
  return (
    <DataStudent
      register={register}
      readOnly={true}
      type="detail"
      url={`/student/edit/${id}`}
    />
  );
};

export default Detail;
