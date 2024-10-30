### Interação com o Usuário em JavaScript

JavaScript oferece diversas maneiras de interagir com o usuário em páginas web. A interação pode incluir exibir mensagens, capturar eventos e manipular elementos HTML dinamicamente. Aqui estão algumas das principais técnicas:

---

#### 1. **Alertas, Confirmações e Prompts**

Essas caixas de diálogo são uma maneira básica de interação com o usuário. Elas são úteis para exibir informações, confirmar ações ou solicitar entradas.

- **`alert`**: Exibe uma mensagem simples.
    ```javascript
    alert("Bem-vindo ao site!");
    ```

- **`confirm`**: Exibe uma mensagem com opções "OK" e "Cancelar", retornando `true` ou `false` conforme a resposta.
    ```javascript
    let resposta = confirm("Deseja realmente sair?");
    if (resposta) {
        console.log("Usuário confirmou.");
    } else {
        console.log("Usuário cancelou.");
    }
    ```

- **`prompt`**: Solicita uma entrada do usuário e retorna o valor inserido em forma de string.
    ```javascript
    let nome = prompt("Qual é o seu nome?");
    alert("Olá, " + nome + "!");
    ```

---

#### 2. **Manipulação de Elementos HTML**

É possível acessar e alterar elementos HTML dinamicamente para responder às interações do usuário.

- **`getElementById`**: Seleciona um elemento pelo seu `id` para que ele possa ser manipulado.
    ```javascript
    document.getElementById("meuElemento").innerHTML = "Novo texto!";
    ```

- **`getElementsByClassName` e `getElementsByTagName`**: Selecionam múltiplos elementos de acordo com a classe ou a tag HTML.
    ```javascript
    let elementos = document.getElementsByClassName("minhaClasse");
    elementos[0].style.color = "blue";
    ```

- **Alteração de Estilos**: Alterar estilos de elementos em resposta a eventos.
    ```javascript
    let elemento = document.getElementById("meuElemento");
    elemento.style.backgroundColor = "yellow";
    ```

---

#### 3. **Eventos em JavaScript**

Eventos permitem que o JavaScript reaja a interações do usuário, como cliques de mouse, digitação e movimentação do cursor.

- **Eventos Comuns**:
  - `onclick`: Quando o elemento é clicado.
  - `onmouseover`: Quando o cursor passa sobre o elemento.
  - `onkeydown`: Quando uma tecla é pressionada.

**Exemplo - Botão com Evento `onclick`**:
```html
<button onclick="saudar()">Clique aqui</button>

<script>
    function saudar() {
        alert("Olá!");
    }
</script>
```

**Exemplo - Campo de Texto com `onchange`**:
```html
<input type="text" id="nome" onchange="saudar()">

<script>
    function saudar() {
        let nome = document.getElementById("nome").value;
        alert("Olá, " + nome + "!");
    }
</script>
```

---

#### 4. **Eventos de Formulário**

JavaScript permite validar e manipular formulários antes do envio. Alguns eventos comuns incluem:

- **`onsubmit`**: Chamado quando o formulário é enviado.
- **`onfocus`**: Chamado quando o campo recebe foco.
- **`onblur`**: Chamado quando o campo perde o foco.

**Exemplo - Validação de Formulário com `onsubmit`**:
```html
<form onsubmit="return validarFormulario()">
    <input type="text" id="email" placeholder="Digite seu email">
    <button type="submit">Enviar</button>
</form>

<script>
    function validarFormulario() {
        let email = document.getElementById("email").value;
        if (email === "") {
            alert("Por favor, preencha o email.");
            return false;  // Impede o envio do formulário
        }
        return true;  // Permite o envio
    }
</script>
```

---

#### 5. **Exemplo Completo de Interação com Usuário**

Aqui está um exemplo que combina várias técnicas para uma experiência interativa com o usuário:

**Problema**: Crie um formulário que peça o nome e a idade do usuário. Após o envio, exiba uma mensagem personalizada.

**Código**:
```html
<form onsubmit="return enviarFormulario()">
    <label for="nome">Nome:</label>
    <input type="text" id="nome"><br>

    <label for="idade">Idade:</label>
    <input type="number" id="idade"><br>

    <button type="submit">Enviar</button>
</form>

<script>
    function enviarFormulario() {
        let nome = document.getElementById("nome").value;
        let idade = document.getElementById("idade").value;

        if (nome === "" || idade === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        if (idade < 18) {
            alert("Olá " + nome + ", você é menor de idade.");
        } else {
            alert("Olá " + nome + ", você é maior de idade.");
        }
        
        return false;  // Impede o envio do formulário para fins de demonstração
    }
</script>
```

---