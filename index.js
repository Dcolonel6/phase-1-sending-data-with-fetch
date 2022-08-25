// Add your code here
function submitData(username, userEmail){
    const configurationObject = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            accept: 'application/json'
        },
        body: JSON.stringify({name:username,email:userEmail})
    }
    return fetch('http://localhost:3000/users',configurationObject)
            .then(response => response.json())
            .then(response => display(response))
            .catch(error =>   display(error))
}

function createListElements({id}){ 
    const liElement = document.createElement('li')   
    liElement.textContent = id
    return liElement
}


function display(reponseObject){
    const body = document.querySelector('body')
    const ul = document.querySelector('ul')
    const p = document.createElement('p')
    
    if('message' in reponseObject){
        const {message} = reponseObject
        p.textContent = reponseObject.message
        body.append(p)
    }else{
        const li = createListElements(reponseObject)
        ul.append(li)
    }
    
}

//submitData('Frustrated_coder','dcolonel6@gmail.com')