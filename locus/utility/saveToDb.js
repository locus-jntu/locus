import Popup from "../components/Popup";

export function saveToDb(data, setStatus) {
  console.log("profile Data : ", data);
  setStatus("loading");
  fetch("http://localhost:8080/students/saveNewProfileData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      setStatus("fail");
      console.error(error);
    });
}
