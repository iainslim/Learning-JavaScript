// Concept: Blog posts on a website

// Callbacks
const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
// Without callback, only displays post one and two due to the timing difference (1000 vs 2000)

//'callback' is just the function you want to include the potentially missed data in
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();         //accounts for delays, makes sure all data is shown
    }, 2000);
}

//getPosts();   #can be removed with callback

createPost({title: 'Post three', body:'This is post three'}, getPosts);



// Promises  
// Once the function 'resolves', runs the .then()
// If it does not 'resolve', runs the .catch()

function createPost1(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;    //Replace with actual error checking

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

createPost1({title: 'Post four', body: 'This is post four'})
    .then(getPosts)
    .catch(err => console.log(err));


// Async await
async function init() {
    await createPost1({title: 'Post five', body: 'This is post five'});

    getPosts();
};

init();

// Async await with fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

// Promise.all

// const promise1 = Promise.resolve('Hello');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json);

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));
