import { Button, Space, Table } from "antd";
import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();
  const dataSource = [
    {
      key: "1",
      name: "Mike 10 Downing Street",
      Class: "Class 2",
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      Class: "Class 1",
      address: "10 Downing Street",
    },
  ];
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
          <Button type="primary">Edit</Button>
          <Button danger type="primary">
            Delete
          </Button>
          <Button type="primary">Detail</Button>
        </Space>
      ),
    },
  ];
  const HandleClick = () => {
    navigate("/student/create");
  };
  const fetchClassesWithStudents = async () => {
    const params = {
        draw: 1,
        columns: [
            {
                data: "name",
                name: "Name",
                searchable: true,
                orderable: true,
                search: {
                    value: "", // Add search term if needed
                    regex: false
                }
            }
        ],
        order: [
            {
                column: 0,
                dir: "asc" // or "desc"
            }
        ],
        start: 0,
        length: 10, // Number of records to fetch
        search: {
            value: "", // Global search term if needed
            regex: false
        }
    };

    try {
        const response = await axios('https://localhost:7226/api/Student/StudentWithClass', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data); // Handle the data as needed
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call this function when needed, e.g., on component mount or button click
useEffect(()=>{
  fetchClassesWithStudents()
},[])

  return (
    <>
      <div className="text-center py-3 font-bold text-2xl">
        <span>LIST STUDENT</span>
      </div>
      <div className=" container mt-5">
        <Space size="middle">
          <Button onClick={HandleClick} type="primary">
            Create
          </Button>
        </Space>
        <Table dataSource={dataSource} columns={columns} />;
      </div>

    </>
  );
};

export default memo(Student);
