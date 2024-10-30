## Exercícios de jQuery

### Exercício 1: Seleção de Elementos
**Objetivo:** Selecionar e modificar elementos da página.

1. Crie um arquivo HTML com um parágrafo, uma lista e um botão.
2. Use jQuery para alterar o texto do parágrafo ao clicar no botão.
3. Adicione um item à lista.

**Exemplo:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 1</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            // Adicione seu código aqui
        });
    </script>
</head>
<body>
    <p id="paragrafo">Texto original</p>
    <ul id="minhaLista">
        <li>Item 1</li>
    </ul>
    <button id="meuBotao">Atualizar</button>
</body>
</html>
```

---

### Exercício 2: Manipulação de CSS
**Objetivo:** Alterar estilos de um elemento.

1. Crie um botão que, quando clicado, muda a cor de fundo de um elemento para azul e aumenta seu tamanho de fonte.

**Exemplo:**
```html
<div id="meuElemento">Texto a ser alterado</div>
<button id="mudarEstilo">Mudar Estilo</button>
<script>
    $(document).ready(function() {
        // Adicione seu código aqui
    });
</script>
```

---

### Exercício 3: Eventos
**Objetivo:** Trabalhar com eventos de mouse e teclado.

1. Crie um campo de texto e um botão. Quando o botão for clicado, deve alertar o valor do campo de texto.
2. Adicione um evento de `mouseenter` ao campo de texto que muda sua cor de fundo.

**Exemplo:**
```html
<input type="text" id="campoTexto" placeholder="Digite algo...">
<button id="alertarValor">Alertar Valor</button>
<script>
    $(document).ready(function() {
        // Adicione seu código aqui
    });
</script>
```

---

### Exercício 4: Manipulação de Formulários
**Objetivo:** Capturar e validar entradas do usuário.

1. Crie um formulário com um campo de nome e um botão de envio.
2. Ao clicar no botão, verifique se o campo está vazio. Se sim, exiba um alerta.

**Exemplo:**
```html
<form id="meuFormulario">
    <input type="text" id="campoNome" placeholder="Digite seu nome">
    <button type="submit">Enviar</button>
</form>
<script>
    $(document).ready(function() {
        // Adicione seu código aqui
    });
</script>
```

---

### Exercício 5: AJAX
**Objetivo:** Fazer uma requisição AJAX simples.

1. Crie um botão que, ao ser clicado, faz uma requisição para `https://jsonplaceholder.typicode.com/todos/1` e exibe os dados retornados no console.

**Exemplo:**
```html
<button id="carregarDados">Carregar Dados</button>
<script>
    $(document).ready(function() {
        // Adicione seu código aqui
    });
</script>
```

---