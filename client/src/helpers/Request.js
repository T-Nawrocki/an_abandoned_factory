const baseURL = "http://localhost:3001/api/save-games"

export const getSaveGames = () => {
  return fetch(baseURL)
    .then(res => res.json());
}

export const postSaveGame = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json());
}
