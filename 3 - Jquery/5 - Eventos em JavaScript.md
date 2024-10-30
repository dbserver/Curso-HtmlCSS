## **Eventos em JavaScript com jQuery**

O jQuery simplifica o gerenciamento de eventos em JavaScript, oferecendo uma sintaxe limpa e eficiente para capturar e manipular interações do usuário. Vamos explorar como trabalhar com eventos em jQuery e as práticas recomendadas.

---

### 1. **O Método Básico `ready()`**
- O evento **`ready()`** é usado para garantir que o DOM esteja totalmente carregado antes da execução de qualquer código.

**Exemplo:**
```javascript
$(document).ready(function() {
    console.log("A página está pronta para ser manipulada.");
});
```

---

### 2. **Eventos de Clique (`click()`)**
- Captura cliques em elementos, como botões ou links.

**Exemplo:**
```javascript
$("#meuBotao").click(function() {
    alert("Botão clicado!");
});
```

---

### 3. **Eventos de Mouse**
- **`mouseenter()`** e **`mouseleave()`**: Detectam quando o ponteiro entra ou sai de um elemento.
- **`hover()`**: Combina os eventos `mouseenter` e `mouseleave`.

**Exemplo:**
```javascript
$("#elemento").hover(
    function() { $(this).css("background-color", "yellow"); }, // Quando o mouse entra
    function() { $(this).css("background-color", ""); } // Quando o mouse sai
);
```

---

### 4. **Eventos de Teclado**
- Detectam quando teclas são pressionadas e soltas.

**Exemplos:**
```javascript
$("#campoTexto").keyup(function() {
    console.log("Tecla pressionada: " + $(this).val());
});
```

---

### 5. **Eventos de Formulário**
- **`submit()`**: Captura o envio de um formulário.
- **`change()`**: Detecta quando o valor de um campo muda.
- **`focus()`** e **`blur()`**: Detectam quando um campo ganha ou perde o foco.

**Exemplos:**
```javascript
$("form").submit(function(e) {
    e.preventDefault(); // Impede o envio do formulário
    alert("Formulário enviado!");
});

$("#campoTexto").change(function() {
    console.log("O valor mudou para: " + $(this).val());
});
```

---

### 6. **Eventos de Janela (`onload()` e `resize()`)**
- **`load()`**: Executa uma função após o carregamento de um recurso (como uma imagem).
- **`resize()`**: Captura o redimensionamento da janela do navegador.

**Exemplo:**
```javascript
$(window).resize(function() {
    console.log("A janela foi redimensionada.");
});
```

---

### 7. **Vinculando e Desvinculando Eventos Dinamicamente**
- **`on()`**: Adiciona eventos dinamicamente.
- **`off()`**: Remove eventos vinculados.

**Exemplo:**
```javascript
// Vinculando um evento 'click' dinamicamente
$("#botao").on("click", function() {
    alert("Botão clicado!");
});

// Removendo o evento 'click'
$("#botao").off("click");
```

---

### 8. **Delegação de Eventos**
- A delegação é útil para manipular eventos de elementos criados dinamicamente.

**Exemplo:**
```javascript
$("#lista").on("click", "li", function() {
    alert("Você clicou em um item da lista.");
});
```

Neste exemplo, o evento é atribuído ao elemento `<ul>` existente, mas se aplica aos `<li>` adicionados posteriormente.

---

### 9. **Prevenindo o Comportamento Padrão e Propagação**
- **`preventDefault()`**: Impede o comportamento padrão de um elemento (como o envio de um formulário).
- **`stopPropagation()`**: Interrompe a propagação de um evento na hierarquia do DOM.

**Exemplo:**
```javascript
$("a").click(function(e) {
    e.preventDefault(); // Impede a navegação do link
    alert("Link clicado, mas navegação bloqueada.");
});
```

---

### 10. **Exemplo Completo**
Este exemplo combina vários eventos para mostrar como manipulá-los:

**HTML:**
```html
<form id="meuFormulario">
    <input type="text" id="campoTexto" placeholder="Digite algo...">
    <button id="botao">Enviar</button>
</form>
<div id="areaMouse">Passe o mouse aqui</div>
<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

**JavaScript/jQuery:**
```javascript
$(document).ready(function() {
    // Clique no botão
    $("#botao").click(function(e) {
        e.preventDefault();
        alert("Botão clicado!");
    });

    // Evento de mudança no campo de texto
    $("#campoTexto").change(function() {
        console.log("Campo alterado: " + $(this).val());
    });

    // Evento de hover na área do mouse
    $("#areaMouse").hover(
        function() { $(this).css("background-color", "lightblue"); },
        function() { $(this).css("background-color", ""); }
    );

    // Delegação de evento para itens da lista
    $("#lista").on("click", "li", function() {
        alert("Você clicou em: " + $(this).text());
    });
});
```

---