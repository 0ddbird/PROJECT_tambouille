const host = 'http://localhost:3001'

const fetchParameters = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

async function callApi (path: string) {
  const response = await fetch(`${host}${path}`, fetchParameters)
  const { data } = await response.json()
  return data
}

export default callApi
