function fetchCustomServerData(path, data) {
  return fetch("http://3.108.22.49:8080/api" + path, data).then(res => res.json())
}

export default fetchCustomServerData