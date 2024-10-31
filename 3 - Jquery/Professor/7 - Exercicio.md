Aqui está um exercício de CRUD para os endpoints de **posts** e **comments** usando jQuery:

### Exercício CRUD com jQuery e CSS para Posts e Comentários

**Objetivo**: Criar uma interface que permita realizar operações de CRUD (Create, Read, Update e Delete) para **posts** e **comments** usando a API JSONPlaceholder.

#### Passo a Passo

1. **Configuração Inicial**
   - Crie um arquivo `index.html`, um `style.css` para o CSS, e um `script.js` para o jQuery.
   - Inclua o jQuery no `index.html`.

2. **Estrutura HTML**
   - Crie dois formulários, um para **posts** e outro para **comments**, onde o usuário possa criar ou atualizar posts e comentários.
   - Adicione botões para **Criar**, **Atualizar** e **Excluir** em cada formulário.
   - Crie uma lista onde serão exibidos os posts e outra para os comentários.

   ```html
   <!-- HTML Exemplo -->
   <div id="post-section">
     <h2>Gerenciamento de Posts</h2>
     <form id="post-form">
       <input type="hidden" id="postId">
       <label>Título: <input type="text" id="postTitle" required></label>
       <label>Corpo: <textarea id="postBody" required></textarea></label>
       <button type="button" id="createPost">Criar Post</button>
       <button type="button" id="updatePost">Atualizar Post</button>
       <button type="button" id="deletePost">Excluir Post</button>
     </form>
     <ul id="postList"></ul>
   </div>

   <div id="comment-section">
     <h2>Gerenciamento de Comentários</h2>
     <form id="comment-form">
       <input type="hidden" id="commentId">
       <label>Post ID: <input type="number" id="commentPostId" required></label>
       <label>Nome: <input type="text" id="commentName" required></label>
       <label>Email: <input type="email" id="commentEmail" required></label>
       <label>Corpo: <textarea id="commentBody" required></textarea></label>
       <button type="button" id="createComment">Criar Comentário</button>
       <button type="button" id="updateComment">Atualizar Comentário</button>
       <button type="button" id="deleteComment">Excluir Comentário</button>
     </form>
     <ul id="commentList"></ul>
   </div>
   ```

3. **CSS Básico**
   - Estilize os formulários e listas para uma aparência limpa e organizada.

   ```css
   body {
       font-family: Arial, sans-serif;
       display: flex;
       justify-content: space-around;
       padding: 20px;
   }

   h2 {
       color: #333;
   }

   form {
       display: flex;
       flex-direction: column;
       gap: 8px;
       max-width: 300px;
       margin-bottom: 20px;
   }

   ul {
       list-style-type: none;
       padding: 0;
   }

   li {
       background-color: #f0f0f0;
       margin: 5px 0;
       padding: 10px;
       border-radius: 4px;
   }
   ```

4. **CRUD com jQuery**

   - Implemente o CRUD no `script.js`:

   ```javascript
   $(document).ready(function () {
       const baseUrl = 'https://jsonplaceholder.typicode.com';

       // Funções para Posts
       function loadPosts() {
           $.get(`${baseUrl}/posts`, function (posts) {
               $('#postList').empty();
               posts.forEach(post => {
                   $('#postList').append(`<li data-id="${post.id}">${post.title} - ${post.body}</li>`);
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
   ```

5. **Teste**
   - Use o formulário para **Criar**, **Atualizar** e **Excluir** posts e comentários.
   - Observe o console e o network inspector do navegador para verificar as requisições.