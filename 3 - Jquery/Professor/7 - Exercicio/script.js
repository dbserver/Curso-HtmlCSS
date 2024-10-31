$(document).ready(function () {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    // Funções para Posts
    function loadPosts() {
        $.get(`${baseUrl}/posts`, function (posts) {
            $('#postList').empty();
            posts.forEach(post => {
                $('#postList')
                    .append(`<li data-id="${post.id}">${post.title} - ${post.body}</li>`);
            });
        });
    }

    $('#createPost').click(function () {
        const title = $('#postTitle').val();
        const body = $('#postBody').val();

        $.post(`${baseUrl}/posts`, { title, body, userId: 1 }, function (newPost) {
            alert('Post criado com sucesso!');
            loadPosts();
        });
    });

    $('#updatePost').click(function () {
        const id = $('#postId').val();
        const title = $('#postTitle').val();
        const body = $('#postBody').val();

        $.ajax({
            url: `${baseUrl}/posts/${id}`,
            method: 'PUT',
            data: { title, body, userId: 1 },
            success: function () {
                alert('Post atualizado com sucesso!');
                loadPosts();
            }
        });
    });

    $('#deletePost').click(function () {
        const id = $('#postId').val();
        $.ajax({
            url: `${baseUrl}/posts/${id}`,
            method: 'DELETE',
            success: function () {
                alert('Post excluído com sucesso!');
                loadPosts();
            }
        });
    });

    // Funções para Comentários
    function loadComments() {
        $.get(`${baseUrl}/comments`, function (comments) {
            $('#commentList').empty();
            comments.forEach(comment => {
                $('#commentList').append(`<li data-id="${comment.id}">${comment.name} - ${comment.body}</li>`);
            });
        });
    }

    $('#createComment').click(function () {
        const postId = $('#commentPostId').val();
        const name = $('#commentName').val();
        const email = $('#commentEmail').val();
        const body = $('#commentBody').val();

        $.post(`${baseUrl}/comments`, { postId, name, email, body }, function (newComment) {
            alert('Comentário criado com sucesso!');
            loadComments();
        });
    });

    $('#updateComment').click(function () {
        const id = $('#commentId').val();
        const name = $('#commentName').val();
        const email = $('#commentEmail').val();
        const body = $('#commentBody').val();

        $.ajax({
            url: `${baseUrl}/comments/${id}`,
            method: 'PUT',
            data: { name, email, body, postId: $('#commentPostId').val() },
            success: function () {
                alert('Comentário atualizado com sucesso!');
                loadComments();
            }
        });
    });

    $('#deleteComment').click(function () {
        const id = $('#commentId').val();
        $.ajax({
            url: `${baseUrl}/comments/${id}`,
            method: 'DELETE',
            success: function () {
                alert('Comentário excluído com sucesso!');
                loadComments();
            }
        });
    });

    // Inicialize
    loadPosts();
    loadComments();
});