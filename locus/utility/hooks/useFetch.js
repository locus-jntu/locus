import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function useFetch(payload, route, reqType) {

  const _func = async () => {
    const jwt = localStorage.getItem("jwt");

    const headers = jwt ? {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + jwt,
    } : {
      "Content-Type": "application/json"
    };

    const data = await fetch(`http://localhost:8080/${route}`, {
      method: reqType,
      headers,
      body: payload && JSON.stringify(payload),
    });

    const response = await data.json();

    return response;
  };

  return _func;
}
