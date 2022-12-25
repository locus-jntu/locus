import Popup from "../components/Popup";

export function saveProfileToDb(data, setStatus) {
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

export function saveAnnouncementToDb(data, setStatus) {
  console.log("announcement Data : ", data);
  setStatus("loading");
  fetch("http://localhost:8080/announcements/saveNewAnnouncementData", {
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
