import SecureLS from "secure-ls";

export default function useFetch(payload, route, reqType) {

  const _func = async () => {
    var ls = new SecureLS({encodingType: 'aes', isCompression: false})
    const jwt = ls.get("jwt");

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
    console.log(data);
    const response = await data.json();

    return response;
  };

  return _func;
}