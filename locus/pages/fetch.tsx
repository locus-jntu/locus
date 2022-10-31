const Fetch = () => {
  const data = { email: 'test@test.com', password: 'pewd', firstName: 'FN', lastName: 'LN' }

  function handleClick () {
    fetch('http://localhost:8080/students/createNewProfileData', {
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

  return (
    <button onClick={handleClick}> Click </button>
  )
}

export default Fetch
