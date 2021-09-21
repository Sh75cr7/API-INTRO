function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
//   .then(json => console.log(json))
.then(data=> displayUsers(data))
}
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
}
function displayUsers(data){
    const ul=document.getElementById('users');
    for(const user of data){
        console.log(user);
        const li=document.createElement('li');
        li.innerText=`Name:${user.name}\n Email:${user.email}\n Address:${user.address}`
        ul.appendChild(li)
    }
    
}