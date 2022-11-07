import Popup from "../components/Popup";

export function saveToDb(data, setStatus) {
  const creds = {
    username: "admin",
    password: "password",
  };

  console.log("profile Data : ", creds);
  setStatus("loading");
  fetch("http://localhost:8080/students/saveNewProfileData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6ImpudHVQbGFjZW1lbnRQb3J0YWwuY29tIiwiaWF0IjoxNjY3ODAxMjYzLCJleHAiOjE2Njg2NjUyNjN9.b9Bw5931yGVLH-Thrmaa3kyDT4Yn0Vo6mt313s6q3VI"
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      //setStatus("fail");
      console.error(error);
    });
}
