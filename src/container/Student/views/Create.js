import React from "react";
import { DataStudent } from "../components/formStudent";
import { useStudent } from "../hooks/useStudent";
import { getStudentById } from "../../../comom/API/api";

const Create = () => {
  const { onsubmit,errors, register, handleSubmit } = useStudent({
    getDataByID: getStudentById,
  });
  return (
    <DataStudent
      onSubmit={handleSubmit(onsubmit)}
      register={register}
      readOnly={false}
      type="create"
      errors={errors}
    />
  );
};

export default Create;
