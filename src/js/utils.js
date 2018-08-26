function request (url, options = {}) {
  const params = Object.assign(options, { mode: 'cors' })
  return fetch(url, params)
    .then((r) => {
      return r.headers.get('Content-Type').includes('application/json')
        ? r.json()
        : r.text()
    })
    .catch(console.error.bind(console))
}
