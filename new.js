// // задание 1
// function createHTML(obj) { // функция, создающая элемент и разметку
//     const postsDiv = document.createElement('div');
//     postsDiv.innerHTML = `<div class="post-item"><h3>${obj.title}</h3><p>${obj.body}</p></div>`;
//     return postsDiv;
// }

// function addElement(func) { // функция, добавляющая разметку на страницу
//     const wrapper = document.querySelector('.wrapper');
//     wrapper.appendChild(func);
// }

// function getPosts() {//функция, получающая посты и добавляющая их на страницу
//     const listPromise = fetch('https://jsonplaceholder.typicode.com/posts');
//     listPromise
//     .then(response => response.json())
//     .then(json => 
//         json.forEach(el => {
//             // console.log(el.title);
//             // console.log(el.body);
//             addElement(createHTML(el));
//         }))
//     .catch(console.log('Oops, somthing wrong :('));
// }

// getPosts();


// // задание 2
// const btnPost = document.querySelector('.post-btn'); // получаем кнопку
// function createHTML(obj) { // создаем элемент и разметку
//     const postsDiv = document.createElement('div');
//     postsDiv.innerHTML = `<div class="post-item"><h3>${obj.title}</h3><p>${obj.body}</p></div>`;
//     return postsDiv; // возвращаем элемент
// }

// function addElement(func) {
//     const wrapper = document.querySelector('.wrapper'); //получаем обертку
//     wrapper.appendChild(func); // добавляем элемент на страницу
// }

// function createPost() {
    
//     const titleInput = document.querySelector('.post-title').value; // получаем текст из инпутов
//     const bodyInput = document.querySelector('.post-body').value;

//     fetch('https://jsonplaceholder.typicode.com/posts', { // добавляем пост на страницу
//     method: 'POST',
//     body: JSON.stringify({
//         title: titleInput,
//         body: bodyInput,
//         userId: 1
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
//     })
//     .then(response => response.json())
//     .then(json => addElement(createHTML(json)));
// }

// btnPost.addEventListener('click', createPost); // обработчик на клик