export async function getCountries () {
  const url = 'https://restcountries.eu/rest/v2/all'

  const response = await fetch(url)
  const data = await response.json()

  if (response.ok) {
    return data
  }
}

export async function getCountry (code) {
  const url = `https://restcountries.eu/rest/v2/alpha/${code}`

  const response = await fetch(url)
  const data = await response.json()

  if (response.ok) {
    return data
  }
}
