function encenderDispositivo() {
  console.log('encender')
  fetch('https://dispenser-api-production.up.railway.app/api/v1/secuencias/u/1', {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}