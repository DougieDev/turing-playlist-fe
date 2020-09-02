const baseUrl = 'http://localhost:8080/api/v1';

export const getSongs = () => {
  return fetch(`${baseUrl}/playlist`)
    .then(res => res.json())
}
