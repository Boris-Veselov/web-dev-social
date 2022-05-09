async function deletePost(event) {
    event.preventDefault();


    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch (`/api/posts/${id}`, {
        medthod: 'DELETE'
    });;

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-btn').addEventListener('click', deletePost);