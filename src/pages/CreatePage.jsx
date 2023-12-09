import React from "react";
import useRequest from "../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import UserTodo from "../components/UserTodo";

const CreatePage = () => {
  const { sendRequest, loading } = useRequest({
    url: "/api/v1/todos",
    method: "POST",
  });
  const navigate = useNavigate();
  const onSubmit = (taskTime, taskName, firstName, lastName) => {
    sendRequest([{ taskTime, taskName, firstName, lastName }])
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  if (loading) return <p>Loading ..</p>;

  return (
    <div>
      <UserTodo onFormSubmit={onSubmit} />
    </div>
  );
};

export default CreatePage;
