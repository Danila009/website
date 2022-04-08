const BASE_URL = "https://api.cfif31.ru/spotify"
const MUSIC_URL = '/Music'
const AUTHORIZATION = "/Authorization"

const TOKEN = ""

function getMusic(){
  sendRequest('GET', MUSIC_URL)
    .then(data => data.forEach(element => musicItem(element)))
    .catch(err => console.log(err));

    function musicItem({title}){
      console.log(title);
      let element = document.createElement("h1");
      element.innerHTML = title;
      document.body.append(element);
    }
}

function postAuthorization(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email.toString());
  console.log(password.toString());

  let user = {
    email: email.toString(),
    password: password.toString()
  };
  sendRequest('POST', AUTHORIZATION, user)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function sendRequest(method, url, body = null){
	const headers = {
        'Accept': '*',
    'Content-Type': 'application/json'
  }

  if(body == null){
	return fetch(BASE_URL + url, {
    method: method,
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })
  })
  }else{
	  return fetch(BASE_URL + url, {
		  method:method,
          mode: 'cors',
		  body: JSON.stringify(body),
		  headers:headers
	  }).then(response => {
		  if(response.ok){
			  return response.json()
		  }

		  return response.json().then(error => {
			  const e = new Error("Что-то пошло не так")

              e.data = error
			  throw e
		  })
	  })
  }
}
