import { notification } from "antd";
const Toast = (type, message, description) => {
  notification[type]({
    message: message || "Notification Title",
    description: description || "",
  });
};
export default Toast