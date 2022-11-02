export function saveToDb(data){
    // const data= {
    //     firstName: 'FN',
    //     lastName: "lN",
    //     email: 'test@test.com',
    //     address: {
    //         streetAdress: "home",
    //         streetAdress2: "hoe1",
    //         district: "dis",
    //         city: "hyd",
    //         state: "ts",
    //         pin: "500000"
    //     },
    // }
    fetch('http://localhost:8080/students/saveNewProfileData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(async response => await response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error(error)
      })
}