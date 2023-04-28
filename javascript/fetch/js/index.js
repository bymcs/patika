// fetch api ile calismak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  let userListDOM = document.querySelector("#userList")
  
  // API uzerinden veri cektik
  fetch("https://jsonplaceholder.typicode.com/todos").then(
    response => response.json()
  ).then(responseJson => {
    responseJson.forEach(item => {
      let liDOM = document.createElement('li')
      liDOM.innerHTML = item.title
      userListDOM.appendChild(liDOM)
    })
  })