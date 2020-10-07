
export const fetchJson = async (id = 1) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(response => response.json())
  .then(json => json)
  .catch(err => err);
};

export const jsonApi = {
  fetchJson: fetchJson
};

export default jsonApi;
