function ajax({ url, method = 'GET', async = true, done = () => {}, error = () => {}, responseType = 'json' }) {
  function status(readyState) {
    switch(readyState) {
      case 0: return 'uninitilized'
      case 1: return 'loading'
      case 2: return 'loaded'
      case 3: return 'interactive'
      case 4: return 'completed'
    }
  }
  const request = new XMLHttpRequest()
  request.responseType = responseType
  console.log(status(request.readyState), request.readyState)

  request.onreadystatechange = () => {
    console.log(status(request.readyState), request.readyState)
    if (request.readyState === 4) {
      if (request.status === 200) {
        done(request.response)
      } else {
        error(request.status)
      }
    }
  }
  request.open(method, url, async)
  request.send(null)
}